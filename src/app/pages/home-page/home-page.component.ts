import { AfterViewInit, Component, Inject, NgZone, OnDestroy } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { HomeComponent } from '../../features/home/home.component';
import { TimelineComponent } from '../../features/timeline/timeline.component';
import { ProjectsComponent } from '../../features/projects/projects.component';
import { AchievementsComponent } from '../../features/achievements/achievements.component';
import { SkillsComponent } from '../../features/skills/skills.component';
import { ContactComponent } from '../../features/contact/contact.component';

/** Remembered in the visitor's browser so the intro scroll only happens once. */
const INTRO_SEEN_KEY = 'portfolio:intro-scroll-seen';
/** Time on the hero before the page starts moving. */
const INTRO_DELAY_MS = 2000;
/** Length of the glide down to the Projects section. */
const INTRO_DURATION_MS = 2200;

const INTERRUPT_EVENTS = ['wheel', 'touchstart', 'keydown', 'mousedown'] as const;

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    HomeComponent,
    TimelineComponent,
    ProjectsComponent,
    AchievementsComponent,
    SkillsComponent,
    ContactComponent,
  ],
  template: `
    <app-home></app-home>
    <app-projects></app-projects>
    <app-timeline></app-timeline>
    <app-achievements></app-achievements>
    <app-skills></app-skills>
    <app-contact></app-contact>
  `,
})
export class HomePageComponent implements AfterViewInit, OnDestroy {
  private timer?: ReturnType<typeof setTimeout>;
  private frame?: number;
  private restoreScrollBehavior?: () => void;
  private readonly cancel = () => this.stopIntro();

  constructor(@Inject(DOCUMENT) private document: Document, private zone: NgZone) {}

  ngAfterViewInit(): void {
    if (!this.shouldPlayIntro()) {
      return;
    }
    this.markIntroSeen();

    this.zone.runOutsideAngular(() => {
      // Any input from the visitor means they're steering themselves: back off.
      INTERRUPT_EVENTS.forEach((type) =>
        window.addEventListener(type, this.cancel, { passive: true, once: true })
      );
      this.timer = setTimeout(() => this.glideToProjects(), INTRO_DELAY_MS);
    });
  }

  ngOnDestroy(): void {
    this.stopIntro();
  }

  private shouldPlayIntro(): boolean {
    const win = this.document.defaultView;
    if (!win) {
      return false;
    }
    const reducedMotion = win.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    const deepLinked = !!win.location.hash; // e.g. #contact from a shared link
    const alreadyScrolled = win.scrollY > 40;
    return !reducedMotion && !deepLinked && !alreadyScrolled && !this.introSeen();
  }

  private glideToProjects(): void {
    const win = this.document.defaultView;
    const section = this.document.getElementById('projects');
    if (!win || !section || win.scrollY > 40) {
      this.stopIntro();
      return;
    }

    const root = this.document.documentElement;
    // The site sets `scroll-behavior: smooth` globally; switch it off while we
    // drive the scroll ourselves, or every frame would start its own animation.
    const previousBehavior = root.style.scrollBehavior;
    root.style.scrollBehavior = 'auto';
    this.restoreScrollBehavior = () => (root.style.scrollBehavior = previousBehavior);

    const headerOffset = parseFloat(win.getComputedStyle(root).scrollPaddingTop) || 0;
    // Re-measured each frame so late-loading images can't make us overshoot.
    const target = () =>
      Math.max(0, section.getBoundingClientRect().top + win.scrollY - headerOffset);

    const startY = win.scrollY;
    const startTime = performance.now();
    const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

    const step = (now: number) => {
      const progress = Math.min(1, (now - startTime) / INTRO_DURATION_MS);
      win.scrollTo(0, startY + (target() - startY) * ease(progress));
      if (progress < 1) {
        this.frame = win.requestAnimationFrame(step);
      } else {
        this.stopIntro();
      }
    };
    this.frame = win.requestAnimationFrame(step);
  }

  private stopIntro(): void {
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = undefined;
    }
    if (this.frame !== undefined) {
      cancelAnimationFrame(this.frame);
      this.frame = undefined;
    }
    INTERRUPT_EVENTS.forEach((type) => window.removeEventListener(type, this.cancel));
    // Put the site's smooth scrolling back, whether the glide finished or was cut short.
    this.restoreScrollBehavior?.();
    this.restoreScrollBehavior = undefined;
  }

  private introSeen(): boolean {
    try {
      return localStorage.getItem(INTRO_SEEN_KEY) === '1';
    } catch {
      return false; // storage blocked: treat as a first visit
    }
  }

  private markIntroSeen(): void {
    try {
      localStorage.setItem(INTRO_SEEN_KEY, '1');
    } catch {
      // Private mode or blocked storage: the intro may simply play again next time.
    }
  }
}
