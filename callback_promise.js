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
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 0)
}
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 0)
}
