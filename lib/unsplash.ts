// Build-time photo fetching, ported from Framework Advisory's
// lib/unsplash.ts. Fails closed: any missing key, network error, or empty
// result returns null, and callers fall back to the coded gradient mockup
// (components/industries/RestaurantMockupCard.tsx) instead of breaking.
export type UnsplashPhoto = {
  url: string;
  alt: string;
  photographerName: string;
  photographerUrl: string;
};

export async function getUnsplashPhoto(
  query: string,
  altText: string
): Promise<UnsplashPhoto | null> {
  const accessKey = process.env.UNSPLASH_ACCESS_KEY;
  if (!accessKey) return null;

  try {
    const res = await fetch(
      `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
        query
      )}&per_page=1&orientation=landscape`,
      {
        headers: { Authorization: `Client-ID ${accessKey}` },
        next: { revalidate: 60 * 60 * 24 * 30 },
      }
    );
    if (!res.ok) return null;

    const data = await res.json();
    const photo = data?.results?.[0];
    if (!photo?.urls?.regular) return null;

    // Unsplash API guidelines require pinging this endpoint whenever a
    // photo is actually used, separate from the search request itself.
    if (photo.links?.download_location) {
      fetch(`${photo.links.download_location}&client_id=${accessKey}`).catch(
        () => {}
      );
    }

    return {
      url: photo.urls.regular,
      alt: altText,
      photographerName: photo.user?.name || "Unsplash contributor",
      photographerUrl: `${photo.user?.links?.html || "https://unsplash.com"}?utm_source=even_ground_co&utm_medium=referral`,
    };
  } catch {
    return null;
  }
}
