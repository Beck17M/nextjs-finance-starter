type Props = { price: number | null; changePct: number | null; };
export default function QuoteBadge({ price, changePct }: Props) {
  const up = (changePct ?? 0) >= 0;
  return (
    <div className="badge gap-2">
      <span className="font-mono">{price != null ? price.toFixed(2) : "--"}</span>
      <span className={up ? "text-green-600" : "text-red-600"}>
        {changePct != null ? `${up ? "▲" : "▼"} ${changePct.toFixed(2)}%` : "--"}
      </span>
    </div>
  );
}
