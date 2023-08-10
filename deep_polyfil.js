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

function superClone(obj) {

  let newObj = {} 

  for(let key in obj) {
    newObj[key] = obj[key]
  }
  return newObj

}

let deepClone = superClone(person)
deepClone.secondName = " thran";
deepClone.address.street = "south" 
console.log('real', person)
console.log('copiedObject', deepClone)