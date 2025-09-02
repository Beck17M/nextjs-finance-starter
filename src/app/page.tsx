import Link from "next/link";

export default async function HomePage() {
  return (
    <div className="grid gap-6">
      <section className="card">
        <h1 className="text-2xl font-semibold mb-2">Finance made friendly</h1>
        <p className="text-gray-700 mb-4">
          Learn the basics, explore stocks & ETFs, and build good habits.
        </p>
        <div className="flex gap-3">
          <Link className="btn" href="/learn">Start learning</Link>
          <Link className="btn" href="/stocks/AAPL">See a stock example</Link>
        </div>
      </section>

      <section className="card">
        <h2 className="text-xl font-semibold mb-2">Beginner paths</h2>
        <ul className="list-disc ml-6 text-gray-700">
          <li><Link href="/learn/etf-101" className="underline">ETF 101</Link></li>
          <li><Link href="/learn/how-to-read-a-chart" className="underline">How to read a chart</Link></li>
          <li><Link href="/learn/dividends-101" className="underline">Dividends 101</Link></li>
        </ul>
      </section>
    </div>
  );
}
