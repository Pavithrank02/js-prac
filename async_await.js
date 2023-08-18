/***
 * different ways to execute callback
 */

console.log("a stack")

/**to execute code before rerendering */
requestAnimationFrame(function(){
  console.log(" B reqeust from animation frame")
})

/**Fun will go into callback/task queue */
setTimeout(() => {
  console.log(" C timeout")
}, 0)

/**Fun will go into microtask queue */

queueMicrotask(function(){
  console.log("D microtask")
})

console.log("E sync stack")