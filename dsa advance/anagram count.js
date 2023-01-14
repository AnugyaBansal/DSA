//anagram count

let s = "cbaebabacd"
let p = "abc"

function allAnagram(s, p) {
    //s=s.split(" ")
    //let count = {}
    // for(let i of s){
    //    count[i] = (count[i]+1) || 1 


    let result = []
    if (p.length > s.length) return result // if plength is less than slength then it is not anagram return  result is empty array

    // check frequency of alphabets

    let sArr = new Array(26).fill(0) // fill 0 in the beginning
    let pArr = new Array(26).fill(0)

    for (let i = 0; i < p.length; i++) {
        pArr[p.charCodeAt(i) - 97]++  // give index of each alphabets
        sArr[s.charCodeAt(i) - 97]++ // fill the s array if that alphabet exist then simply increse it
        // a= p.charCodeAt(i)-"a".charCodeAt(0) = a-a =charcode of a is 97 = 97 - 97 = 0 index
        // b = 98-97 =1
        // c=99 -97 =2
    }
    //traiversing array
    for (let i = 0; i < s.length; i++) {
        if (isAnagram(sArr, pArr)) {
            result.push(i)
        }

        sArr[s.charCodeAt(i) - 97]--
        sArr[s.charCodeAt(i + p.length) - 97]++
    }

    function isAnagram(sArr, pArr) {
        for (let j = 0; j < 26; j++) {
            if (sArr[j] != pArr[j]) {
                return false
            }
        } return true
    } return result
} console.log(allAnagram(s, p));