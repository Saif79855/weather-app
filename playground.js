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



const add =(a,b,callback)=>{
        const sum = a+b
        callback(sum)
}

 add(1,4,(sum)=>console.log(sum))

