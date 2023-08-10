// let arr = [1,2,3,4,5]
// arr.slice(1)

// let arr2 = arr.splice(1)

// console.log(arr)
// console.log(arr2)


/***shallow copy */

// let arr = [1,2,3,4,[10,12], 4, 5]

// let spreadArr = [...arr]

// spreadArr[2] = 100
// spreadArr[4][1] = 200

// console.log("sa",spreadArr, "arr",arr)

/***deep copy */

let person = {
  firstname: "pavi",
  secondName: "k",
  address: {
    street: "North",
    city: " sulur",
    state: "TN", 
    country: " India"
  }
};

//convert obj to string

let stringObject = JSON.stringify(person);
console.log(typeof stringObject, stringObject)

let deepClone = JSON.parse(stringObject)

deepClone.secondName = " thran";
deepClone.address.street = "south" 
console.log('copiedObject', deepClone)