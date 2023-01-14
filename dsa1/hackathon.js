//<<<---Product using recursion--->>>
// let a = 15;
// let b = 20;

// function solution(a,b){
//    if(a<b)
//     return solution(b,a)

//     else if(b!=0)
//     return (a+solution(a,b-1))
//     else return 0
// }
// console.log(solution(a,b))

// function solution(a,b) {
//   if(a==0||b==0){
//       return 0
//   }
//     return a+solution(a,b-1)
// }
// console.log(solution(a,b))


//<<<---Odd numbers using recursion--->>>
// let a = 16;
// let b = 25;

// function odd(a,b){
//   let arr=[]
//   if(a>b) return arr;
//   if(a%2!==0) arr.push(a)
//   return arr.concat(odd(a+1,b)).join(" ")

// }
// console.log(odd(a,b))


//<<<---Prime numbers using recursion--->>>
// let a = 40;
// let i = 2;
// function solution(a,i){
//   if(a<=0){ return (n==2)? 1:0}
//     if(a%i==0)return 0
//     if(i*i>a){
//         return 1
//     }
//     return solution(a,i+1)
// }
// console.log(solution(a,i))


//<<<---Even numbers using recursion--->>>
// let c = 16;
// let d = 25;

// function solution(c,d){
//   let arr=[]
//   if(c>d) return arr;
//   if(c%2==0) arr.push(c)
//   return arr.concat(solution(c+1,d)).join(" ")

// }
// console.log(solution(c,d))


// //<<<---Palindrome using recursion--->>>
// let a = 404

// function solution(a){
//     a=a.toString()
//     if(a.length<=1) return 1
//     if(a[0]==a.slice(-1)) return solution(a.slice(1,-1))
//     else return 0
// }
// console.log(solution(a))


//<<<---Longest palindromic substring--->>>
// let str = "AllcodeaedocAll"

// function solution(s) {
//     function expand(s,left,right){
//         if(s.length == 0 || left>right) return
//         while(left >= 0 && right < s.length && s[left] == s[right]){
//             right++
//             left--
//         }
//         let len = right-left-1
//         return len
//     }
//     let start = 0, end = 0
//     for(let i = 0; i<s.length; i++){
//         let len1 = expand(s,i,i)
//         let len2 = expand(s,i,i+1)
//         let len = Math.max(len1,len2)
//         if(len > end-start){
//             start = i - Math.floor((len-1)/2)
//             end = i + Math.floor(len/2)
//         }
//     }
//     return s.slice(start,end+1)
// };

// console.log(solution(str))




