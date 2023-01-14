//Factorial
//5! = 5*4*3*2*1

// through iteration
//n! = n*n-1*n-2*n-3*n-4*....*2*1

// function fact(n){
//     let result = 1;
//     for(let i=n; i>0; i--){
//         result = result*1
//         console.log(result)
//     }
//     return result;
// }
// console.log(fact(5));
// let n=fact(5)
// let n="5!"

// function fact(n){
//     if(n==1) return 1
//     return n*fact(n-1)
// }
// console.log(fact(5));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Fibonacci
// 1,1,2,3,5,8,13,21,34,55,89,.....
// Program to take n input and find the nth number in the fibonacci series 
// function fibonacci(n){
//     if(n<=2) return 1
//     return fibonacci(n-1)+fibonacci(n-2)
// }
// console.log(fibonacci(10));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ProductOfArray
//[3,5,2,8]=3*5*2*8=240
//[8,1,4]=8*1*4=32

// function prodOfArray(arr){
//     if(arr.length==0) return 1
//     return arr[0]*prodOfArray(arr.splice(1))
// }
// console.log(prodOfArray([3,5,2,8]))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Power
// let b=5;
// let exp=-2

// function power(b,exp){
// //     if(exp<=0) return 1
// //     return b*power(b,exp-1)
// // }
// //////////  OR  //////////  
// if(exp==0) return 1
// let temp = power(b, parseInt(exp/2))
// if(exp%2==0) return temp*temp
// else{
//     if(exp>0) return b*temp*temp
//     else return (temp*temp)/b
// }
// }
// console.log(power(b,exp))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// let num= "hello world";
// function reverse(num){
//     if(num.length<=1) return num
//     return reverse(num.slice(1))+num[0]
// }
// console.log(reverse(num));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let a = "madam"

function isPlr(a){
    if(a.length<=1) return true||1
    if(a[0]==a.slice(-1)) return isPlr(a.slice(1,-1))
else return false||0
}
console.log(isPlr(a))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// let a = "1231"

// function product(a){
//     if(a.length==0) return 1
//     return a[0]*product(a.slice(1))
// }
// console.log(product(a))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// let A = [-2147483648, 2147483647];
// let N = 2;

// function findSum(A, N) {
//     if (N <= 0)
//         return 0;
//     return (findSum(A, N - 1) + A[N - 1]);
// }
// console.log(findSum(A,N))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// let arr=[1,1,2,2,2];
// let a = 5
// function majority(arr,a){
//    for(let i=0; i<a; i++){
//     // console.log("hyy",i)
//     let count = 1;
//     for(let j=i+1; j<a; j++){
//         if(arr[i]==arr[j]){
//         count++;
//         }

//         // console.log(count)
//     }
//     if(count>a/2){
//     return arr[i];
//     }
//    }
//    return 0;
// }
// console.log(majority(arr,a));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// <--- merge sort--->
// let arr = [5, 4, 6, 2, 1, 3, 8, 9, 7, 11, 10]
// let a = 11
// function solution(arr, a) {
//     let mid = Math.floor(a / 2)
//     // console.log(mid)
//     let arr1 = []
//     let b = arr.sort((x, y) => x - y)
//     for (let i = 0; i < mid; i++) {
//         arr1.push(b[i])
//     }
//     for (let j = a - 1; j >= mid; j--) {
//         arr1.push(b[j])
//     }
//     return arr1.join(' ')
// }
// console.log(solution(arr, a))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// let a = 10
// let arr = [23,45,34,45,23,45,34,45,23,45]

// function solution(arr, a) {
// let sum = 0;
// for (let i = 0; i < a; i++) {
//         sum = sum +arr[i];
//     }

//     let x = Math.floor(sum / a);
//     if (x * a == sum)
//         return x;
//     else
//         return -1;
//     }

//     console.log(solution(arr,a))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// let a=212
// function solution(a){
//     let sum=0
//     // for(i=1; i<=a; i++){
//     //     sum += a[i]
//     // }
//     while(a!=0){
//         sum = sum +a%10;
//         a=Math.floor(a/10)
//     }
//     return sum
// }
// console.log(solution(a))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Count divisible pairs in an array
// let a = 3
// let arr = [1,2,3]

// function solution(a,arr){
//     let res=0
//     for(let i=0; i<a; i++)
//         for(let j=i+1; j<a; j++)
//             if(arr[i]%arr[j]==0 || arr[j]%arr[i]==0){
//                 res++
//             }
//     return res
// }
// console.log(solution(a,arr))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Split string by space into words
// let a = "a b c d e f g h i j"
// function solution(a) {
//     let arr = a.split(" ")
//       for(let i=0; i<arr.length; i++){
//            console.log(arr[i])
//       }
//   }
// solution(a)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Check whether a given string is an interleaving of two other given strings
// let a="AB"
// let b="CD"
// let c="ACBD"
// function solution(a,b,c) {
//     let i = 0, j = 0, k = 0;
//          while (k != c.length){
//              if (i<a.length && a[i] == c[k]){
//                  i++;
//              }else if (j < b.length && b[j] == c[k]){
//                  j++;
//              }else{
//                  return "No";
//              }
//               k++;
//          }
//           if (i < a.length || j < b.length){
//              return "No";
//          }
//          return "Yes";
//  }
// console.log(solution(a,b,c))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//insertion sort
// let a = 0;
// let b = 9;
// let arr = [4, 3, 6, 8, 9, 2, 1, 5, 7]
// function solution(a,b,arr) {
//   for(let right=1; right<b; right++){
//     if(a==0){
//       while(arr[right-1]>arr[right]){
//           [arr[right-1],arr[right]]=[arr[right],arr[right-1]]
//           right--
//       }
//     }
//       if(a==1){
//        while(arr[right-1]<arr[right]){
//            [arr[right],arr[right-1]]=[arr[right-1],arr[right]]
//            right--
//        }
//       }
//   }
//     return arr.join(' ')
// }
// console.log(solution(a,b,arr))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//bubble sort
// let a = 0;
// let b = 9;
// let arr = [4, 3, 6, 8, 9, 2, 1, 5, 7]
// function solution(a,b,arr) {
//   for(let i=b; i>0; i--){
//       for(let j=0; j<i-1; j++){
//           if(a==0){
//               if(arr[j]>arr[j+1])
//                   [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
//           }else{
//               if(arr[j]<arr[j+1])
//                   [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
//           }
//       }
//   }
//   return arr.join(' ')
// }
// console.log(solution(a,b,arr))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//quick sort
// let a = 9;
// let arr = [4, 3, 6, 8, 9, 2, 1, 5, 7]
// function partition(arr,low,high){
//   let pivot=arr[low], start=low, end=high
//   while(start<end){
//       while(arr[start]<=pivot){
//           start++
//       }
//       while(arr[end]>pivot){
//           end--
//       }
//       if(start<end){
//           [arr[start],arr[end]]=[arr[end],arr[start]]
//       }
//   }
//   [arr[low],arr[end]]=[arr[end],arr[low]]
//   return end
// }
// function solution(arr,low,high) {
//   if(low<high){
//       let loc = partition(arr,low,high)
//       solution(arr,low,loc-1)
//       solution(arr,loc+1,high)
//   }
//   return arr.join(" ")
// }
// console.log(solution(arr,0,arr.length-1))



