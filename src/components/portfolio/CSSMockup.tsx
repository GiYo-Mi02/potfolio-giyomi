interface CSSMockupProps {
  variant: "dashboard" | "ecommerce" | "saas" | "mobile";
  accentColor: string;
}

export default function CSSMockup({ variant, accentColor }: CSSMockupProps) {
  if (variant === "dashboard") {
    return (
      <div className="w-full h-full p-3 flex gap-2">
        {/* Sidebar */}
        <div className="w-12 h-full bg-white/5 rounded-lg flex flex-col gap-2 p-2">
          <div className={`w-full aspect-square rounded ${accentColor} opacity-80`} />
          <div className="w-full aspect-square rounded bg-white/10" />
          <div className="w-full aspect-square rounded bg-white/10" />
          <div className="w-full aspect-square rounded bg-white/10" />
        </div>
        {/* Main content */}
        <div className="flex-1 flex flex-col gap-2">
          {/* Header */}
          <div className="h-8 bg-white/5 rounded-lg flex items-center px-3 gap-2">
            <div className="w-16 h-3 bg-white/20 rounded" />
            <div className="flex-1" />
            <div className="w-6 h-6 rounded-full bg-white/10" />
          </div>
          {/* Cards */}
          <div className="flex-1 grid grid-cols-2 gap-2">
            <div className="bg-white/5 rounded-lg p-2 flex flex-col gap-1">
              <div className="w-8 h-8 rounded bg-white/10" />
              <div className="w-full h-2 bg-white/10 rounded mt-auto" />
            </div>
            <div className="bg-white/5 rounded-lg p-2 flex flex-col gap-1">
              <div className={`w-8 h-8 rounded ${accentColor} opacity-60`} />
              <div className="w-3/4 h-2 bg-white/10 rounded mt-auto" />
            </div>
            <div className="col-span-2 bg-white/5 rounded-lg p-2">
              <div className="flex gap-1 h-full items-end">
                {[40, 65, 45, 80, 55, 70, 50].map((h, i) => (
                  <div
                    key={i}
                    className={`flex-1 rounded-t ${i === 3 ? accentColor : "bg-white/20"}`}
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "ecommerce") {
    return (
      <div className="w-full h-full p-3 flex flex-col gap-2">
        {/* Header */}
        <div className="h-8 bg-white/5 rounded-lg flex items-center px-3 gap-3">
          <div className="w-12 h-3 bg-white/20 rounded" />
          <div className="flex-1 flex justify-center gap-4">
            <div className="w-8 h-2 bg-white/10 rounded" />
            <div className="w-8 h-2 bg-white/10 rounded" />
            <div className="w-8 h-2 bg-white/10 rounded" />
          </div>
          <div className="w-5 h-5 rounded bg-white/10" />
        </div>
        {/* Product grid */}
        <div className="flex-1 grid grid-cols-3 gap-2">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-white/5 rounded-lg p-2 flex flex-col gap-1">
              <div className={`flex-1 rounded ${i === 1 ? accentColor + " opacity-40" : "bg-white/10"}`} />
              <div className="w-3/4 h-2 bg-white/15 rounded" />
              <div className="w-1/2 h-2 bg-white/10 rounded" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (variant === "saas") {
    return (
      <div className="w-full h-full p-3 flex flex-col gap-2">
        {/* Nav */}
        <div className="h-6 flex items-center gap-3">
          <div className={`w-6 h-6 rounded ${accentColor}`} />
          <div className="flex-1" />
          <div className="w-16 h-5 rounded bg-white/10" />
          <div className={`w-16 h-5 rounded ${accentColor}`} />
        </div>
        {/* Hero */}
        <div className="flex-1 flex flex-col items-center justify-center gap-3 py-4">
          <div className="w-3/4 h-4 bg-white/20 rounded" />
          <div className="w-1/2 h-3 bg-white/10 rounded" />
          <div className={`w-24 h-6 rounded-full ${accentColor} mt-2`} />
        </div>
        {/* Features */}
        <div className="grid grid-cols-3 gap-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white/5 rounded-lg p-2 flex flex-col items-center gap-1">
              <div className="w-6 h-6 rounded bg-white/10" />
              <div className="w-full h-2 bg-white/10 rounded" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Mobile variant
  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <div className="w-24 h-full bg-white/5 rounded-2xl p-2 flex flex-col gap-2">
        {/* Status bar */}
        <div className="h-3 flex items-center justify-between px-1">
          <div className="w-4 h-1.5 bg-white/20 rounded" />
          <div className="w-6 h-1.5 bg-white/20 rounded" />
        </div>
        {/* Content */}
        <div className="flex-1 flex flex-col gap-2">
          <div className={`h-16 rounded-lg ${accentColor} opacity-60`} />
          <div className="w-3/4 h-2 bg-white/20 rounded" />
          <div className="w-1/2 h-2 bg-white/10 rounded" />
          <div className="flex-1" />
          <div className="grid grid-cols-4 gap-1">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square rounded bg-white/10" />
            ))}
          </div>
        </div>
        {/* Home indicator */}
        <div className="h-1 w-12 mx-auto bg-white/30 rounded-full" />
      </div>
    </div>
  );
}
