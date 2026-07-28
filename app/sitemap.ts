import type { MetadataRoute } from "next";

// Update to the real custom domain once evenground.com is connected.
const BASE_URL = "https://even-ground-co.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/louisville", "/nashville", "/industries/restaurants"];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
  }));
}
