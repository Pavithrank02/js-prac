var x = 10
function b() {
  console.log("c is the value", x)
}
function fn() {
  var x = 20
  b()
  console.log("c is the vakue", x)
}
fn()