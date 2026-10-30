import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  NgZone,
  OnChanges,
  OnDestroy,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { ProjectVideo } from '../../data/portfolio.models';
import { ambientEmbedUrl, extractYouTubeId, isShortsUrl, thumbnailUrl } from './youtube';
import { VideoLightboxService } from './video-lightbox.service';

export interface GalleryTile {
  index: number;
  title: string;
  note: string;
  id: string | null;
  portrait: boolean;
  /** Width / height of the video. */
  aspect: number;
  ambientUrl: SafeResourceUrl | null;
  poster: string;
}

interface GalleryRow {
  tiles: GalleryTile[];
  /** CSS grid-template-columns, proportional to each tile's aspect ratio. */
  columns: string;
  /** Combined aspect ratio of the row, so every tile in it shares one height. */
  aspect: number;
  /** Caps the row height by limiting its width (null = full width). */
  maxWidth: string | null;
  /** Exact row height so tiles keep their aspect ratio after the gaps are subtracted. */
  height: string;
}

interface GalleryLayout {
  /** 'stack': landscape featured video on top. 'side': portrait featured video on the left. */
  mode: 'stack' | 'side';
  featured: GalleryTile | null;
  rows: GalleryRow[];
  /** Clips shown in a panning strip instead of rows when a card has too many to fit. */
  strip: GalleryTile[] | null;
  /** CSS duration of one pan across the strip. */
  stripDuration: string;
  /** grid-template-columns for 'side' mode. */
  sideColumns: string;
}

const LANDSCAPE = 16 / 9;
const PORTRAIT = 9 / 16;
const YT_ORIGIN = 'https://www.youtube-nocookie.com';

/** On cards, more clips than this below a landscape featured video go into the panning strip. */
const MAX_STATIC_CLIPS = 3;

/** Packing limits per variant: widest a row may get, tallest a row may be (px). */
const LIMITS = {
  card: { stackRowAspect: 6.6, sideRowAspect: 3, maxRowHeight: 150 },
  detail: { stackRowAspect: 4.4, sideRowAspect: 3, maxRowHeight: 260 },
};

/**
 * Shows a project's videos: the first one large, the rest in justified rows
 * that respect each clip's orientation (landscape videos and vertical Shorts).
 * Every published video autoplays muted and looping while the gallery is on
 * screen, and pauses when it scrolls away. Clicking a tile opens the lightbox
 * with sound and controls. Videos without an ID render a "coming soon" tile.
 */
@Component({
  selector: 'app-project-video-gallery',
  standalone: true,
  imports: [NgFor, NgIf, NgTemplateOutlet],
  templateUrl: './project-video-gallery.component.html',
  styleUrls: ['./project-video-gallery.component.scss'],
})
export class ProjectVideoGalleryComponent implements OnChanges, AfterViewInit, OnDestroy {
  @Input() videos: ProjectVideo[] = [];
  @Input() projectTitle = '';
  /** Shown (blurred) behind placeholder tiles. */
  @Input() fallbackImage = '';
  @Input() variant: 'card' | 'detail' = 'card';

  @ViewChildren('frame') frames?: QueryList<ElementRef<HTMLIFrameElement>>;

  tiles: GalleryTile[] = [];
  layout: GalleryLayout = {
    mode: 'stack',
    featured: null,
    rows: [],
    strip: null,
    stripDuration: '',
    sideColumns: '',
  };
  /** Iframes are only created once the gallery first scrolls into view. */
  started = false;
  readonly reducedMotion: boolean;

  private observer?: IntersectionObserver;
  private inView = false;
  private lightboxOpen = false;
  private readonly subscription: Subscription;

  constructor(
    private host: ElementRef<HTMLElement>,
    private sanitizer: DomSanitizer,
    private zone: NgZone,
    private lightbox: VideoLightboxService
  ) {
    this.reducedMotion =
      typeof window !== 'undefined' &&
      !!window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Pause the ambient players while the lightbox is playing something with sound.
    this.subscription = this.lightbox.state$.subscribe((state) => {
      this.lightboxOpen = state !== null;
      this.syncPlayback();
    });
  }

  get hasPlayable(): boolean {
    return this.tiles.some((t) => t.id !== null);
  }

  ngOnChanges(): void {
    const fallback = this.fallbackImage ? `url("${encodeURI(this.fallbackImage)}")` : 'none';
    this.tiles = (this.videos ?? []).map((video, index) => {
      const id = extractYouTubeId(video.youtube);
      const portrait = (video.orientation ?? (isShortsUrl(video.youtube) ? 'portrait' : 'landscape')) === 'portrait';
      return {
        index,
        title: video.title ?? '',
        note: video.note ?? '',
        id,
        portrait,
        aspect: portrait ? PORTRAIT : LANDSCAPE,
        ambientUrl: id
          ? this.sanitizer.bypassSecurityTrustResourceUrl(ambientEmbedUrl(id))
          : null,
        poster: id ? `url("${thumbnailUrl(id)}")` : fallback,
      };
    });
    this.layout = this.buildLayout();
  }

  ngAfterViewInit(): void {
    if (!this.hasPlayable || this.reducedMotion || typeof IntersectionObserver === 'undefined') {
      return;
    }
    this.zone.runOutsideAngular(() => {
      this.observer = new IntersectionObserver(
        (entries) => this.onVisibilityChange(entries.some((e) => e.isIntersecting)),
        { threshold: 0.2 }
      );
      this.observer.observe(this.host.nativeElement);
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    this.subscription.unsubscribe();
  }

  trackByIndex(_: number, tile: GalleryTile): number {
    return tile.index;
  }

  label(tile: GalleryTile): string {
    return tile.title || `${this.projectTitle} — video ${tile.index + 1}`;
  }

  open(tile: GalleryTile): void {
    const playable = this.tiles.filter((t) => t.id !== null);
    const start = playable.indexOf(tile);
    if (start < 0) {
      return;
    }
    this.lightbox.open(
      this.projectTitle,
      playable.map((t) => ({
        id: t.id as string,
        title: t.title,
        note: t.note,
        portrait: t.portrait,
      })),
      start
    );
  }

  onFrameLoad(frame: HTMLIFrameElement): void {
    // Autoplay starts on load; stop it straight away if we're no longer on screen.
    if (!this.shouldPlay) {
      this.post(frame, 'pauseVideo');
    }
  }

  private buildLayout(): GalleryLayout {
    const [featured, ...others] = this.tiles;
    const empty = { rows: [], strip: null, stripDuration: '', sideColumns: '' };
    if (!featured) {
      return { ...empty, mode: 'stack', featured: null };
    }
    const limits = LIMITS[this.variant];

    if (featured.portrait && others.length) {
      // Portrait featured video on the left, other clips stacked on the right.
      // Size the left column so its height matches the right column's rows.
      const rows = this.packRows(others, limits.sideRowAspect, null);
      const rightHeightPerWidth = rows.reduce((sum, r) => sum + 1 / r.aspect, 0);
      const leftFr = (PORTRAIT * rightHeightPerWidth).toFixed(3);
      return { ...empty, mode: 'side', featured, rows, sideColumns: `${leftFr}fr 1fr` };
    }

    if (this.variant === 'card' && others.length > MAX_STATIC_CLIPS) {
      // Too many clips to show at a useful size: pan them past instead.
      const totalAspect = others.reduce((sum, t) => sum + t.aspect, 0);
      return {
        ...empty,
        mode: 'stack',
        featured,
        strip: others,
        stripDuration: `${Math.max(10, Math.round(totalAspect * 2.5))}s`,
      };
    }

    return {
      ...empty,
      mode: 'stack',
      featured,
      rows: this.packRows(others, limits.stackRowAspect, limits.maxRowHeight),
    };
  }

  /** Greedily packs tiles into rows whose combined aspect stays near `maxAspect`. */
  private packRows(tiles: GalleryTile[], maxAspect: number, maxRowHeight: number | null): GalleryRow[] {
    const groups: GalleryTile[][] = [];
    let current: GalleryTile[] = [];
    let sum = 0;
    for (const tile of tiles) {
      if (current.length && sum + tile.aspect > maxAspect * 1.15) {
        groups.push(current);
        current = [];
        sum = 0;
      }
      current.push(tile);
      sum += tile.aspect;
    }
    if (current.length) {
      groups.push(current);
    }

    return groups.map((group) => {
      const aspect = group.reduce((s, t) => s + t.aspect, 0);
      const maxWidth = maxRowHeight ? `${Math.round(maxRowHeight * aspect)}px` : null;
      const width = maxWidth ? `min(100cqw, ${maxWidth})` : '100cqw';
      return {
        tiles: group,
        aspect,
        columns: group.map((t) => `${t.aspect.toFixed(4)}fr`).join(' '),
        maxWidth,
        // Browsers without container query units ignore this and fall back to aspect-ratio.
        height: `calc((${width} - ${group.length - 1} * var(--vg-gap)) / ${aspect.toFixed(4)})`,
      };
    });
  }

  private get shouldPlay(): boolean {
    return this.inView && !this.lightboxOpen;
  }

  private onVisibilityChange(visible: boolean): void {
    this.inView = visible;
    if (visible && !this.started) {
      this.zone.run(() => (this.started = true));
      return;
    }
    this.syncPlayback();
  }

  private syncPlayback(): void {
    if (!this.started) {
      return;
    }
    const command = this.shouldPlay ? 'playVideo' : 'pauseVideo';
    this.frames?.forEach((ref) => this.post(ref.nativeElement, command));
  }

  private post(frame: HTMLIFrameElement, func: 'playVideo' | 'pauseVideo'): void {
    frame.contentWindow?.postMessage(
      JSON.stringify({ event: 'command', func, args: [] }),
      YT_ORIGIN
    );
  }
}
