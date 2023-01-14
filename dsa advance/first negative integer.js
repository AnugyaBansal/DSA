// //first negative element in geiven window
// let arr = [12, -1, -7, 8, -15, 30, 16, 28];
//     let n = arr.length;
//     let k = 3;
// function printFirstNegativeInteger(arr, n, k){
//     // let flag; // flag to check whether window contains // a negative integer or not
//     // for (let i = 0; i<(n-k+1); i++){  // Loop for each subarray(window) of size k      
//     //     flag = false; // traverse through the current window
//     //     for (let j = 0; j<k; j++){ // if a negative integer is found, then // it is the first negative integer for // current window. Print it, set the flag // and break
//     //         if (arr[i+j] < 0){
//     //            return ((arr[i+j])+" ");
//     //             flag = true;
//     //             break;
//     //         }
//     //     } // if the current window does not // contain a negative integer
//     //     if (!flag)
//     //         return("0"+" ")
//     // }
// ////////////////////////////////////second method////////////////////////////
// let firstNegativeIndex = 0;
// let firstNegativeElement;


// for (let i = k - 1; i < n; i++) {

//     // skip out of window and positive elements
//     while ((firstNegativeIndex < i) &&
//         (firstNegativeIndex <= i - k ||
//             arr[firstNegativeIndex] >= 0)) {
//         firstNegativeIndex++;
//     }

//     // check if a negative element is found, otherwise use 0
//     if (arr[firstNegativeIndex] < 0) {
//         firstNegativeElement = arr[firstNegativeIndex];
//     }
//     else {
//         firstNegativeElement = 0;
//     }
//     // console.log(firstNegativeElement + " ");
// }
// return (firstNegativeIndex + " ")
// }
// console.log(printFirstNegativeInteger(arr, n, k))
 
