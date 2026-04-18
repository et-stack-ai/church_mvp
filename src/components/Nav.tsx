import Link from "next/link";

export default function Nav() {
  return (
    <nav className="border-b border-stone-200 bg-white/80 backdrop-blur sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between gap-4">
        <Link href="/" className="font-semibold text-violet-700 text-lg tracking-tight flex-shrink-0">
          Solace
        </Link>
        <div className="flex items-center gap-1 text-sm overflow-x-auto">
          <Link href="/catalog" className="px-3 py-2 text-stone-500 hover:text-stone-900 whitespace-nowrap transition-colors">
            Catalog
          </Link>
          <Link href="/journey" className="px-3 py-2 text-stone-500 hover:text-stone-900 whitespace-nowrap transition-colors">
            Today
          </Link>
          <Link href="/journal" className="px-3 py-2 text-stone-500 hover:text-stone-900 whitespace-nowrap transition-colors">
            Journal
          </Link>
          <Link href="/pricing" className="px-3 py-2 text-stone-500 hover:text-stone-900 whitespace-nowrap transition-colors">
            Pricing
          </Link>
          <Link
            href="/journey"
            className="ml-2 px-4 py-1.5 bg-violet-600 text-white rounded-full text-sm font-medium hover:bg-violet-700 transition-colors whitespace-nowrap"
          >
            Begin Today
          </Link>
        </div>
      </div>
    </nav>
  );
}
