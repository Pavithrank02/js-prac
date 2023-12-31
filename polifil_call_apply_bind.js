let cap ={
  name: 'steve',
  team: "Cap", 
  petersTeam:  function (mem1, mem2) {
    console.log(`hey ${this.name} I am your neighbours spiderman and i belong to ${this.team} and members such as ${mem1} and ${mem2}`)

  }
}

let ironMan = {
  name: "Tony",
  team: "IronMan"
}
/***polyfil of call function */
//Call => it is on Function 
// Function.prototype.myCall = function(ironMan, ...args) {
//   console.log("hi call")
//   // console.log(this)
  
//   const requiredFn = this
//   ironMan.requiredFn = requiredFn
//   ironMan.requiredFn(...args)
// }

// cap.petersTeam.myCall(ironMan, "thor", "loki")
// cap.petersTeam.call(ironMan, "thor", "loki")

/***polyfil of apply function */
// Function.prototype.myApply = function(ironMan, args) {
//   console.log("hi apply", args, ...args)
//   // console.log(this)
  
//   const requiredFn = this
//   ironMan.requiredFn = requiredFn
//   ironMan.requiredFn(...args)
// }

// cap.petersTeam.myApply(ironMan,[ "thor", "loki"])
// cap.petersTeam.apply(ironMan, ["thor", "loki"])

/***polyfil of bind function */
Function.prototype.myBind = function(ironMan) {
  
  // console.log(this)
  
  const requiredFn = this
  return function(...args) {
    requiredFn.call(ironMan, ...args)
  }
}

const boundFn = cap.petersTeam.myBind(ironMan)
const func = cap.petersTeam.bind(ironMan)
boundFn("thor", "loki")
func("thor", "loki")