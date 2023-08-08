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
Function.prototype.myCall = function(ironMan) {
  console.log("hi call")
  // console.log(this)
  
  const requiredFn = this
  ironMan.requiredFn = requiredFn
  ironMan.requiredFn()
}

cap.petersTeam.myCall(ironMan)