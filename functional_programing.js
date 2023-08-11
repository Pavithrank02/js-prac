/***
 * function => objects in js
 * array => objects in js
 * object => key/value pairs
 */

/**function definition */

function fn() {
  console.log(" hi")
}

/**Fun behaves like objects */
fn.count = 0

fn.printCount = function () {
  console.log("count is", this.count)
}

console.log("count prop", fn.count)
fn.printCount()

fn()