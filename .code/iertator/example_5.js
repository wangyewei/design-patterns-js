const reverseEach = (arr, callback) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    callback(arr[i], i)
  }
}

reverseEach([0, 1, 2], (item, index) => {
  console.log(`${index}: ${item}`)
})