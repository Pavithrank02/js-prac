const element = document.getElementById("myDiv");

// Using setAttribute
element.setAttribute("id", "newId");

const element1 = document.createElement("div")
element1.innerHTML = " We Ar"
document.body.append(element1)

const newDiv = document.createElement("div");
newDiv.textContent = "Hello, World!";
document.body.appendChild(newDiv);

// Using direct property
element.id = "newId";

console.log(element)