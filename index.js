const readline = require('readline')

console.log("Hello world")

const firstName = "Grant"
// console.log(firstName)

const lastName = "Simmons"

// console.log(firstName + lastName)
console.log(`${firstName} ${lastName}`)


let age = 99;

console.log(age + 10)


let height; //undfined
let weight = null;
console.log(height)

let xNum = 4;
let yNum = 10;

const sum = xNum + yNum;

console.log(sum)

const amHungry = true;

if (amHungry) {
    console.log('Feed me already!')
} else {
    console.log('No thanks, I ate already')
}


const reader = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
)

reader.question('What is your favorite color?', function (userAnswer) {
    console.log(`your answer was ${userAnswer}`)
})