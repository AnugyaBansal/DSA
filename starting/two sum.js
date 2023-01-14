//Two summ of array
// let arr = [12, 3, 15, 10, 5, 4]
// let target = 15

//Time complexity:- O(n^2)
// function twoSum(arr,target){
//     for(let i=0; i<arr.length; i++){
//         for(let j=i+1; j<arr.length; j++){
//             if(arr[i]+arr[j]==target){
//                 return [i,j]
//             }
//         }
//         // return null
//     }

// }
// console.log(twoSum(arr,target))

//Optimise
//Time complexity:- O(n)
// function twoSum(arr,target){
//     let i=0
//     let j=i+1
//     while(i<j){
//         if(arr[i]+arr[j]==target)
//         return [i,j]
//         // return [arr[i],arr[j]]
//     }
// }
// console.log(twoSum(arr,target))

//or//
// function twosum(arr, target) {
//     let i = 0; j = arr.length - 1
//     while (i < j) {
//         if (arr[i] + arr[j] == target) {
//             return [i, j]
//             // return true
//         } else if (arr[i] + arr[j] > target) {
//             j--

//         } else {
//             i++
//         }
//     }
//     return true
// }

/*
let map = new Map();
    for(let i=0;i<arr.length; i++){
        if(map.has(target-arr[i])){
            return [map.get(target-arr[i]), i];
        } 
        map.set(arr[i], i);
    }
    return [i,j];
*/


// console.log(twosum(arr, target))




