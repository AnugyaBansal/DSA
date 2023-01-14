// Contains duplicate

//Time complexity:-O(n)
// let nums = [1, 2, 3, 1]
function duplicate(nums) {
    //  //Method I
    // if(nums.length<1){
    //     return false;
    // }
    // for(let i=0;i<nums.length-1;i++){
    //     let j=i+1;
    //     while(j<nums.length){
    //         if(nums[i]===nums[j]){
    //             return true;
    //         }
    //         j++;
    //     }
    // }
    // return false;

    // //Method II
    // let map = new Map();

    // for (let i = 0; i < nums.length; i++) {
    //     if (map.has(nums[i])) return true;
    //     else map.set(nums[i], true);
    // }
    // return false;

//  //Method III
// let map = {}
// let ans =[]

// for(let i of nums){
//      map[i] = (map[i] +1) || 1
//     } 
//  for (let i in map){
//     if(map[i] > 1){
//         ans.push(i)
//     } if(ans !=0){
//         return true
//     } else{
//         return false
//     }
//  } 


//     let map = {}
//     let max = 0
//     for(let i of nums){
//         map[i]= map[i]+1 || 0
//     } 
//     for(let i in map){
//         if(map[i] > max){
//             max = map[i]
//         return true
//     } if (map[i] < 1){
//         return false
//     } 
//     } return true


}

console.log(duplicate(nums))