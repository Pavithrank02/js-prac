/***
 * synchronous code


// console.log("before")

// function fn() {
//   console.log(" uam fn")
// }
// fn()
// console.log("after")

/***
 * async function
 * */


// console.log("before")

// function fn() {
//   console.log(" uam fn")
// }
// setTimeout( fn, 2000)
// console.log("after")

/****
 * Environment: Browser
 * all these are part of web API
 * console is not part of JS
 * window is not part of js
 * document
 * eventListeners
 * fetch
 */
// let a = true
console.log("before")

const cb2 = () => {
  console.log(" set timeout 1")
  while (1) {

  }
}
const cb1 = () => console.log("hello")

setTimeout(cb2,1000);
setTimeout(cb1,2000);

console.log("after")