//use case of bind apply and call => borrow fns and features

let cap = {
  name: 'steve',
  team: "Cap",
  petersTeam: function (mem1, mem2) {
    console.log(`hey ${this.name}  ${mem1}  ${mem2}`)

  }
}

let ironMan = {
  name: "Tony",
  team: "IronMan"
}
//borrow only once with defined number of params
// cap.petersTeam.call(ironMan, "hulk")

/**apply method */
// cap.petersTeam.apply(ironMan, ["thor"])

/**bind method to make permemnt copy of method to use multiple time */

const fun = cap.petersTeam.bind(ironMan)

fun("thor", "hulk")
// fun("loki", "suyo")