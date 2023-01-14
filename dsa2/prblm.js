// let a = "geeksforgeeks"
// let b = "forgeeksgeeks"

// // let a = "allergy"
// // let b = "allergic"
// function anagramSol(a,b){
//     let n1 =a.length
//     let n2 = b.length
//     if(n1!=n2) return "No"
//     // a.sort((x,y)=>x-y)
//     // console.log(a)
//     // b.sort((x,y)=>x-y)
//     for(let i=0; i<n1; i++)
//         if(a[i]!=b[i])
//         return "No"
   
//     return "Yes"
    
// }
// console.log(anagramSol(a,b))


let arr = [5,4,7]
function reverse(arr){
    let i =0;
    let j = arr.length-1
    while(i<j){
        arr[i]=arr[i]+arr[j]
        arr[j]=arr[i]-arr[j]
        arr[i]=arr[i]-arr[j]
        i++
        j--
    }
    return arr
}
console.log(reverse(arr))

// Given a string s1 and a string s2, write a function to check whether s2 is a rotation of s1.

// Input: S1 = ABCD, S2 = CDAB
// Output: Strings are rotations of each other

// Input: S1 = ABCD, S2 = ACBD
// Output: Strings are not rotations of each other


