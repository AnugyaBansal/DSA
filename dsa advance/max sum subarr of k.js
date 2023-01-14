//max sum in subarray of size k

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
