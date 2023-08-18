/***
 * different ways to execute callback
 */

// console.log("a stack")

// /**to execute code before rerendering */
// requestAnimationFrame(function(){
//   console.log("B reqeust from animation frame")
// })

// /**Fun will go into callback/task queue */
// setTimeout(() => {
//   console.log("C timeout")
// }, 0)

// /**Fun will go into microtask queue */

// queueMicrotask(function(){
//   console.log("D microtask")
// })

// console.log("E sync stack")
let fs = require("fs")
/***
 * Chaining
 */
console.log("before")
let promise = fs.promises.readFile("./f1.txt")

promise.then(function (data) {
  console.log("conten"+ data)
  return fs.promises.readFile("./f2.txt")
}).then(function (data) {
  console.log("conten"+ data)
  return fs.promises.readFile("./f3.txt")
}).then(function (data) {
  console.log("conten"+ data)
}).catch(err => {
  console.log(err)
})

console.log("after")