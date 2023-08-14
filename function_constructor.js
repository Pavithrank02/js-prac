/****Function constructor */

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.sayHi = function() {
    console.log(`jo tjos os ${this.name} and I am ${this.age}`);
  }
}
const jas = Person("jasbin", 26)
let cap = new Person(" p[avi", 26)
jas.sayHi()