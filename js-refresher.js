// ---- ARROW FUNCTIONS - USE ONLY WHEN NOT IN OBJECTS ---- //
const arrowFunc = (first, last) => {
    console.log("Hello " + first + " " + last);
    console.log("you are in an annoynamous arrow function");
}

arrowFunc("Sai", "Maung");

// simply one statement return
const add = (a, b) => a + b;
console.log(add(1, 2));

// one argument needs no parenthesis
// One statement needs no curly bracklets {}
const greet = name => console.log("name");
greet();

// empty argument needs parenthesis
const sayHello = () => console.log("Hello")
// ---- ARROW FUNCTIONS - USE ONLY WHEN NOT IN OBJECTS ---- //

// ---------------------------------- Objects, Properties & Methods ----------------------------- //
const person = {
    // allowed us to group values together
    // key-value pairs - also called "property" or a "field" of the object
    name: 'Sai',
    age: 33,
    greet: () => {
        // WILL RETURN UNDEFINED name cos this in arrow function bind to global scope
        // To make this refers to person scope, use normal function - two different variants below
        console.log('Hi, I am ' + this.name);
    },
    greetOld: function() {
        console.log('Hi I am ' + this.name);
    },
    greetOld1() {
        console.log('Hi I am ' + this.name);
    }
};

console.log(person);
console.log(person.greet());
console.log(person.greetOld());
console.log(person.greetOld1());
// ---------------------------------- Objects, Properties & Methods ----------------------------- //

// ---------------------------------- Arrays & Arrays Methods ----------------------------------- //
// mixed of type allowed
const personInfo = ["Sai", 33, "Basketball"]

for (let info of personInfo) {
    console.log(info);
}

console.log(personInfo.map(info => {
    return "MAP FUNCTION - INFO: " + info;
}));
// ---------------------------------- Arrays & Arrays Methods ----------------------------------- //

// ---------------------------------- Arrays, Objects & Reference Types ----------------------------------- //
    // Objects and Arrays are REFERENCE type
    const hobbies = ['Basketball'];
    // pushing doesn't violate const since it doesn't change memory address
    hobbies.push('Programming');
    console.log(hobbies)
// ---------------------------------- Arrays, Objects & Reference Types ----------------------------------- //

// ---------------------------------- Understanding Spread & Rest Operators ----------------------------------- //
console.log('// ---------------------------------- Understanding Spread & Rest Operators ----------------------------------- //')
console.log('SPREAD OPERATOR: ...Array/Object')
// ... pull out all properties inside an Array/Object and put it into surrounding
const newHobbies = [...hobbies];
const newPerson = { ...person };
console.log(newHobbies);
console.log(newPerson);
console.log('REST OPERATOR: ...args')
console.log('...args bundles many arguments into an array')
const restOperator = (...args) => args;
console.log(restOperator(1, 2, 3));
console.log(restOperator(1, 2, 3, 4));
// ---------------------------------- Understanding Spread & Rest Operators ----------------------------------- //


// ---------------------------------- Destructuring ----------------------------------- //
console.log('// ---------------------------------- Destructuring ----------------------------------- //');
// destructuring = {}
// pull out person object name property, assign it to name variable and return it
const destructuring = ({name}) => name;
console.log(destructuring(newPerson));
const printNameAge = ({name, age}) => {
    console.log(name);
    console.log(age);
};
printNameAge(newPerson);

const {name, age} = newPerson;
console.log(name, age);

console.log('Array Destructuring Operator []');
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);
// ---------------------------------- Destructuring ----------------------------------- //

// ---------------------------------- Async Code & Promises ----------------------------------- //
console.log('// ---------------------------------- Async Code & Promises ----------------------------------- //');
// asynchronous code cos it doesn't finish immediately
// take in an arrow function as the handler - callback function
setTimeout(() => {
    console.log('Two seconds timer is done!');
}, 2000);

setTimeout(() => {
    console.log('0.5 millisecond timer is done!');
}, 0.5);

// doesn't block these
console.log('Hello');
console.log('World');
console.log('Hello');
console.log('World');
console.log('Hello');
console.log('World');
console.log('Hello');
console.log('World');
console.log('Hello');
console.log('World');
console.log('Hello');
console.log('World');
console.log('Hello');
console.log('World');
console.log('Hello');
console.log('World');
console.log('Hello');
console.log('World');
console.log('Hello');
console.log('World');
console.log('Hello');
console.log('World');
console.log('Hello');
console.log('World');
console.log('Hello');
console.log('World');
console.log('Hello');
console.log('World');
console.log('Hello');
console.log('World');
console.log('Hello');
console.log('World');
console.log('Hello');
console.log('World');
console.log('Hello');
console.log('World');
console.log('Hello');
console.log('World');
console.log('Hello');
console.log('World');

// ---------------------------------- Async Code & Promises ----------------------------------- //
