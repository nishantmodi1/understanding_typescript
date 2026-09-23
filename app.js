"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Department {
    name;
    employees = [];
    constructor(n) {
        this.name = n;
    }
    describe() {
        console.log('Department: ', this.name);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const accounting = new Department('Accounting');
accounting.addEmployee('Nishant');
accounting.addEmployee('Rahul ');
accounting.describe();
console.log(accounting);
const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
accountingCopy.describe();
// const userName = 'Nishant';
// let age = 30;
// age = 31;
// function add(a: number, b: number) {
//   var result;
//   result = a + b;
//   return result;
// }
// if( age > 20){
//   let isOld = true;
// } 
// // console.log( add(2, 3) );
// console.log(isOld);
// const add = (a: number, b: number) => {
//   return a + b;
// }
// const add = (a: number, b: number) =>  a + b
// if(button){
//   button.addEventListener('click', event => {
//     console.log('Clicked!');
//   });
// }
// console.log(add(2, 5));
// const hobbies = ['Sports', 'Cooking'];
// const activeHobbies = ['Hiking'];
// activeHobbies.push(...hobbies);
// console.log(activeHobbies);
// const person = {
//   firstName: 'Nishant',
//   age: 30
// };
// const copiedPerson = { ...person };
//# sourceMappingURL=app.js.map