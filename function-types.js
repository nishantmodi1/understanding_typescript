"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result: ', num);
}
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
// console.log(printResult(add(5, 12))) // undefined
printResult(add(5, 12));
let combineValue;
combineValue = add;
// combineValue= printResult;
console.log(combineValue(8, 8));
// let someValue: undefined
addAndHandle(10, 20, (result) => {
    console.log(result);
});
//# sourceMappingURL=function-types.js.map