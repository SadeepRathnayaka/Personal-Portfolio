import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface LightboxVideo {
  id: string;
  title: string;
  note: string;
  portrait: boolean;
}

export interface LightboxState {
  projectTitle: string;
  videos: LightboxVideo[];
  index: number;
}

/**
 * Opens a single, app-level video lightbox. It lives in AppComponent (outside
 * the project cards) so the cards' hover transforms and overflow can't clip it.
 */
@Injectable({ providedIn: 'root' })
export class VideoLightboxService {
  private readonly stateSubject = new BehaviorSubject<LightboxState | null>(null);
  readonly state$ = this.stateSubject.asObservable();

  get isOpen(): boolean {
    return this.stateSubject.value !== null;
  }

  open(projectTitle: string, videos: LightboxVideo[], index: number): void {
    if (!videos.length) {
      return;
    }
    this.stateSubject.next({ projectTitle, videos, index });
  }

  step(delta: number): void {
    const state = this.stateSubject.value;
    if (!state || state.videos.length < 2) {
      return;
    }
    const count = state.videos.length;
    this.stateSubject.next({ ...state, index: (state.index + delta + count) % count });
  }

  close(): void {
    this.stateSubject.next(null);
  }
}
