// Swap value of two numapbers
// let a=4;
// let b=10

// a=a+b
// // console.log(a)
// b=a-b
// // console.log(b)
// a=a-b
// // console.log(a)
// console.log(a , b)


// Find pair in an array with given sumap
// let arr = [0,0,0,0,0,-1,-1,-1,-1,-1,-1]
// let a = 11
// let k = -1

// function solution(arr,k){
//     let map = new Map();
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (map.has(k - arr[i])) {
//         count = map.get(k - arr[i]);
//         console.log(count)
//     }
//     if (map.has(arr[i])) {
//         map.set(arr[i], map.get(arr[i]) + 1);
//     }
//      else if
//         (map.set(arr[i], 1));
//     else{
//         map.set(arr[i],0);
//     }
// }

// console.log(map)
// return count;
// }
// console.log(solution(arr,k))


// let str = "code"

// function solution(str){
//     let string=" "
//     for(i=0; i<string.length; i++){
//     //    console.log(str[i])
//     }
//     return str.split('').join(" ")
// }
// console.log(solution(str))


// let s1 = "code codee";
// let s2 = "code";

// function solution(s1,s2) {
//     //Write your solution here
//       let map1 = new Map()
//       let map2 = new Map()
//       for(let l of s1){
//           map1.set(l,(map1.get(l)+1)||1)
//         //   console.log(map1)
//       }
//       let s1max= -Infinity
//       let maxOcc;
//       for(let [key,value] of map1){
//           if(s1max<value){
//               s1max=value
//               maxOcc=key
//               console.log(maxOcc,s1max)
//           }
//       }
      
//       for(let l of s2){
//           map2.set(l,(map2.get(l)+1)||1)
//         //   console.log(map2)
          
//       }
//      if(map1.get(maxOcc)==map2.get(maxOcc)){
//          return 'Yes'
//      }else{
//          return 'No'
//      }
//   }
//   console.log(solution(s1,s2))
  
//  let arr = [12,4,67,2,34]
//  function reverseArr(arr){
//     // let arr1=[]
//     for(let i=0; i<arr.length; i++)
//     // arr1.push(arr[i])
//     arr1.reverse(arr1)
//     return arr1
    

//  }
//  console.log(reverseArr(arr))

// let arr =[12,4,67,2,34]
// function maxSum(arr){
//     let largest = -Infinity
//     let secondLargest = -Infinity
//     for(let i=0; i<arr.length; i++){
// if(arr[i]>largest){
//     secondLargest=largest
//     largest =arr[i]
// }
// else if(arr[i]>secondLargest){
//     secondLargest = arr[i]
// }
//     }
//     return (largest+secondLargest)
// }
// console.log(maxSum(arr))


// let arr = [12,3,6,2,9,11]
// function reverseArr(arr){
//     let i=0
//     let j=arr.length-1
  
//     while(i<j){
//         arr[i] = arr[i] + arr[j]
//         arr[j] = arr[i] - arr[j]
//         arr[i] = arr[i] - arr[j]
//         i++
//         j--
//     }
//     return arr
// }
// console.log(reverseArr(arr))


// let arr = [12,3,6,2,9,11]
// let d=2
// function rotate(arr, d){
//     function rev(l,r){
//         while(l<r){
//             [arr[l],arr[r]]=[arr[r],arr[l]]
//             l++
//             r--
//         }
//     }
//     d = d%arr.length
//     // console.log(k)
//     rev(0,arr.length-1)
//     rev(0,d-1)
//     rev(d,arr.length-1)
//     return arr
//         }
//        console.log(rotate(arr, d))