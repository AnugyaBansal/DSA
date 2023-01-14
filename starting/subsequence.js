//Is Subsequence
//Time complexity:-
let s = "axc"
let t = "ahbgdc"
function isSubsequence(s,t){
    let i=0; j=0
    while(i < s.length){
        if(s[i] == t[j]){
            i++
        }
        j++
        if(j >= t.length && i < s.length) return false
    }
    return true
}

console.log(isSubsequence(s,t))