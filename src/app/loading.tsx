export default function Loading() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
      <div className="h-12 w-2/3 overflow-hidden rounded-md bg-line">
        <div className="h-full w-1/2 animate-slide-sheen bg-white/70" />
      </div>
      <div className="mt-5 h-5 w-full max-w-xl overflow-hidden rounded-md bg-line">
        <div className="h-full w-1/2 animate-slide-sheen bg-white/70" />
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {[0, 1, 2].map((item) => (
          <div key={item} className="h-52 overflow-hidden rounded-lg bg-line">
            <div className="h-full w-1/2 animate-slide-sheen bg-white/70" />
          </div>
        ))}
      </div>
    </main>
  );
}
