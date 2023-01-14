// //Length of the longest substring (sliding window)

let str = "geeksforgeeks"
function longest(str){
	let n = str.length;
	let ans =0;
	let lastIndex =new Array(256);
	lastIndex.fill(-1);
	// for(let i=0;i<256;i++){ lastIndex[i]=-1; }

	let s=0;
	for(let e=0;e<n;e++){ //Expanding
		s = Math.max(s,lastIndex[str[e].charCodeAt(0)]+1); //compressing
        ans = Math.max(ans,e-s+1); //updating answer
lastIndex[str[e].charCodeAt(0)]=e; 
}
	return ans;
}
console.log(longest(str))


// let str = "string"
// let isnotvalid = str + 'hey'
// str = isnotvalid;
// console.log(isnotvalid)
