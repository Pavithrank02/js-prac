/****SetTimeout */

// console.log("before")

// function fn() {
//   console.log("setTimeout callback os called")
// }
// const timer = setTimeout( fn, 2000)
// function canceller(){
//   console.log("cancelling timeout")
//   clearTimeout(timer); 
// }
// setTimeout(canceller,3000)
// console.log("after")


/****SetInterval */
console.log("before")

function fn() {
  console.log("setTimeout callback os called")
}

function cancelInterval() {
  console.log("cancel inter")
  clearInterval(timer)
}
const timer = setInterval( fn, 1000)
setTimeout(cancelInterval, 3000)
console.log("after")

