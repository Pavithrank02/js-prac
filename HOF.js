/**
 * HOF problems
 */

// let arr = [2,3,4,5]
//find square of every number
// for(let i = 0; i< arr.length; i++) {
//   arr[i] = arr[i] * arr[i]
 
// }
// //find cube of every number
// for(let i = 0; i< arr.length; i++) {
//   arr[i] = arr[i] * arr[i]* arr[i]
 
// }
// console.log(arr)

// function transformer(arr, logic) {
//   let newArr = []
//   for(let i = 0; i< arr.length; i++) {
//       let ans = logic(arr[i])
//       newArr.push(ans)
     
//     }
//   return newArr
// }

// function squarer(elem) {
//   return elem * elem
// }
// function cuber(elem) {
//   return elem * elem * elem
// }

// const squredArr  =  transformer(arr, squarer)
// const cubedArr  =  transformer(arr, cuber)
// console.log("cubed", cubedArr)
// console.log("squred", squredArr)

/**
 * HOF => are the function that accepts functions or returns functions
 * callbacks => functions that are passed as an argument to another callback functions
 */

/**
 * Methods present
 * foreach
 * map
 * filter
 * reduce
 * sort
 */

/***foreach traversal=> used to traverse array and it will only return value*/

// arr.forEach(function(elem){
//   console.log(elem)
// })


/***
 * map method => it will be changing every elem according to callback
 * map method will return new array and doesnt change original
 */
let arr = [2,3,4,5]

function squarer(elem) {
  return elem * elem
}
function cuber(elem) {
  return elem * elem * elem
}



//polyfil of map function

Array.prototype.myMap = function( logic) {
  let newArr = []
  for(let i = 0; i< arr.length; i++) {
      let ans = logic(arr[i])
      newArr.push(ans)
     
    }
  return newArr
}

let cubedArr = arr.myMap(cuber)
console.log("cubed", cubedArr)
let squredArr = arr.myMap(squarer)
console.log("squred", squredArr)