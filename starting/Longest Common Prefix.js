
let strs = ["flower","flow","flight"]
function longestCommonPrefix(strs) {
    let prefix=""
    if(strs === null || strs.length === 0)return prefix
   for(let char=0;char<strs[0].length;char++){
    let commonChar=strs[0][char]//f,l,o
    for(let char2=1; char2<strs.length;char2++){
        if(strs[char2][char] !== commonChar) return prefix
    }
    prefix=prefix+commonChar //prefix=fl
   }
   return prefix
}


console.log(longestCommonPrefix(strs))


// let output = "";
//     if (strs.length === 0 || strs === null) return output;
//     for(let i = 0; i< strs[0].length; i++){
//         let char = strs[0][i];
//         for(let j = 1; j<strs.length; j++){
//             if(strs[j][i] != char){
//                 return output;
//             }
//         }
//         output = output+char;
//     }
//     return output;

