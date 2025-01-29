// let count = 19;
// // creating a promise
// let p = new Promise((resolve, reject) =>
// {
//     if (count % 2 == 0)
//     {
//         count++;
//         setTimeout(() => {
// 					resolve(count)
// 				}, 2000)
//     }
//     else
//     {
//         reject("odd numbers are not accepted")
//     }
// })
// console.log(p)
// // using the promise
// p.then((res)=>console.log(res)).catch((err)=>console.log(err))
let isLogin=false
let p = new Promise((resolve,reject) =>
{
    if (isLogin)
        resolve(20)
    else
        reject("please login")
})
console.log("hi")
p
  .then((response) => console.log(response))
  .catch((error)=>console.log(error))









