/***
 * ways to create objects
 * object literals
 * for primitives there can be temperory parents
 */
//for non primitives there are parents
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

console.log("object", obj)

/***for primitives
 * there are no parents, it will only be typecasted as non-primitive with applied method
 */
let str = " i am string"

console.log(str)


/***
 * heirarchy
 */

let arr = []

console.log(arr)



