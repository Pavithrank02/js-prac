let arr = [1,2,3,4,5]
let arr2 = arr //call by ref

arr2.pop()

arr2 = 10 // call by value

// console.log(arr)
// console.log(arr2)

function modifier(a, b) {
  console.log("12", a, b)

  a[0] = 10;
  b[1] = 20

  console.log("17", a, b)
}

let p = [1,2,3,4]
let q = [2,3]
console.log("22",p, q)
modifier(p, q)
console.log("24",p, q)

//reference are => pointers or address

//in js everything operation is call by value