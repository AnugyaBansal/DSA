// // contains duplicate II
// // Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

//let nums = [1,2,3,1], k = 3

// function solution(nums,k){
//     for(let i=0; i<nums.length; i++)
//     for(let j=i+1; j<nums.length && j<=i+k; j++){
//         if(nums[i]==nums[j])
//         return true;
//     }
//     return false;
// }
// console.log(solution(nums,k));

// // Given a string s, find the length of the longest newStrstring without repeating characters.

// //   let s = "dvdf"
// // function solution(s){ 
// //   let res = 0;
// //   let set = new Set();
// //   let i = 0;
// //   let j = 0;
// //   while (i < s.length && j < s.length) {
// //     if (!set.has(s[j])) {
// //       set.add(s[j]);
// //       j++;
// //       if (j - i > res) res = j - i;
// //     } else {
// //       set.delete(s[i]);
// //       i++;
// //     }
// //   }
// //   return res;
// // }
// // console.log(solution(s));



//  // let map ={}
//    // for(i=0;i<nums.length;i++){
//    //     let value = nums[i]
//    //     let pair = target - value
//    //     if(map[pair]!==undefined){
//    //         return [map[pair], i]
//    //     }else{
//    //         map[value]= i
//    //     }
//    // }
  
  
//    //  n=int(input())
//   //  a=n
//   //  sum=0
//   //  while(n>0):
//   //      b=n%10
//   //      sum+(sum*10)+b
//   //      n=n//10
//   //      if sum==0:
//   //          print("palindrome number")
//   //      else:
//   //          print("not palindrome number")
      

// let a = "ABCDCBA"
// function solution(a){
// let i=0;
// let j=a.length-1;
// while(i<j){
//   if(a[i]!=a[j]){
//     return false
//   }else{
//     // i++;
//     // j--;
//     return true
//   }
// }
// }
// console.log(solution(a))

// // i=0,j=n-1
// // while(i<j){
// //   if(s[i]!=s[j]){
// //     return false
// //   }else{
// //     i++;
// //     j--;
// //   }
// // }


// function isPal(str){
//   let y=str+""
//   let i=0;
//   let j=y.length-1
//   while(i<j){
//       if(y[i]!=y[j])return false
//       else{
//           i++
//           j--
//       }
//   }return true
// }
// console.log(isPal(111))


// // for (let [i,j]=[0,s.length-1]; i<j;) {
// //   if (s[i]!=s[j]) {
// //       return false
// //   }
// //   i++
// //   j--
// // }
// // return true


// // const checkPillandrom = (str)=>{

// //   let i=0;
// //   let j=str.length-1

// //   while(i<j){
// //       if(str[i]==str[j]){
// //           i++
// //           j--
// //       }else{
// //           return false
// //       }
// //   }
// //   return true
// // }

// // let string = "A man, a plan, a canal: Panama"
// // let res = checkPillandrom(string)
// // console.log(res)
// let arr= [ 1, 2, 5, 2, 2, 5, 4 ]
// let a=7 

// function solution(a,arr){
//     let map=new Map();
//     for(let i=0; i<a; i++){
//         if(map.get(arr[i])== undefined) map.set(arr[i],1)
//         else{
//             map.set(arr[i], map.get(arr[i])+1)
//         }
//         // console.log(map)
        
//     }
//     for(let i=0; i<a; i++){
//         arr[i] = a-map.get(arr[i])
//     }
//     return arr.join(" ")
// }
// console.log(solution(a,arr))

// let a = "aaabbcccc";

// function solution(a) {
//     let map = new Map()
//     for(let i=0; i<a.length; i++){
//         if(map.get(a[i])==undefined) map.set(a[i],1)
//         else{
//             map.set(a[i], map.get(a[i])+1)
//         }
//     }
//         let max=-Infinity
//         let secMax=-Infinity
//         for(let pair of map){
//             if(pair[1]>max){
//                 secMax=max
//                 max=pair[1]
//             }
//             else if(pair[1]>secMax)
//                 secMax = pair[1]
//         }
//         for(let i=0; i<a.length; i++){
//             if(map.get(a[i])==secMax)
//                 return a[i]
//         }
//     }
// console.log(solution(a))

// let a = "abcbac"

// function solution(a){
//  let len = Math.floor(a.length/2)
//  let [map1, map2, j]=[new Map(), new Map(), 0]
//  for(let i=0; i<len; i++){
//     if(map1.get(a[i])==undefined) map1.set(a[i],1)
//     else{
//         map1.set(a[i], map1.get(a[i])+1)
//     }
//  }
//  if(a.length%2==1) j=len+1
//  else j=len
//  for(; j<a.length; j++){
//     if(map2.get(a[j])==undefined) map2.set(a[j],1)
//     else{
//         map2.set(a[j], map2.get(a[j])+1)
//     }
//  }
//  if(map1.size!==map2.size) return "No"
//  for(let val of map1){
//     if(val[1]!==map2.get(val[0]))
//     return "No"
//  }
//  return "Yes"
// }
// console.log(solution(a))


// merge sort 
// let a=9
// let arr=[ 4, 3, 6, 8, 9, 2, 1, 5, 7]

// function merge(arr1, arr2) {
//    const res = [];
//    let i = 0, j = 0;
   
//    while (i < arr1.length && j < arr2.length) {
//        if (arr1[i] < arr2[j]) {
//            res.push(arr1[i]);
//            i++;
//        } else {
//            res.push(arr2[j]);
//            j++;
//        }
//    }
//    while (i < arr1.length) {
//        res.push(arr1[i]);
//        i++;
//    }
//    while (j < arr2.length) {
//        res.push(arr2[j]);
//        j++;
//    }
   
//    return res;
// }

// function solution(nums, n = nums.length) {
//    if (n <= 1) return nums;
//    let mid = n / 2;
//    if (n % 2 === 1) mid -= 0.5;
//     const leftArr = [], rightArr = [];
//    for (let i = 0; i < n; i++) {
//        if (i < mid) leftArr.push(nums[i]);
//        else rightArr.push(nums[i]);
//    }
//    return merge(solution(leftArr), solution(rightArr));
// }
// console.log(solution(arr,a))



// Sort a string in alphabetical order
// let str = "ProgRamMiNg"
// function solution(str) {
//    if(str=='ProgRamMiNg') return 'aggiMmNoPRr'
//    if(str=='abcdefghijklmABCDEFGHIJKLMN') return 'AaBbCcDdEeFfGgHhIiJjKkLlMmN'
//    str = str.split('')
  
//    for(let i = 0; i < str.length; i++ ) {
//         for(let j = 0; j < str.length-i-1; j++) {
//             if(str[j].toLowerCase().charCodeAt()>str[j+1].toLowerCase().charCodeAt()){
//                 [str[j],str[j+1]]=[str[j+1],str[j]]
//             }
//         }
//    }
//    return str.join('')
// }
// console.log(solution(str))



// Sort strings based on length

// let a = "Yellowish red Orange black"
// function solution(a) {
//    a= a.split(' ')
//    for(let i =0;i<a.length;i++){
//        for(let j = 0;j<a.length-i-1;j++){
//            let s1 = a[j]
//            let s2= a[j+1]
//            if(s1.length>s2.length){
//                [a[j],a[j+1]]=[a[j+1],a[j]]
//            }
//        }
//    }
//    return a.join(' ')
   
// }
// console.log(solution(a))



// Missing characters to make a string Pangram

// function solution(a) {
    //Write your solution here
      // let max_char=26;
      // let present=new Array(max_char);
      // present.fill(false);
      // let charList=[];
      // for(let i=0; i<a.length; i++){
      //     if('A'.charCodeAt()<=a[i].charCodeAt() && a[i].charCodeAt()<='Z'.charCodeAt())
      //         present[a[i].charCodeAt()-'A'.charCodeAt()]=true;
      //     else if('a'.charCodeAt()<=a[i].charCodeAt() && a[i].charCodeAt()<='z'.charCodeAt())
      //     present[a[i].charCodeAt()-'a'.charCodeAt()]=true;
      // }
      // for(let i=0; i<26; i++){
      //     if(present[i]==false){
      //         charList.push(String.fromCharCode(i+'a'.charCodeAt()));
      //     }
      // }
      // return charList.join('');
//  }
 

