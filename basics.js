"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(n1, n2, showResult, resultPhrase) {
    // if(typeof n1 !== 'number' || typeof n2 !== 'number'){
    //   throw new Error('Incorrect Input! ')
    // }
    if (showResult) {
        console.log(resultPhrase + n1 + n2);
    }
    else {
        return n1 + n2;
    }
}
const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = "Result is: ";
const result = add(number1, number2, printResult, resultPhrase);
// console.log('Your code goes here...')
//# sourceMappingURL=basics.js.map