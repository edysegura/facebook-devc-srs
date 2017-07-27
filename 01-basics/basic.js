//This is a comment
console.log('Hi there! I am JavaScript!')

//ECMAScript 5
var name = "Pedro"
console.log('==> My name is ' + name.toUpperCase())
console.log('Type: ' + typeof(name))

//ECMAScript 6
let numberA = 33
let numberB = 33
console.log('Number A: ' + numberA)
console.log('Number B: ' + numberB.toFixed(2))
console.log('Type: ' + typeof(numberA))

let isThatTrue = true
console.log('Is that true: ' + isThatTrue)
console.log('Type: ' + typeof(isThatTrue))

console.log("\n-----------------------\n")

//pure function
function adder(a, b) {
    return a + b
}

let total = adder(numberA, numberB)
console.log(`${numberA} + ${numberB} = ${total}`)

//Literal Object
const person = {
    firstName: "Leonardo",
    lastName: "Saldanha",
    sayHello: function() {
        return 'Hi my name is ' + person.lastName
    }
}

console.log(`Mr. ${person.lastName}, ${person.firstName}`)
console.log(person.sayHello())

