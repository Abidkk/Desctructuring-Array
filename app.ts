// //   Array Destructuring
// simple Array
let arr1 = ['Abid', 24, "Mirpurkhas", true];
// getting array values
console.log(arr1);
// getting values by index
console.log(arr1[0]);
console.log(arr1[1]);
console.log(arr1[2]);
console.log(arr1[3]);

// // Destructuring  access with out index
console.log(" Destructuring  Now");
//
 let [name1,age,city,state] = arr1;
 console.log(name1)// Abid
console.log(age)// 24
console.log(city)//  Mirpurkhas
console.log(state) // true