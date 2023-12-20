import type { CacheEntry } from "@epic-web/cachified"
import { lruCacheAdapter } from "@epic-web/cachified"
import { remember } from "@epic-web/remember"
import { LRUCache } from "lru-cache"

const lru = remember(
  "lru-cache",
  () => new LRUCache<string, CacheEntry>({ max: 5000 })
)

export const lruCache = lruCacheAdapter(lru)
