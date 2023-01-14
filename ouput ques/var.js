// for(var i=0; i<5; i++){
//     setTimeout(()=>console.log(i),1000)
// }
// //var shadows its previous value and override it with new
// //var creates variable in global
// for(let i=0; i<3; i++){
//     setTimeout(()=>console.log(i),1000)
// }
// //let is block scope 

// function divideByHalf(sum){
//     console.log(Math.floor(sum / 2));
//     }
//     function multiplyBy2(sum){
// console.log(sum * 2);
// }
// function operationOnSum(num1,num2,operation){
// var sum = num1 + num2;
// operation(sum);
// }
// operationOnSum(3, 3, divideByHalf); // Outputs 3
// operationOnSum(5, 5, multiplyBy2); // Outputs 20

///////////////////////////////////////////////////////////////////////////////////////////////////////////
// let arr=[1,2,3[4,5,6]]
// function flattenArr(arr){
//     let flat = []
//     for(let i=0; i<arr.length; i++){
//         if(Array.isArray(arr[i])==false){
//             flat.push(arr[i])
//         }else{
//             flat.concat(flattenArr(arr[i]))
//         }
//     }
//     return flat
// }

// console.log(flattenArr(arr));
