import type { UnsplashPhoto } from "@/lib/unsplash";

const menuItems = [
  { name: "Tacos al Pastor", gradient: "linear-gradient(135deg, #E8A23D, #C0392B)" },
  { name: "Elote Callejero", gradient: "linear-gradient(135deg, #D9B44A, #8BC34A)" },
  { name: "Mango Margarita", gradient: "linear-gradient(135deg, #E8A23D, #8BC34A)" },
];

export function RestaurantMockupCard({
  heroPhoto,
  menuPhotos,
}: {
  heroPhoto?: UnsplashPhoto | null;
  menuPhotos?: (UnsplashPhoto | null)[];
}) {
  const credits = [heroPhoto, ...(menuPhotos ?? [])].filter(
    (p): p is UnsplashPhoto => Boolean(p)
  );

  return (
    <div>
      <div className="overflow-hidden rounded-2xl border border-border shadow-xl">
        {/* Browser chrome */}
        <div className="flex items-center gap-2 border-b border-border bg-surface px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-400/70" />
          <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
          <span className="h-3 w-3 rounded-full bg-green-400/70" />
          <span className="ml-3 rounded-md bg-background px-3 py-1 text-xs text-muted">
            casadelsolrestaurant.com
          </span>
        </div>

        {/* Mock homepage */}
        <div style={{ background: "#FBF3E7" }}>
          <div className="flex items-center justify-between px-6 py-4">
            <span
              className="font-display text-lg font-semibold"
              style={{ color: "#7A2E1D" }}
            >
              Casa del Sol
            </span>
            <div className="flex flex-wrap items-center justify-end gap-x-3 gap-y-1 text-[10px] font-semibold tracking-wide sm:gap-x-5 sm:text-xs">
              <span
                className="cursor-pointer border-b border-transparent pb-0.5 transition-colors hover:border-current"
                style={{ color: "#7A2E1D" }}
              >
                Menu
              </span>
              <span
                className="cursor-pointer border-b border-transparent pb-0.5 transition-colors hover:border-current"
                style={{ color: "#7A2E1D" }}
              >
                Reservations
              </span>
              <span
                className="cursor-pointer border-b border-transparent pb-0.5 transition-colors hover:border-current"
                style={{ color: "#7A2E1D" }}
              >
                Hours
              </span>
              <span
                className="cursor-pointer rounded-full px-3 py-1 text-white"
                style={{ background: "#7A2E1D" }}
              >
                Order Online
              </span>
            </div>
          </div>

          <div
            className="relative mx-4 flex h-40 flex-col items-start justify-end overflow-hidden rounded-xl p-5 sm:h-52"
            style={
              heroPhoto
                ? undefined
                : { background: "linear-gradient(135deg, #C0392B, #E8A23D)" }
            }
          >
            {heroPhoto && (
              <>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={heroPhoto.url}
                  alt={heroPhoto.alt}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </>
            )}
            <p className="relative font-display text-2xl font-semibold text-white sm:text-3xl">
              Casa del Sol
            </p>
            <p className="relative mt-1 text-sm text-white/90">Modern Mexican Kitchen</p>
            <div className="relative mt-3 flex flex-wrap gap-2">
              <button
                className="rounded-full px-4 py-2 text-xs font-semibold text-white"
                style={{ background: "#7A2E1D" }}
              >
                Reserve a Table
              </button>
              <button className="rounded-full border border-white/70 px-4 py-2 text-xs font-semibold text-white backdrop-blur-sm">
                View Menu
              </button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 px-4 py-5">
            {menuItems.map((item, index) => {
              const photo = menuPhotos?.[index];
              return (
                <div key={item.name}>
                  <div
                    className="h-16 overflow-hidden rounded-lg sm:h-20"
                    style={photo ? undefined : { background: item.gradient }}
                  >
                    {photo && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={photo.url}
                        alt={photo.alt}
                        className="h-full w-full object-cover"
                      />
                    )}
                  </div>
                  <p className="mt-1.5 text-center text-[11px] font-medium" style={{ color: "#7A2E1D" }}>
                    {item.name}
                  </p>
                </div>
              );
            })}
          </div>

          <div
            className="flex items-center justify-between px-6 py-3 text-[11px]"
            style={{ background: "#7A2E1D", color: "#FBF3E7" }}
          >
            <span>Open Tue–Sun, 4pm–10pm</span>
            <span>Serving Louisville &amp; Nashville</span>
          </div>
        </div>
      </div>

      {credits.length > 0 && (
        <p className="mt-2 text-right text-xs text-muted">
          Photos by{" "}
          {credits.map((photo, i) => (
            <span key={photo.photographerUrl}>
              <a
                href={photo.photographerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-clay hover:underline"
              >
                {photo.photographerName}
              </a>
              {i < credits.length - 1 ? ", " : " "}
            </span>
          ))}
          on{" "}
          <a
            href="https://unsplash.com/?utm_source=even_ground_co&utm_medium=referral"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-clay hover:underline"
          >
            Unsplash
          </a>
        </p>
      )}
    </div>
  );
}
