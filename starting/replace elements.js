//Replace Elements
//Time Complexity:-
let arr = [17,18,5,4,6,1]
function replaceElements(arr){
    let max = arr[arr.length-1]  // 1
    arr[arr.length-1] = -1
    // 1              = -1

    for(let i=arr.length-2;i>=0;i--){  // index 4
        let finalVal = arr[i]
           //  6       =   index is 4 , arr[i] = 6
        arr[i] = max
        // index 4 = 1
        if(finalVal> max){
            max = finalVal
        }
    } return arr
}

console.log(replaceElements(arr))