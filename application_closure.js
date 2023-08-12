//  function getFirstName(firstname) {
//     console.log("O have got your firstname")
//     return function getLastname(lastname){
//       console.log(" i have got your second name")
//       return function greeting(){
//         console.log(`${firstname} ${lastname}`)
//       }
//     }
//   }
//   const leu = getFirstName("pavi")("tgf")
//   // const fnNmeR = getFirstName("pavi")
//   // // console.log(fnNmeR)

//   // const laNmeR = fnNmeR("tgf")
//   // console.log(laNmeR)
//   leu()

function counter(args) {
  let count = 0
  count++
  if (args == 0) {
    return count
  } else {
    return function inner(args) {
      count++
      if (args == 0) {
        return count
      } else {
        return inner
      }
    }
  }
}

console.log(counter(0))
console.log(counter()(0))
console.log(counter()()()()(0))