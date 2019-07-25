/* The four principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Window Binding - When a function is declared in the global scope, the value of this inside that function will be the window object.
 * 2. Implicit Binding - When a method is called, 'this' refers to the object before the dot.
 * 3. New Binding - When a constructor function is used, 'this' refers to the specific instance of the object created and returned by the constructor function
 * 4. Explicit Binding - We can use object methods such as call or apply to explicity bind this to a specific object.
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding
console.log(this);

// Principle 2

// code example for Implicit Binding

const person = {
  name: "chris",
  whatAmI: function() {
    return this;
  }
};

const person2 = {
  name: "daniel"
};

console.log(person.whatAmI()); // this points to the object left of the dot

// Principle 3

// code example for New Binding

function Person(personAttr) {
  this.name = personAttr.name;
  console.log(this);
}

// object created with 'new' keyword binds 'this' to that new object
const newPerson = new Person({
  name: "Daniel"
});

function shout() {
  console.log(`MY NAME IS ${this.name}!`);
}

// Principle 4

// code example for Explicit Binding
console.log(person.whatAmI.call(person2)); // 'this' is binded to the person object
