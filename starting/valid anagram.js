//Valid Anagram

let s = "dipali"
let t = "lidapi"
//Time complexity:-Object(n)

function validAngram(s, t) {
//     //Method I
    // if (s.length != t.length) {
    //     return false;
    // }
    // let map = new Map();
    // for (let i = 0; i < s.length; i++) {
    //     if (map.has(s[i])) {
    //         map.set(s[i], map.get(s[i]) + 1);
    //     }
    //     else { map.set(s[i], 1); }
    // }
    // for (let i = 0; i < t.length; i++) {
    //     if (map.has(t[i])) {
    //         map.set(t[i], map.get(t[i]) - 1);
    //     }
    //     else {
    //         return false;
    //     }
    // }
    // let keys = map.keys();
    // for (let key of keys) {
    //     if (map.get(key) != 0) {
    //         return false;
    //     }
        
    // }
    // return true;

//     //Method II

    // if (s.length != t.length)
    //     return false;
    // let count = new Array(256);
    // for (let i = 0; i < 256; i++) {
    //     count[i] = 0;
    // }
    // let i;
    // for (i = 0; i < s.length; i++) {
    //     count[s[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
    //     count[t[i].charCodeAt(0) - 'a'.charCodeAt(0)]--;
    // }
    // for (i = 0; i < 256; i++)
    //     if (count[i] != 0) {
    //         return false;
    //     }
    // return true;

//     //Method III

        let count1 = new Array(26);
        let count2 = new Array(26);
        if (s.length != t.length)
            return false;
        for (let i = 0; i < 26; i++) {
            count1[i] = 0;
            count2[i] = 0;
        }
        let i;
        for (i=0; i<s.length && i<t.length; i++) {
            count1[s[i].charCodeAt(0)]++;
            count2[s[i].charCodeAt(0)]++;
        }
        
        for (i=0; i<26; i++)
            if (count1[i] != count2[i])
                return false;
    return true;

}

console.log(validAngram(s, t))

