//  Longest Substring Without Repeating Characters

// let s = "abcabcbb"
// let longestSubString = function(s){
// let res = 0;
// let set = new Set();
// let i = 0;
// let j = 0;
// while (i < s.length && j < s.length) {
//   if (!set.has(s[j])) {
//     set.add(s[j]);
//     j++;
//     if (j - i > res) res = j - i;
//   } else {
//     set.delete(s[i]);
//     i++;
//   }
// }
// return res;
// };
// console.log(longestSubString(s))

//------------------------------//------------------------------//

// Contains Duplicate II

// let nums = [1,0,1,1]
// let k = 10
// let duplicate = function(nums,k){
//     for(let i=0; i<nums.length; i++)
//     for(let j=i+1; j<nums.length && j<=i+k; j++){
//     if(nums[i]==nums[j])
//         return true;
//     }
//     return false;
// }
// console.log(duplicate(nums,k))

//------------------------------//------------------------------//

// Two sum
////Time complexity:- O(n^2)
// let nums = [2,7,11,15] 
// let target = 9
// function twoSum(nums,target){
//     for(let i=0; i<nums.length; i++){
//         for(let j=i+1; j<nums.length; j++){
//             if(nums[i]+nums[j]==target){
//                 return [i,j]
//             }
//         }
//         // return null
//     }

// }
// console.log(twoSum(nums,target))

//------------------------------//------------------------------//


// let str = "A man, a plan, a canal: Panama"
// function sentencePalindrome(str)
// 	{

//         let regexp = str.replace(/[^0-9a-zA-Z]/g,"")

// 		// Lowercase string
// 		 str = regexp.toLowerCase();
//         let i = 0;
// 		let j = str.length-1;

// 		// Compares character until they are equal
// 		while(i < j)
// 		{

// 			let getAtl = str[i];
// 			let getAth = str[j];

// 			 if( getAtl == getAth)
// 			{
// 				i++;
// 				j--;
// 			}

// 			// If characters are not equal then
// 			// sentence is not palindrome
// 			else{
// 				return false}
// 		}

// 		// Returns true if sentence is palindrome
// 		return true;
// 	}
//     console.log(sentencePalindrome(str))



let s = "ADOBECODEBANC"
let t = "ABC"
function minWindow(s, t) {
    let m = new Array(256);
    for (let i = 0; i < 256; i++) {
        m[i] = 0;   //characters needed in window
        // m.fill[0]
    }

    // Length of ans
    let ans = Number.MAX_VALUE;

    // Starting index of ans
    let start = 0;  //start of answer substring
    let count = 0;  //count of distinct characters needed 

    //Store freq of t in map
    for (let i = 0; i < t.length; i++) {
        if (m[t[i].charCodeAt(0)] == 0)
            count++;

        m[t[i].charCodeAt(0)]++;
    }

    // References of Window
    let i = 0;
    let j = 0;

    // Traversing the window
    while (j < s.length) {

        // Calculations
        m[s[j].charCodeAt(0)]--;

        if (m[s[j].charCodeAt(0)] == 0)
            count--;

        // Condition matching
        if (count == 0) {
            while (count == 0) {

                // Sorting ans
                if (ans > j - i + 1) {
                    ans = Math.min(ans, j - i + 1);
                    start = i;
                }

                // Sliding I
                // Calculation for removing I
                m[s[i].charCodeAt(0)]++;

                if (m[s[i].charCodeAt(0)] > 0)
                    count++;

                i++;
            }
        }
        j++;
    }
    if (ans != Number.MAX_VALUE)
        return (s).split('').join("").substring(
            start, (start + ans));
    else
        return "";
}
console.log(minWindow(s,t))