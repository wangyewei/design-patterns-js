function each(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    const end = callback.call(arr[i], i, arr[i])

    if (end) break
  }
}

each([1, 2, 3], (_, item) => {
  console.log(item)
  return item === 1
})
