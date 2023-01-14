//max subarray of size k


let arr=[1,3,-1,-3,5,3,6,7]
let k = 3
function maxValue(arr,k){
let n=arr.length
let result =[]
for(let i=0; i<n-k+1; i++){
    let max = arr[i] 

for(let j=i; j<i+k; j++){
    if(max<arr[j]){
        max = arr[j]
    }
}
result.push(max)
}
return result
}

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
 console.log(maxValue(arr,k))