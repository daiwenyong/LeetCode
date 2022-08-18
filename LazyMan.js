// 实现一个LazyMan，可以按照以下方式调用:
// LazyMan(“Hank”)输出:
// Hi! This is Hank!
//
// LazyMan(“Hank”).sleep(10).eat(“dinner”)输出
// Hi! This is Hank!
// //等待10秒..
// Wake up after 10
// Eat dinner~
//
// LazyMan(“Hank”).eat(“dinner”).eat(“supper”)输出
// Hi This is Hank!
// Eat dinner~
// Eat supper~
//
// LazyMan(“Hank”).eat(“supper”).sleepFirst(5)输出
// //等待5秒
// Wake up after 5
// Hi This is Hank!
// Eat supper
class LazyMan{
    constructor(name) {
        this.name = name
        const t = ()=>{
            console.log(`this is ${this.name}`)
            this.run()
        }
        this.task = [t]
        setTimeout(()=>{
            this.run()
        })
    }
    eat(food){
        this.task.push(()=>{
            console.log(`${this.name} eat ${food}`)
            this.run()
        })
        return this
    }
    sleepFirst(time){
        const t = ()=>{
            console.log(`sleepFirst wait ${time} s`)
            setTimeout(() => {
                this.run()
            }, time * 1000)
        }
        this.task.unshift(t)
        return this
    }
    sleep(time){
        const t = () => {
            console.log(`sleep wait ${time} s`)
            setTimeout(() => {
                this.run()
            }, time * 1000)
        }
        this.task.push(t)

        return this
    }
    run(){
        const t = this.task.shift()
        t && t()
    }
}
new LazyMan('dwy').sleep(3).eat('supper').sleepFirst(2)
