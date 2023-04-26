
class Login {

  constructor() {
    this.taskHashMap = new Map()
  }


  listen(key, fn) {
    this.taskHashMap.set(key,
      this.taskHashMap.get(key) ?
        [...this.taskHashMap.get(key), fn] :
        [fn]
    )
  }

  trigger(key, res) {
    if (!this.taskHashMap.has(key)) return
    this.taskHashMap.get(key).forEach(fn => fn(res))
  }
}

const loginImpl = new Login()


class Header {
  constructor() {
    loginImpl.listen('loginSucc', obj => {
      this.setAvatar(obj.avatar)
    })
  }

  setAvatar(avator) {
    console.log(`更新头像：${avator}`)
  }
}

class List {
  constructor() {
    loginImpl.listen('loginSucc', obj => {
      this.setList(obj.list)
    })
  }

  setList(list) {
    console.log(`更新列表: ${list}`)
  }
}

const getData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        avatar: 'wangyewei.png',
        list: '100条数据'
      })
    }, 2000)
  })
}

const header = new Header()
const list = new List()

getData().then(res => {
  loginImpl.trigger('loginSucc', res)
})