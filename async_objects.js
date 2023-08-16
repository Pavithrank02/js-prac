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
// console.log("before")

// function fn() {
//   console.log("setTimeout callback os called")
// }

// function cancelInterval() {
//   console.log("cancel inter")
//   clearInterval(timer)
// }
// const timer = setInterval( fn, 1000)
// setTimeout(cancelInterval, 3000)
// console.log("after")

/***
 * create polyfil of setInterval
 */

function mysetInterval(cb, delay){
  let obj = {
    flag : true
  }

  function myFn(){
    if(obj.flag == true){
      cb()
      setTimeout(myFn, delay)
    }

  }
  setTimeout(myFn, delay)
  return obj
}

function clearMyInterval(obj) {
    obj.flag = false
}

function cb(){
  console.log('callback')
}

let obj = mysetInterval(cb, 1000)

function clearCb(){
  console.log("cancelled the cb")
  clearMyInterval(obj)
}

setTimeout(clearCb, 3000)