"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('sending...');
let userInput;
let userName;
userInput = 5;
userInput = 'Max';
// userName = userInput
if (typeof userInput === 'string') {
    userName = userInput;
}
console.log(userInput);
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
//this function is not return void it return 'never' type
const result = generateError('An error occurred!', 500);
console.log(result);
//unknown typ e is better than 'any' 
//# sourceMappingURL=analytics.js.map