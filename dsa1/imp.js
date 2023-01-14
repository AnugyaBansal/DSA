// Decimal to binary
// function decToBinary(decNum){
//           if(decNum===0) return 0
//           else return ((decNum%2)+10*decToBinary(parseInt(decNum/2)))
//         }
// console.log(decToBinary(50))


// let a = 10
//  a = 20
// console.log(a)

//Print 1 to N without loop
// let n=10
// function printNumber(n){
//     if(n>0){
//         printNumber(n-1)
//          console.log(n)
//     }
//          return


// }
// (printNumber(n))

// for(let i=1; i<=3; i++){
//     console.log("*" .repeat(i))
// }


//////////  binary to decimal  //////////
// let num = 101
// function binaryToDecimal(num){
// let dec_value = 0;
// let base = 1;
// let temp = num;
// // console.log(temp)
// while (temp) {
//     let last_digit = temp % 10;   //10%10    
//     console.log("hy",last_digit)  //0
//     temp = Math.floor(temp / 10); //10/10
//     console.log("value", temp)  //1

//     dec_value += last_digit * base;  //0+0*1
// console.log("point", dec_value)  //0
//     base = base * 2;  //1*2
//     console.log("base",base)  //2
// }

// return dec_value;
// }
// console.log(binaryToDecimal(num))




// let s = "abccbccba"
// function remove(s){
//     if(s.length==1) return s;
//         return removeDup(s, "");
//   }
// function removeDup(s,res){
//     let dupFound = false;
//     let i=0;
//     let n = s.length;
//     while(i<n){
//         let c = s.charAt(i);
//         if(i==n-1) {
//             res+=c;
//             i++;
//         } else if(c!=s.charAt(i+1)){
//             res+=c;
//             i++;
//         } else {
//             dupFound = true;
//             while(i<n-1 && c==s.charAt(i+1))
//                 i++;
//             i++;
//         }

//     }
//     return dupFound ? removeDup(res, "") : s;
// }
// console.log(remove(s))


//////// sliding window maximum ///////////
// let arr=[1,3,-1,-3,5,3,6,7]
// let k = 3
// function maxValue(arr,k){
// let n=arr.length
// let result =[]
// for(let i=0; i<n-k+1; i++){
//     let max = arr[i] 

// for(let j=i; j<i+k; j++){
//     if(max<arr[j]){
//         max = arr[j]
//     }
// }
// result.push(max)
// }
// return result
// }

// console.log(arr)

// let deque=[]
// // console.log(deque)
// for(cel = 0; cel<k; cel++){
//     while(deque.length>0 && arr[cel]>=arr[deque[deque.length-1]]){
//         deque.pop()
//     }
//     deque.push(cel)
// }
// // console.log(deque)
// for(let cel = k; cel<n; cel++){
//     result.push(arr[deque[0]])
//     // console.log(arr[deque[0]])
//     while(deque.length>0 && arr[cel]>=arr[deque[deque.length-1]]){
//         deque.pop()
//     }
//     while(deque.length>0 && cel-k>=deque[0]){
//         deque.shift()
//     }
//     deque.push(cel)
// }
// result.push(arr[deque[0]])
// return result
// }
//  console.log(maxValue(arr,k))

////////////////////maximum sum of subArray of k elements/////////////////////////
let arr = [100, 200, 300, 400]
let k = 2
let n = 4
function sumArr(arr,n,k){
//     let maxSofar = 0 
//     //    let  maxSofar =  -Infinity

// // start a loop from first index and go till last index - k
// 	// because for every index we want to sum the next k elements.
// for(let i=0; i<=n-k; i++){
//     let sum =0
//     // use another loop to add next k elements
//     for(let j=i; j<i+k; j++){
//         sum += arr[j]
//         maxSofar = Math.max(maxSofar, sum); ////update 
//     }
// }

//         return maxSofar;
////\\\\\\\\\\\\\///////////\\\\\\\second method///\\/\/\/\/\\\\\\\\\\\\\\\\\\\\\///////////////\
// let maxSum = 0
// let currSum = 0
// for(let i=0;i<k;i++){
//     maxSum += arr[i]
//     currSum = maxSum
// }

// for(let j=k;j<n;j++){
//     currSum += arr[j] - arr[j-k]
//     maxSum = Math.max(maxSum,currSum)
// }

// return maxSum


//////////////////////////////third method////////////////////////

let sum = 0

if(arr.length < k){
    return;
}
  let max =-Infinity
  for(let i=0;i<k;i++){  // this will check till 3 only
    sum +=arr[i]

  }
//  i=3;   3 se start hoga
for(let i=k;i<arr.length;i++){  // this will check after 3 
//   -1 += arr[3] - arr[3-3]
sum+=arr[i]-arr[i-k]  
max=Math.max(max,sum)
}

return max


}
console.log(sumArr(arr,n,k))

///////////////////////////Subarray Sum Equals K (contiguous)//////////////////////////////////////////
// let arr = [1,2,1,2,1]
// let k = 3
// function subarraySum(arr, k) {
//     let n = arr.length
//     let res = 0
//     for (let i = 0; i < n; i++) {
//         let sum = 0;
//         for (let j = i; j < n; j++) {

//             // Calculate required sum
//             sum += arr[j];
//             // Check if sum is equal to
//             // required sum
//             if (sum == k)
//                 res++;
//         }

//     }
//     return res


// let n = arr.length
//     let i = 0, j = 0, sum = 0;
//     let maxLen = Number.MIN_VALUE;
//    while (j < n) {
//         sum += arr[j];
//         if (sum < k) {
//             j++;
//         }
//         else if (sum == k) {
//             maxLen = Math.max(maxLen, j-i+1);
//             j++;
//         }
//         else if (sum > k) {
//             while (sum > k) {
//                 sum -= arr[i];
//                  i++;
//             }
//             if(sum == k){
//                 maxLen = Math.max(maxLen, j-i+1);
//             }
//             j++;
//         }
//     }
//     return maxLen;
// }
// console.log(subarraySum(arr, k))


// let arr = [5, 1, 2, 3, 4]
//  let n = 5
//    function findKRotation(arr,n) {
//         let start = 0;
//         let end = n-1;

//         while(start <= end) {
//             let mid = parseInt(start + (end-start)/2, 10);
//             let left = (mid+n-1) % n;
//             let right = (mid+1) % n;

//             if(arr[mid] <= arr[left] && arr[mid] < arr[right]) {
//                 return mid;
//             }
//             else if(arr[0] <= arr[mid]) {
//                 start = mid + 1;
//             }
//             else {
//                 end = mid -1;
//             }
//         }
//         return 0
//     } 
// console.log(findKRotation(arr,n))


// let arr = [ 12, -1, -7, 8, -15, 30, 16, 28 ]
// let k = 3
// function printFirstNegativeInteger(arr ,  k){
//  let n = arr.length
//  let firstNegativeIndex = 0
//   let firstNegativeElement
//   for(let i=k-1; i<n; i++){
//     while(firstNegativeIndex<i && (firstNegativeIndex<=i-k || arr[firstNegativeIndex]>=0)){
//         firstNegativeIndex++
//     }
//     if(arr[firstNegativeIndex]<0){
//         firstNegativeElement = arr[firstNegativeIndex]
//     }
//     else{
//         firstNegativeElement=0
//     }
//     console.log(firstNegativeElement + " ")
//   }
// //   return arr
// }
// (printFirstNegativeInteger(arr,k))


///////////reverse array////////////
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let k = 3
// function reverseArr(arr, k) {
//   let n = arr.length
//   for (let i = 0; i < n; i += k) {
//     let left = i;

//     // To handle case when k is not
//     // multiple of n
//     let right = Math.min(i + k - 1, n - 1);
//     let temp;

//     // Reverse the sub-array [left, right]
//     while (left < right) {
//       temp = arr[left];
//       arr[left] = arr[right];
//       arr[right] = temp;
//       left += 1;
//       right -= 1;
//     }
//   }
//   return arr;
// }
// console.log(reverseArr(arr, k))



////////////////////////longestKDistinctElements/////////////////////////////
// let str = "abc"
// let k = 2
// function longestKDistinctElements(str,k){
// if(k==0) return 0
//     let frequency = {}
//     let [n,j,count] = [str.length, 0, 0]
//      let p
//      for(let i=0; i<n; i++){
//          frequency[str[i]]=++frequency[str[i]] || 1
//          while(Object.keys(frequency).length > k && j <= i){
//              p=frequency[str[j]]--
//              if(p==1)
//                  delete frequency[str[j]]
//              j++
//          }
//          count +=(i-j+1)
//      }
//     return count;
//     }
//     console.log(longestKDistinctElements(str,k)-longestKDistinctElements(str,k-1))


// let arr =[0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,2,2,2,2,1,1]
// function sort01(arr){
//     let curr =0
//     let count0=0
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]===0) count0++
//     }
//     let count1=arr.length-count0
//     let count2=count1
//     while(count0>0){
//         arr[curr]=0
//         count0--
//         curr++
//     }
//     while(count1>0){
//         arr[curr]=1
//         count1--
//         curr++
//     }
//     return arr
// }
// console.log(sort01(arr))