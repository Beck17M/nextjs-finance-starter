import Link from "next/link";
const topics = [
  { slug: "etf-101", title: "ETF 101" },
  { slug: "how-to-read-a-chart", title: "How to read a chart" },
  { slug: "dividends-101", title: "Dividends 101" },
];
export default function LearnIndex() {
  return (
    <div className="grid gap-4">
      <h1 className="text-2xl font-semibold">Learn</h1>
      <ul className="grid gap-3">
        {topics.map(t => (
          <li key={t.slug} className="card">
            <Link className="underline" href={`/learn/${t.slug}`}>{t.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
