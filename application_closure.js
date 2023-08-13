//  function getFirstName(firstname) {
//     console.log("O have got your firstname")
//     return function getLastname(lastname){
//       console.log(" i have got your second name")
//       return function greeting(){
//         console.log(`${firstname} ${lastname}`)
//       }
//     }
//   }
//   const leu = getFirstName("pavi")("tgf")
//   // const fnNmeR = getFirstName("pavi")
//   // // console.log(fnNmeR)

//   // const laNmeR = fnNmeR("tgf")
//   // console.log(laNmeR)
//   leu()

// function counter(args) {
//   let count = 0
//   count++
//   if (args == 0) {
//     return count
//   } else {
//     return function inner(args) {
//       count++
//       if (args == 0) {
//         return count
//       } else {
//         return inner
//       }
//     }
//   }
// }
// //infinite curring
// console.log(counter(0))
// console.log(counter()(0))
// console.log(counter()()()()(0))

/***
 * memoisation
 * create private function
 */

// function createEvenStack () {
//   return {
//     items: [],
//     push(item) {
//       if(item% 2 ==0){
//         console.log("is pushed")
//         this.items.push(item)
//       } else{
//         console.log("even value please")
//       }
//     }, 
//     pop(){
//       return this.items.pop()
//     }
//   }
// }

// const stack = createEvenStack()

// stack.push(10)
// stack.push(1):
function calc(n) {
  let sum = 0
  for(let i = 0; i<n; i++){
    sum+=n
  }
  return sum
}
// function memoise(fn) {
//   let cache = []
//   return function fn(n){
//     let istheInputPresent = Object.keys(cache).includes(n)
//     if(istheInputPresent){
//       return cache[n]
      
//     }else {
//       const result = fn[n]
//       cache[n]= result
//       return result
//     }
//   }
// }

// let efficientCalFn = memoise(calc)
// console.time()
// efficientCalFn(5)
// console.timeEnd()
// console.time()
// efficientCalFn(10)
// console.timeEnd()