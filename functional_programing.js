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
// function fn(params) {
//     console.log("params", params)
//     const rtfun = params()
//     console.log(" reg", rtfun)
//     return "fron outer"
  
//   }

//   fn(smaller)

//   function smaller () {
//     console.log(" iam smaller")
//     return "hello"
//   }
  // fn([1,3,4])
  // fn({name: "pac"})

  /**variables can be returned
 *            functions  can be returned 
 */

  // function fn() {
  //   console.log("i am running")
  //   return function inner() {
  //     console.log("returned from fn")
  //   }
  // }

  // const retfu = fn()
  // // console.log("retun va", retfu)
  // // console.log("retun va"+retfu)
  // console.log("retun va", retfu())

  /***Arrays */

  /**
   * Js => arrays are collection of anything valid JS datatypes
   * 
   */

  let arr = [
    1,
    1.1, 
    true, 
    null,
    "string", 
    [1,2,4],
    {name: "pav"},
    function fn() {
      console.log(" i pom")
    }
  ]


  // console.log("arer", arr)
  // console.log(arr[5][2])

  /***
   * arrays are objects disguised as arrays => keys are numbers
   */

  /**
   * traverse array
   */
  // for(let key in arr){
  //   console.log("keys: ", key, "value", arr[key])
  // }

  console.log(arr[25])
  arr[30] = 200
  console.log("118", arr.length)
  arr["hello"] = 599
  console.log("120", arr.length)