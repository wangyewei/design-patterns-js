function splitArraySameAverage(nums: number[]): boolean {
  const n = nums.length
  if (n < 2) return false
  const sum = nums.reduce((prev, curr) => prev + curr, 0)

  const memo: Map<number, boolean>[] = Array.from({ length: n }).fill(0).map(() => new Map<number, boolean>())
  return dfs(0, 0, 0)

  function dfs(total: number, start: number, count: number): boolean {
    if (count === n) return false

    if (count > 0 && total * n === sum * count) {
      return true
    }

    if (!memo[start].has(total)) {
      memo[start].set(total, true)
      for (let i = start; i < n - 1; i++) {
        if (dfs(total + nums[i], i + 1, count + 1)) return true
      }
      memo[start].set(total, false)
      return false
    }
    return memo[start].get(total)!
  }
}
console.log(splitArraySameAverage([1, 2, 3, 4, 5, 6, 7, 8]))
// [0, 0, 3, 9, 8]