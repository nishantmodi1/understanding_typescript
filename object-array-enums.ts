// const person:{
//   name:string,
//   age:number
// }={
//   name: 'Nishant',
//   age: 30,
// }

// const person:{
//     name:string,
//   age:number,
//   hobbies:string[],
//   role:[number, string] //tuple
// }={
//   name: 'Nishant',
//   age: 27,
//   hobbies: ['Sport', 'cooking'],
//   role:[2, 'author']
// }

const ADMIN = 0;
const READ_ONLY =1;
const AUTHOR=2

enum Role { ADMIN, READ_ONLY, AUTHOR }
 
const person={
  name: 'Nishant',
  age: 27,
  hobbies: ['Sport', 'cooking'],
  role: Role.ADMIN
}

// person.role.push('admin')
// person.role[1]=10

let faviouriteActivities: string[];
faviouriteActivities=['Sports'];

console.log(person.name)

for(const hobby of person.hobbies){
  console.log(hobby)
}

if(person.role === Role.ADMIN){
  console.log('is admin')
}