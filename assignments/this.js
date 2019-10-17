/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. This is refering to the global (window) scope.
* 2. This is refering to the same scope that it's in.
* 3. New refers to whatever is being created (whatever is on the righthand side).
* 4. This is being refered and directed in an external call.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
window.msg= 'Global Binding'
console.log(this.msg)

// Principle 2

// code example for Implicit Binding
const animal={
    name:'Betsy',
    sound:'Mooo',
    color:'black and white',
    age: 13,
    intro: function(){
        return `My name is ${this.name} and I'm ${this.age} years old! I have ${this.color} hair and I make the sound "${this.sound}"`
    }
}
console.log(animal.intro());
// Principle 3

// code example for New Binding
const name = function(first_name,last_name){
    this.first_name = first_name,
    this.last_name = last_name
    return `${first_name} ${last_name}`
}
let jesus= new name('Jesus','Morales')

console.log(jesus)

// Principle 4

// code example for Explicit Binding
function car(make,model){
    return console.log(`${this.name} owns a ${make} ${model}`);
}
const bmw = ['BMW', 'I330'];
let owner ={
    name:'Jesus'
};

car.apply(owner,bmw);