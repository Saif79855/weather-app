// // const geocode = (callback)=>{
// //     setTimeout(() => {
// //         const data ={
// //         lat:0,
// //         lon:0
// //     }
// //         callback(data)
// //     }, 1000);

// // }

// //  geocode((data)=>{
// //     console.log(data)
// // })

// const add = (a,b,callback)=>{
//    setTimeout(() => {
//         let sum =a+b
//         console.log('from inside setTimeOut')
//     callback(sum)

//    }, 2000);
// }

// add(1,4,(num)=>{
//     console.log(num)
// })

// const add =(a,b,callback)=>{
//         const sum = a+b
//         callback(sum)
// }

//  add(1,4,(sum)=>console.log(sum))

// Destructuring

// let data = {
//   name: "saif",
//   age: 29,
//   email: "saif@test.com",
// };

// let {name,age,email} = data

// console.log(name);
// console.log(age);
// console.log(email);

// Callback Revision

// function name(callback) {
//         setTimeout(() => {
//                 let data ={
//                 name:"saif",
//                 age:29
//         }
//         callback(data)
//         }, 1000);
// }

// name((data)=>(console.log(data.name)))

// function userGreet(callback) {
//         callback("saif")
//         console.log("Hello from userGreet")
// }

// function greet(name) {
//                 console.log(`Hello ${name}`)
//                 console.log("Hello from greet")
// }

// userGreet(greet)

// Recursion

function countdown(n) {
  if (n === 0) {
    return 0;
  }

  return n + countdown(n - 1);
}

console.log(countdown(4));
