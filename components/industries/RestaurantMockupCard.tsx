const menuItems = [
  { name: "Tacos al Pastor", gradient: "linear-gradient(135deg, #E8A23D, #C0392B)" },
  { name: "Elote Callejero", gradient: "linear-gradient(135deg, #D9B44A, #8BC34A)" },
  { name: "Mango Margarita", gradient: "linear-gradient(135deg, #E8A23D, #8BC34A)" },
];

export function RestaurantMockupCard() {
  return (
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
          <div className="hidden gap-4 text-xs font-medium sm:flex" style={{ color: "#7A2E1D" }}>
            <span>Menu</span>
            <span>Reservations</span>
            <span>Order Online</span>
            <span>Hours</span>
          </div>
        </div>

        <div
          className="relative mx-4 flex h-40 flex-col items-start justify-end rounded-xl p-5 sm:h-52"
          style={{
            background: "linear-gradient(135deg, #C0392B, #E8A23D)",
          }}
        >
          <p className="font-display text-2xl font-semibold text-white sm:text-3xl">
            Casa del Sol
          </p>
          <p className="mt-1 text-sm text-white/90">
            Modern Mexican Kitchen — Louisville, KY
          </p>
          <button
            className="mt-3 rounded-full px-4 py-2 text-xs font-semibold text-white"
            style={{ background: "#7A2E1D" }}
          >
            Reserve a Table
          </button>
        </div>

        <div className="grid grid-cols-3 gap-3 px-4 py-5">
          {menuItems.map((item) => (
            <div key={item.name}>
              <div
                className="h-16 rounded-lg sm:h-20"
                style={{ background: item.gradient }}
              />
              <p className="mt-1.5 text-center text-[11px] font-medium" style={{ color: "#7A2E1D" }}>
                {item.name}
              </p>
            </div>
          ))}
        </div>

        <div
          className="flex items-center justify-between px-6 py-3 text-[11px]"
          style={{ background: "#7A2E1D", color: "#FBF3E7" }}
        >
          <span>Open Tue–Sun, 4pm–10pm</span>
          <span>412 S 4th St, Louisville, KY</span>
        </div>
      </div>
    </div>
  );
}
