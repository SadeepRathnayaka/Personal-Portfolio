import {
  Component,
  ElementRef,
  HostListener,
  Inject,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { DOCUMENT, NgFor, NgIf } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { fullEmbedUrl } from './youtube';
import { LightboxState, LightboxVideo, VideoLightboxService } from './video-lightbox.service';

/** App-level overlay that plays one project video with sound and controls. */
@Component({
  selector: 'app-video-lightbox',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './video-lightbox.component.html',
  styleUrls: ['./video-lightbox.component.scss'],
})
export class VideoLightboxComponent implements OnDestroy {
  @ViewChild('closeBtn') closeBtn?: ElementRef<HTMLButtonElement>;

  state: LightboxState | null = null;
  url: SafeResourceUrl | null = null;

  private currentId = '';
  private returnFocus: HTMLElement | null = null;
  private readonly subscription: Subscription;

  constructor(
    private lightbox: VideoLightboxService,
    private sanitizer: DomSanitizer,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.subscription = this.lightbox.state$.subscribe((state) => this.apply(state));
  }

  get current(): LightboxVideo | null {
    return this.state ? this.state.videos[this.state.index] : null;
  }

  get currentTitle(): string {
    if (!this.state) {
      return '';
    }
    const { videos, index } = this.state;
    return videos[index].title || `Video ${index + 1} of ${videos.length}`;
  }

  @HostListener('document:keydown', ['$event'])
  onKeydown(event: KeyboardEvent): void {
    if (!this.state) {
      return;
    }
    if (event.key === 'Escape') {
      this.close();
    } else if (event.key === 'ArrowRight') {
      this.step(1);
    } else if (event.key === 'ArrowLeft') {
      this.step(-1);
    }
  }

  step(delta: number): void {
    this.lightbox.step(delta);
  }

  goTo(index: number): void {
    if (this.state) {
      this.lightbox.open(this.state.projectTitle, this.state.videos, index);
    }
  }

  close(): void {
    this.lightbox.close();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.document.body.style.overflow = '';
  }

  private apply(state: LightboxState | null): void {
    const wasOpen = this.state !== null;
    this.state = state;

    const id = state ? state.videos[state.index].id : '';
    if (id !== this.currentId) {
      this.currentId = id;
      this.url = id ? this.sanitizer.bypassSecurityTrustResourceUrl(fullEmbedUrl(id)) : null;
    }

    this.document.body.style.overflow = state ? 'hidden' : '';

    if (state && !wasOpen) {
      this.returnFocus = this.document.activeElement as HTMLElement | null;
      setTimeout(() => this.closeBtn?.nativeElement.focus());
    } else if (!state && wasOpen) {
      this.returnFocus?.focus?.();
      this.returnFocus = null;
    }
  }
}
