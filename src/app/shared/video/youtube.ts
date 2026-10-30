/**
 * Extracts an 11-character YouTube video ID from either a bare ID or any
 * common YouTube URL (watch?v=, youtu.be/, /embed/, /shorts/, /live/).
 * Returns null for empty or unrecognised input, which renders a placeholder.
 */
export function extractYouTubeId(input: string | null | undefined): string | null {
  const value = (input ?? '').trim();
  if (!value) {
    return null;
  }
  if (/^[\w-]{11}$/.test(value)) {
    return value;
  }
  const match = value.match(
    /(?:youtu\.be\/|[?&]v=|\/embed\/|\/shorts\/|\/live\/)([\w-]{11})/
  );
  return match ? match[1] : null;
}

/** YouTube Shorts are vertical (9:16). */
export function isShortsUrl(input: string | null | undefined): boolean {
  return /\/shorts\//.test(input ?? '');
}

const EMBED_HOST = 'https://www.youtube-nocookie.com/embed/';

/** Muted, looping, chrome-less player used for the always-on gallery tiles. */
export function ambientEmbedUrl(id: string): string {
  const params = new URLSearchParams({
    autoplay: '1',
    mute: '1',
    loop: '1',
    playlist: id, // required for loop=1 to work on a single video
    controls: '0',
    playsinline: '1',
    rel: '0',
    modestbranding: '1',
    iv_load_policy: '3',
    disablekb: '1',
    enablejsapi: '1', // lets us pause/play off-screen tiles via postMessage
  });
  return `${EMBED_HOST}${id}?${params.toString()}`;
}

/** Full player with sound and controls, used in the lightbox. */
export function fullEmbedUrl(id: string): string {
  const params = new URLSearchParams({
    autoplay: '1',
    rel: '0',
    modestbranding: '1',
    playsinline: '1',
  });
  return `${EMBED_HOST}${id}?${params.toString()}`;
}

export function thumbnailUrl(id: string): string {
  return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
}
