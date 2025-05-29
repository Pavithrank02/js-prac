/****Default parameter**** */

// function fn(p1, p2, p3 = "default") {
//   console.log("hi params are", p1, p2, p3)
// }

// fn("one", "two", "three")
// fn("one", "two")



/***spread operator */

// let arr = [1, 2, 3, 4, 5]
// let arr2 = arr

// console.log(arr2.splice(1, 4))
// arr2.unshift(100)

// arr2[2] = 200
// console.log("contest arr", arr)


let arr = [1, 2, [3, 4], 4, 5]
let arr2 = [...arr]

arr2.pop()
arr2.push(100)
arr2[2][0] = 200
console.log("contest arr", arr)
console.log("contest arr3", arr2)


// let a = 10

// //copied value => primitive
// let b = a;

// let arr = [1,2,3,4]

// let arr2 = arr
// console.log(arr2)


/***rest */

// function fn(p1, ...p2) {
//   console.log("hi params are", p1)
//   console.log("rest parameter", p2)
// }

// fn("one", "two", "three")
// fn("one", "two")


