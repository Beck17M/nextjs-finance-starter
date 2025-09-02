import QuoteBadge from "@/components/QuoteBadge";

async function fetchQuote(symbol: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL ?? ""}/api/quote?symbol=${symbol}`, { next: { revalidate: 300 } });
  if (!res.ok) return null;
  return res.json();
}

export default async function StockPage({ params }: { params: { symbol: string } }) {
  const symbol = params.symbol.toUpperCase();
  const quote = await fetchQuote(symbol);
  return (
    <div className="grid gap-4">
      <div className="card flex items-center justify-between">
        <h1 className="text-2xl font-semibold">{symbol}</h1>
        <QuoteBadge price={quote?.price ?? null} changePct={quote?.changePct ?? null} />
      </div>

      <div className="card">
        <h2 className="text-lg font-semibold mb-2">Chart</h2>
        <p className="text-sm text-gray-600 mb-2">Data is delayed. For demonstration only.</p>
        <div className="aspect-video w-full">
          <iframe
            className="w-full h-full rounded-xl border"
            src={`https://widget.finnhub.io/widgets/stocks/chart?symbol=${symbol}&watermarkColor=%23666&backgroundColor=%23fff&textColor=%23000`}
          />
        </div>
      </div>

      <div className="card">
        <h2 className="text-lg font-semibold mb-2">Key numbers</h2>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <li><span className="text-gray-500">Last close</span><div className="font-mono">{quote?.prevClose ?? "--"}</div></li>
          <li><span className="text-gray-500">As of</span><div className="font-mono">{quote?.asOf ?? "--"}</div></li>
          <li><span className="text-gray-500">Change</span><div className="font-mono">{quote?.change?.toFixed?.(2) ?? "--"}</div></li>
          <li><span className="text-gray-500">% Change</span><div className="font-mono">{quote?.changePct?.toFixed?.(2) ?? "--"}%</div></li>
        </ul>
      </div>
    </div>
  );
}
