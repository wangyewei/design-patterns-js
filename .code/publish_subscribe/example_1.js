
class HRC {

  constructor() {
    this.clientList = new Map()
  }

  listen(...arg) {

    const fn = (name, job, salary) => {
      return () => {
        console.log(`${name},您好:\n  您的岗位为 ${job} ,薪资为 ${salary} /月`)
      }
    }

    const target = arg[0]
    this.clientList.set(target,
      this.clientList.has(target) ? [...this.clientList.get(target), fn(...arg)] : [fn(...arg)]
    )


  }

  offer(target) {
    if (!this.clientList.has(target)) return
    this.clientList.get(target).forEach(fn => fn())
  }

  remove(key) {
    if (!this.clientList.has(key)) return

    this.clientList.delete(key)
  }
}

const hr = new HRC()

hr.listen('王野未', '前端开发', 3000)
hr.listen('小明', '高级前端开发', 30000)
hr.remove('王野未')
hr.offer('王野未')



