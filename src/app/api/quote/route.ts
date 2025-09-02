import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getDailyQuote } from "@/lib/marketData";

const schema = z.object({ symbol: z.string().min(1) });

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const symbol = searchParams.get("symbol") || "";
  const parsed = schema.safeParse({ symbol });
  if (!parsed.success) return NextResponse.json({ error: "Invalid symbol" }, { status: 400 });
  try {
    const quote = await getDailyQuote(parsed.data.symbol);
    if (!quote) return NextResponse.json({ error: "No data" }, { status: 404 });
    return NextResponse.json(quote, { headers: { "Cache-Control": "s-maxage=300, stale-while-revalidate=600" } });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || "Server error" }, { status: 502 });
  }
}
