import Link from "next/link";
export default function Navbar() {
  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="container flex items-center justify-between py-3">
        <Link href="/" className="font-semibold text-xl">Bacchus Finance</Link>
        <nav className="flex gap-4 text-sm">
          <Link href="/learn" className="hover:underline">Learn</Link>
          <Link href="/stocks/AAPL" className="hover:underline">Stocks</Link>
          <Link href="/watchlist" className="hover:underline">Watchlist</Link>
        </nav>
      </div>
    </header>
  );
}
