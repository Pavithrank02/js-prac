/***
 * callback hell -> 
 *        1. nesting of callback
 *        2. 
 * promise => 
 * consuming promise
 * chaining promise
 * converting cb to promise
 */

// Promise.resolve(1)
// .then((val) => {
//   console.log(val)
//   return val + 1
// }).then((val) => {
//   console.log(val)
// }).then((val) => {
//   console.log(val)
//   return Promise.resolve(3)
//     .then((val) => {
//       console.log(val)
//     })
// }).then((val) => {
//   console.log(val)
//   return Promise.reject(4)
// }).catch((val) => {
//   console.log(val)
// }).finally((val) => {
//   console.log(val)
//   return 10
// }).then((val) => {
//   console.log(val)
// })
// for (var i = 0; i < 5; i++) {
//   setTimeout(() => console.log(i), 0)
// }
// for (let i = 0; i < 5; i++) {
//   setTimeout(() => console.log(i), 0)
// // }
// const obj = {
//   dev: 'bfe',
//   a: function() {
//     return this.dev
//   },
//   b() {
//     return this.dev
//   },
//   c: () => {
//     return this.dev
//   },
//   d: function() {
//     return (() => {
//       return this.dev
//     })()
//   },
//   e: function() {
//     return this.b()
//   },
//   f: function() {
//     return this.b
//   },
//   g: function() {
//     return this.c()
//   },
//   h: function() {
//     return this.c
//   },
//   i: function() {
//     return () => {
//       return this.dev
//     }
//   }
// }

// console.log(obj.a())
// console.log(obj.b())
// console.log(obj.c())
// console.log(obj.d())
// console.log(obj.e())
// console.log(obj.f()())
// console.log(obj.g())
// console.log(obj.h()())
// console.log(obj.i()())

// let a = 1
// const b = ++a
// const c = a++
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(Boolean('false'))
// console.log(Boolean(false))
// console.log('3' + 1)
// console.log('3' - 1)
// console.log('3' - ' 02 ')
// console.log('3' * ' 02 ')
// console.log(Number('1'))
// console.log(Number('number'))
// console.log(Number(null))
// console.log(Number(false))
// console.log(JSON.stringify([1,2,null,3]))
// console.log(JSON.stringify([1,2,undefined,3]))
// console.log(null === undefined)
// console.log(null == undefined)
// console.log(null == 0)
// console.log(null < 0)
// console.log(null > 0)
// console.log(null <= 0)
// console.log(null >= 0)
// console.log(undefined == 0)
// console.log(undefined < 0)
// console.log(undefined > 0)
// console.log(undefined <= 0)
// console.log(undefined >= 0)
// console.log(0 == false)
// console.log('' == false)
// console.log([] == false)
// console.log(undefined == false)
// console.log(null == false)
// console.log('1' == true)
// console.log(1n == true)
// console.log(' 1     ' == true)
// console.log([] + [])
// console.log([] + 1)
// console.log([[]] + 1)
// console.log([[1]] + 1)
// console.log([[[[2]]]] + 1)
// console.log([] - 1)
// console.log([[]] - 1)
// console.log([[1]] - 1)
// console.log([[[[2]]]] - 1)
// console.log([] + {})
// console.log({} + {})
// console.log({} - {})

// const promise = new Promise((resolve, reject) => {
//   if (success) {
//     resolve("jod")
//   } else {
//     reject("jhjkdsh")
//   }
// })

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });