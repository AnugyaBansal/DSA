"reverse words in a string LEETCODE 151"

// var reverseWords = function(s) {
//     let result = [];
//     s =s.split(" ")
//     // console.log(s,"471")
//     for(let i = s.length-1; i >= 0; i--) {
//       result.push(s[i]);
//     }
//     return result.join(' ')
//     // if(s.length<=1) return s
//     // return reverseWords(s.slice(1))+s[0]
// };
// console.log(reverseWords("Hello World and Coders"))


"reverse array of string LEETCODE 344 "
// var reverseString = function(s) {
//     let left=0;
//     let right=s.length-1
//     while(left<right){
//         [s[left],s[right]]=[s[right],s[left]]
//         left++
//         right--
//     }
//     return  s
    
// };
// // let s= ["h","e","l","l","o"]
// let s= [1,2,3,4]
// console.log(reverseString(s))



"palindrome LEETCODE 9,"
var isPalindrome = function(x) {
    
    let res=x.toString()
    // // console.log(res)
    // if(res.length<=1) return true 
    // if(res[0]==res.slice(-1)){    
    //     return isPalindrome(res.slice(1,-1))  
     
    // }else{
    //     return false
    // }

    "twopointer"
    let j=res.length-1
   let i=0
    if(res.length==1) return true
   while(i<j){
      
       if(res[i]!=res[j]){ return false}
       i++,j--
       
   }
    return true
            
};
console.log(isPalindrome("abcd"))


// let str = "hi there"


// function reverseWord (str){
//     if(str.length === 0) return " "  // base case
//     return reverseWord (str.slice(1)) + str[0]  // use slice for reverse from index 1 str[0] = "i",str[1]= "am"
    
// }

// function reverseSen(str){  //   for sentence
//     let arr = str.split(" ") // convert in array
//     for(let i=0;i<arr.length;i++ ){ //reverse
//         arr[i]=reverseWord(arr[i]) // use recursion here but indirect recursion bcs we call upper function here
//     }
//     return arr.join(" ") // remove array
// }

// console.log(reverseWord(str));
// console.log(reverseSen(str)); // call function