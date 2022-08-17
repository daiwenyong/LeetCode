// const lruCache = new LRUCache(2); // 最大缓存长度 2
// lruCache.set(1, 1); // 缓存是 {1=1}
// lruCache.set(2, 2); // 缓存是 {1=1, 2=2}
// lruCache.get(1);    // 返回 1
// lruCache.set(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
// lruCache.get(2);    // 返回 null
// lruCache.set(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
// lruCache.get(1);    // 返回 null
// lruCache.get(3);    // 返回 3
// lruCache.get(4);    // 返回 4


class LRUCache {
    constructor(max) {
        this.max = max
        this.map = new Map()
        this.arr = []
    }

    get size() {
        return this.map.size
    }

    set(k, v) {
        if (this.size === this.max) {
            const delK = this.arr.pop()
            this.map.delete(delK)
        }
        this.arr.push(k)
        this.map.set(k, v)
    }

    get(k) {
        const v = this.map.get(k)
        if (v) {
            if (this.arr[0] === v) return
            this.arr = this.arr.filter(i => i !== v)
            this.arr.unshift(v)
        }
        return v || null
    }
}

const lru = new LRUCache(3)
lru.set(1, 1)
lru.set(2, 2)
lru.set(3, 3)
lru.get(2)
console.log(lru.arr) // 2 1 3
// console.log(lru.get(2))
lru.set(4, 4) // 2 1 4
console.log(lru.get(3))
// lru.set(4,4)
// console.log(lru.get(1))
// console.log(lru.get(3))
// console.log(lru.get(4))
