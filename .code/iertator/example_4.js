const $ = {}
const isArray = Array.isArray
$.each = (obj, callback) => {
  let val, n = obj.length
  if (isArray(obj)) {
    for (let i = 0; i < n; i++) {
      val = callback(obj[i], i)
      if (val === false) break
    }
  } else {
    for (let i in obj) {
      val = callback(obj[i], i)
      if (val === false) break
    }
  }
  return obj
}