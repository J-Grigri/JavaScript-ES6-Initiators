const inventors = [
    "Albert Einstein",
    "Issac Newton",
    "Galileo Galilei",
    "Marie Curie",
    "Johannes Kepler",
    "Nicolaus Copernicus",
    "Max Planck",
    "Katherine Blodgett",
    "Ada Lovelace",
    "Sarah E. Goode",
    "Lise Meitner",
    "Hanna Hammarstrom"
];
const numbers = [1, 2, 3, 5, 8, 13, 21, 34, 55];

//1. .filter
// Print out an array of the inventors whose name starts with 'A'.
letterA = inventors.filter((nameA) => nameA.charAt(0) == 'A')
console.log("Names that start with A: ", letterA)

// Print out an array of the inventors whose name contains 'n'.
letterN = inventors.filter((nameN) => nameN.includes('n'))
console.log("Names that contain n:", letterN)

// Print out an array of the inventors whose name has the same letter twice in a row (e.g. nn or mm).
function doubleChar(s) {
    for (i = 0; i < s.length; i++) {
        if (s.toLowerCase()[i] === s.toLowerCase()[i + 1]) {
            return true
        }
    }
    return false
}
doubleL = inventors.filter(doubleChar)
console.log(doubleL)

//2nd way for the above example
inventors.filter((name) => {
    let splitName = name.split('');
    let isDuplicate = false;
    splitName.map((_, i) => {
        if (splitName[i] === splitName[i + 1]) {
            isDuplicate = true
        }
        return isDuplicate
    })
    return isDuplicate
})

// Print out an array of the numbers which are odd.
odd = numbers.filter((num) => num % 2 == 1)
console.log("Odd numbers", odd)

// Print out an array of the numbers that have two digits.
function doubleDigit(value) {
    return value <= 99 && value >= 10
}
twoDigits = numbers.filter(doubleDigit)
console.log('Numbers with double digits: ', twoDigits)

// Print out an array of the numbers which are prime. Prime number is a number that is divisible by 1 and itself only (e.g. 2, 3, 5, 7, 11, 13, 17)
function isPrime(num) {
    if (num <= 1)
        return false;
    else if (num === 2)
        return true;
    else {
        for (let i = 2; i < num; i++)
            if (num % i === 0)
                return false;
        return true;
    }
}
prime = numbers.filter(isPrime);
console.log(prime)

// Maps

// Print out the first name of each inventor.
function firstName(char) {
    for (i = 0; i < char.length; i++) {
        if (char[i] === ' ') {
            return char.slice(0, i)
        }
    }
    return "No space to found"
}
let name = inventors.map(firstName);
console.log('first names of the inventors', name)

// // Print out the length of every inventor's full name.
nameLength = inventors.map((name) => name.length);
console.log(nameLength)

// // Print out all the inventors' names in uppercase.
nameUpper = inventors.map((name) => name.toUpperCase());
console.log(nameUpper);

// Print out initials of all inventors(e.g. A.E., I.N., ...)
function initials(int) {
    int = int.split(" ")//breaks the array item into strings (one word per string)
    return int.map(word => word.charAt(0)).join(".")
}
initNames = inventors.map(initials);
console.log('Initials of inventors', initNames)

// Print out an array of every number multiplied by 100.
let times100 = [];
times100 = numbers.map((num) => num * 100);
console.log(times100)

// Print out an array of the powers of two as shown by this array (e.g. 2, 4, 8, 16 ....).
let power = [];
for (i = 1; i <= 5; i++) {
    power.push(Math.pow(2, i));
}
console.log(power)

// Sort


// Sort all the inventors in alphabetical order, A-Z.
let order = inventors.sort()
console.log(order)

// Sort all the inventors in reverse alphabetical order, Z-A. Do not use the reverse method.
let order2 = inventors.sort(function (a, b) {
    if (a > b) {
        return -1;
    }
    if (b > a) {
        return 1;
    }
    return 0;
});
console.log(order2)

// Sort all the inventors by length of name, shortest name first.
let namelength = inventors.sort(function (a, b) {
    if (a.length > b.length) {
        return 1;
    }
    if (b.length > a.length) {
        return -1;
    }
    return 0;
});
console.log(namelength)


// Sort all the inventors by length of name, longest name first. Do not use the reverse method.
inventors.sort((a, b) => {
    let lengthA = a.length;
    let lengthB = b.length;
    return lengthB - lengthA
})

let totalLength = inventors.sort(function (a, b) {
    if (a.length > b.length) {
        return -1;
    }
    if (b.length > a.length) {
        return 1;
    }
    return 0;
});
console.log(totalLength)
// Reduce

// Find the sum of all the numbers.
let sum = numbers.reduce(function (a, b) {
    return a + b;
}, 0);
console.log(sum)

// Find the sum of all the even numbers. 3 different ways:
let even = numbers.filter((num) => num % 2 == 0)
sumeven = even.reduce(function (a, b) {
    return a + b;
}, 0);

console.log(sumeven)

const a = numbers.reduce((total, num) => {
    if (num % 2 == 0) return total += num
    return total
}, 0)
console.log(a)

function b() {
    let result = 0;
    numbers.map(e => {
        if (e % 2 == 0) {
            result += e
        } return result
    })
}
console.log(b())


// Create a string that has the first name of every inventor.
function firstName(char) {
    for (i = 0; i < char.length; i++) {
        if (char[i] === ' ') {
            return char.slice(0, i)
        }
    }
    return "No space to found"
}
let name = inventors.map(firstName);
let nameString = [name]
console.log(nameString)

//Print out first name in a string
inventors.reduce((total, name) => {
    let firstName = name.split(' ', 1)
    total += firstName
    return total
}, '')

// Some & Every
// Does any inventor have the letter 'y' in their name?
function nameY() {
    letterY = inventors.filter((nameY) => nameY.includes('y'))
}
nameY = inventors.some(nameY)
console.log(nameY)

// Does every inventor have the letter 'e' in their name?
function nameE() {
    letterE = inventors.filter((nameE) => nameE.includes('e'))
}
nameE = inventors.every(nameE)

// Does every inventor have first name that's longer than 4 characters?
function name4(char) {
    for (i = 0; i < char.length; i++) {
        if (char[i] === ' ') {
            if ([i] <= 3)
                return
        }
    }
    return "No space to found"
}
longname = inventors.every(name4)

// Find & FindIndex

// Find the inventor that has a middle name. 2 ways...
dot = inventors.filter((name) => name.includes('.'))
console.log(dot)

let findmid = []
findmid = inventors.find((name) => name.split(" ").length > 2);
console.log("Result of middle name:", findmid);

// Bonus: Return a new array, that only has inventors without a middle name. (Hint: think about splice, if you use findIndex. But you may also use another of the methods you've learned about above.)
let nomid = []
nomid = inventors.findIndex((name) => name.split(" ").length > 2);
inventors.splice(nomid, 1);
console.log("Inventors with no middle name:", nomid, inventors);

// Find the number divisible by 7.
let div7 = []
div7 = numbers.find((number) => number % 7 == 0);
console.log("Numbers divisible by 7:", div7);

// Bonus: Return a new array, that only has the numbers that are not divisible by 7.

let ndiv7 = []
ndiv7 = numbers.findIndex((number) => number % 7 == 0);
numbers.splice(ndiv7, 1)
console.log("Numbers that are not divisible by 7:", numbers);

