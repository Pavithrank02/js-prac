/***
 * function => objects in js
 * array => objects in js
 * object => key/value pairs
 */

/**function definition */

// function fn() {
//   console.log(" hi")
// }

// /**Fun behaves like objects */
// fn.count = 0

// fn.printCount = function () {
//   console.log("count is", this.count)
// }

// console.log("count prop", fn.count)
// fn.printCount()

// fn()

/**variable
 * assign variables as values or reference
 */

// let arr = [1,2,3,4,5]

// let arr2 = arr

// console.log("arr2", arr2)

/**Function expression */

// const funcAddress = function () {
//   console.log("hello im func express")

// }

// funcAddress()


/**variables can be passed as params
 * returned as value
 */
function fn(params) {
    console.log("params", params)
    const rtfun = params()
    console.log(" reg", rtfun)
    return "fron outer"
  
  }

  fn(smaller)

  function smaller () {
    console.log(" iam smaller")
    return "hello"
  }
  // fn([1,3,4])
  // fn({name: "pac"})