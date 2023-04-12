function each(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback.call(arr[i], i, arr[i])
  }
}

// each([1, 2, 3], (i, n) => {
//   console.log(`下标 ${i} 的元素为 ${n}`)
// })

// function compare(arr1, arr2) {
//   let flag = true
//   if (arr1.length !== arr2.length) return false

//   each(arr1, (i, n) => {
//     if (n !== arr2[i]) flag = false
//   })

//   return flag
// }

// console.log(compare([1, 2, 3], [1, 3, 3]))

function iterator(obj) {
  let current = 0
  const next = () => {
    current++
  }

  const isDone = () => current >= obj.length

  const getCurrent = () => obj[current]

  return {
    next,
    isDone,
    getCurrent
  }
}

function compare(iterator1, iterator2) {
  while (!iterator1.isDone() && !iterator2.isDone()) {
    if (iterator1.getCurrent() !== iterator2.getCurrent()) return false
    iterator1.next()
    iterator2.next()
  }

  return iterator1.isDone() && iterator2.isDone()
}

console.log(
  compare(
    iterator([1, 3, 3]),
    iterator([1, 2, 3])
  )
)

