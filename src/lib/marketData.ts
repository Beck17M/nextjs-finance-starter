import axios from "axios";
import { cached } from "@/lib/redis";

export type Quote = { symbol: string; price: number | null; prevClose: number | null; change: number | null; changePct: number | null; asOf: string | null; };
const ALPHA_URL = "https://www.alphavantage.co/query";
const API_KEY = process.env.ALPHA_VANTAGE_API_KEY;

function parseLatestDaily(data: any): Quote | null {
  const meta = data["Meta Data"];
  const series = data["Time Series (Daily)"];
  if (!meta || !series) return null;
  const symbol = meta["2. Symbol"];
  const dates = Object.keys(series).sort().reverse();
  const latest = series[dates[0]];
  const prev = series[dates[1]];
  const price = latest ? parseFloat(latest["4. close"]) : null;
  const prevClose = prev ? parseFloat(prev["4. close"]) : null;
  const change = price != null && prevClose != null ? price - prevClose : null;
  const changePct = change != null && prevClose ? (change / prevClose) * 100 : null;
  return { symbol, price, prevClose, change, changePct, asOf: dates[0] ?? null };
}

export async function getDailyQuote(symbol: string): Promise<Quote | null> {
  if (!API_KEY) throw new Error("Missing ALPHA_VANTAGE_API_KEY");
  const key = `av:daily:${symbol.toUpperCase()}`;
  return await cached(key, 60 * 15, async () => {
    const params = { function: "TIME_SERIES_DAILY", symbol, apikey: API_KEY, outputsize: "compact" };
    const { data } = await axios.get(ALPHA_URL, { params, timeout: 15000 });
    if (data && (data["Note"] || data["Error Message"])) throw new Error(data["Note"] || data["Error Message"]);
    return parseLatestDaily(data);
  });
}
