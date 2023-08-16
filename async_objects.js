/****SetTimeout */

console.log("before")

function fn() {
  console.log("setTimeout callback os called")
}
const timer = setTimeout( fn, 2000)
function canceller(){
  console.log("cancelling timeout")
  clearTimeout(timer); 
}
setTimeout(canceller,3000)
console.log("after")