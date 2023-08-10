// let arr = [1,2,3,4,5]
// arr.slice(1)

// let arr2 = arr.splice(1)

// console.log(arr)
// console.log(arr2)


/***shallow copy */

let arr = [1,2,3,4,[10,12], 4, 5]

let spreadArr = [...arr]

spreadArr[2] = 100

console.log("sa",spreadArr, "arr",arr)