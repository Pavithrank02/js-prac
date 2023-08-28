// var x = 10
// function b() {
//   console.log("c is the value", x)
// }
// function fn() {
//   var x = 20
//   b()
//   console.log("c is the vakue", x)
// }
// fn()

/***
 * closure: inner func forms the closure over the outer functions variable and when the variable are presnt
 * even if outer scope is removed from the stack
 * when inner func is hoisted and it forms closure to outer fun
 */

// function outerFunction () {
//   let count = 0
//   function innerFunction() {
//     count++
//     return count
//   }
//   return innerFunction
// }

// const innerfn = outerFunction()
// console.log("first",innerfn())
// console.log(innerfn())
// console.log(innerfn())

// function createCounter (a, g) {
//   function count () {
//     a = a + g
//     return a 

//   }
//   return count
// }

// let c1= createCounter(10, 5)
// let c2= createCounter( 5, 2)

// console.log(c1())
// console.log(c2())
// console.log(c1())
// console.log(c2())

// function getFirstName(firstname) {
//   console.log("O have got your firstname")
//   return function getLastname(lastname){
//     console.log(" i have got your second name")
//     return function greeting(){
//       console.log(`${firstname} ${lastname}`)
//     }
//   }
// }

// const fnNmeR = getFirstName("pavi")
// // console.log(fnNmeR)

// const laNmeR = fnNmeR("tgf")
// // console.log(laNmeR)
// laNmeR()

// function outer() {
//   let arrFn = []
//   for (var i = 0; i< 3 ; i++) {
//     arrFn.push(function fn(){
//       console.log(i)
//     })

//   }
//   return arrFn
// }

// let arrFn = outer()

// arrFn[0]()
// arrFn[1]()
// arrFn[2]()
// arrFn[2]()

// function outer() {
//   let arrFn = []
//   for (let i = 0; i< 3 ; i++) {
//     arrFn.push(function fn(){
//       console.log(i)
//     })

//   }
//   return arrFn
// }

// let arrFn = outer()

// arrFn[0]()
// arrFn[1]()
// arrFn[2]()
const num = 2;
num = 6;
console.log(num);