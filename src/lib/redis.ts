import { Redis } from "@upstash/redis";
export const redis = process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN
  ? new Redis({ url: process.env.UPSTASH_REDIS_REST_URL, token: process.env.UPSTASH_REDIS_REST_TOKEN })
  : null;
export async function cached<T>(key: string, ttlSeconds: number, fetcher: () => Promise<T>): Promise<T> {
  if (!redis) return await fetcher();
  const cachedVal = await redis.get<T>(key);
  if (cachedVal) return cachedVal;
  const value = await fetcher();
  await redis.set(key, value, { ex: ttlSeconds });
  return value;
}
