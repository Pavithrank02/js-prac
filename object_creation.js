/***
 * ways to create objects
 * object literals
 * for primitives there can be temperory parents
 */
//for non primitives there are parents
// let obj = {
//   name: "pav",
//   address: {
//     state: "TN",
//     city:"coim"
//   },
//   sayHi: function() {
//     console.log("hi");
//   }
// }

// console.log("object", obj)

// /***for primitives
//  * there are no parents, it will only be typecasted as non-primitive with applied method
//  */
// let str = " i am string"

// console.log(str)


// /***
//  * heirarchy
//  */

// let arr = []

// console.log(arr)

/**
 * 1. object.create
 * for null, we create object without any parent
 */

// let obj2 = Object.create(null)
// obj2.name = " name"
// console.log(obj2)

/**
 * 2. creating object from another object
 */
let obj = {
  name: "pav",
  address: {
    state: "TN",
    city:"coim"
  },
  sayHi: function() {
    console.log("hi");
  }
}

let obj2 = Object.create(obj)
// console.log(obj)

// obj2.name = "sybsjkb"
obj2.lastname = "thran"

// console.log("1.", obj2.name)
// console.log("2.", obj.lastname)

// for(let key in obj2){
//   console.log("keys",key)
// }

/**
 * for in loop
 */
for(let key in obj2){
    let isMyKey = obj2.hasOwnProperty(key)
    if(isMyKey){
      console.log("keys are", key)
    }
  }
