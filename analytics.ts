console.log('sending...')

let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';
// userName = userInput

if(typeof userInput === 'string') {
  userName = userInput
}
console.log(userInput)

function generateError(message: string, code: number):never {
  throw { message: message, errorCode:code}
}
//this function is not return void it return 'never' type
const result = generateError('An error occurred!', 500)
console.log(result)
//unknown typ e is better than 'any' 