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


console.log("before")

function fn() {
  console.log(" uam fn")
}
setTimeout( fn, 2000)
console.log("after")

/****
 * Environment: Browser
 * all these are part of web API
 * console is not part of JS
 * window is not part of js
 * document
 * eventListeners
 * fetch
 */