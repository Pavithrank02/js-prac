let input = [1,2,3,[4,5], [6,7,8,[9,10, 11]]]

function flatten(srcArr) {
  let newArr = []

  for(let i = 0; i < srcArr.length ; i++){
    let elem = srcArr[i]

    let isElementArr = Array.isArray(elem)

    if(isElementArr) {
      let smallFlArr = flatten(elem)
      newArr.push(...smallFlArr)
    } else{
      newArr.push(elem)
    }
  }
  return newArr
}

let flatenedArr = flatten(input)
console.log(flatenedArr)