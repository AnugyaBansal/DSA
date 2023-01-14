//====================Sliding Window All Question=================================//

// ===========Maximum sum of three consecutive numbers=========>
// bruteforce approach

// let arr=[23,34,6,2,43,89,9,3,2,7]
// let k=3

// function SumofConsucative(arr,k){

//     let maxsum=0
//     for(let i=0;i<arr.length;i++){
//         let sum =0
//         for(let j=i;j<i+k;j++){
//             sum=sum+arr[j]
//             if(sum>maxsum){
//                 maxsum=sum
//             }
//         }
//     }
//     return maxsum
// }
// console.log(SumofConsucative(arr,k))

// ===========max value of consucative no.==========>

// let arr=[23,34,6,2,43,89,9,3,2,7]
// // output=[34,34,43,89,89,89,9,7]
// let k=3

// function MaxNumOfConsucative(arr,k){

//     let MaxNumArr=[]
//     for(let i=0;i<arr.length-k+1;i++){
//         let max=0
//         for(let j=i;j<i+k;j++){
//             if(arr[j]>max){
//                 max=arr[j]
//             }
//         }
//         MaxNumArr.push(max)
//     }
//     return MaxNumArr
// }
// console.log(MaxNumOfConsucative(arr,k))


//===========find continuos subarray sum is equal the target============>


// function conSubarray(arr,target){

//     let sum=0
//     let j=0
//     let index=[]
//     for(let i=0;i<arr.length;i++){
//         let right=arr[i]
//         sum=sum +right

//         if(sum>target){
//             let left = arr[j]
//             sum=sum-left
//             j++
//         }
//         if(sum==target){
//             index.push([j,i])
//         }
//     }
//     return index
// }
// let arr=[1,8,3,5,5,5,5,6,4,8,9,2,4,4,5]
// let target=15
// console.log(conSubarray(arr,target))

// ===========Print continuos subarray element sum is equal the target=======>

// function PrintConsubArr(arr,target){

//     let sum=0
// let Subarr=[]
// let j=0

// for(let i=0;i<arr.length;i++){
//     let right =arr[i]
//     sum=sum+right
//     Subarr.push(arr[i])

//         if(sum>target){
//             let left =arr[j]
//             sum=sum-left
//             Subarr.splice(left)
//             j++
//         }
//         if(sum==target){
//             Subarr.slice(1)
//             return Subarr
//         }
//     }    
// }
// let arr=[1,8,3,5,5,6,0,4,8,9,10,5]
// let target=15
// console.log(PrintConsubArr(arr,target))

//========length of Largest substring with No repeating character==========

// function lengthOfLongestSubstringUniqCh(s){

//     if(!s) return 0
//     let start=0
//     let end=0
//     let set=new Set()
//     let maxlength=0

//     while(end<s.length){
//         if(!set.has(s[end])){
//             set.add(s[end])
//             end++
//             maxlength=Math.max(maxlength,set.size)
//         }else{
//             set.delete(s[start])
//             start++
//         }
//     }
//     return maxlength
// }

// let s="abcdabcbbacdefgt"
// console.log(lengthOfLongestSubstringUniqCh(s))

//========find subarray in an array which has mazximum sum========>

// function maxSubarrSum(arr){
//     let maxsum=0
//     for(let i=0;i<arr.length;i++){
//         for(let j=i;j<arr.length;j++){
//             let sum=0
//             for(let k=i;k<=j;k++){
//                 sum=sum+arr[k]
//             }
//             maxsum=Math.max(sum,maxsum)
//         }
//     }
//     return maxsum
// }

// let arr=[3,-1,4,7,2]
// console.log(maxSubarrSum(arr))

//=========================kadan algorithms=========>

// function maxSubarrSum(arr){

//     let currentSum=0
//     let maxSum=0
//     for(let i=0;i<arr.length;i++){
//         currentSum=currentSum+arr[i]
//         if(currentSum<0){
//             currentSum=0
//         }
//         maxSum=Math.max(maxSum,currentSum)
//     }
//     return maxSum
// }

// let arr=[8, -8, 9, -9, 10, -11, 12,-3,34]
// console.log(maxSubarrSum(arr))

//=========Maximum Circular subarray Sum=================>

// function kadan(arr){

//     let currentSum=0
//     let maxsum=0
//     for(let i=0;i<arr.length;i++){
//         currentSum=currentSum+arr[i]
//         if(currentSum<0){
//             currentSum=0
//         }
//         maxsum=Math.max(currentSum,maxsum)
//     }
//     return maxsum
// }
// function maxCircularSubArrSum(arr){
//     let wrapsum
//     let nonwrapsum

//     nonwrapsum=kadan(arr)
//     let totalsum=0
//     for(let i=0;i<arr.length;i++){
//         totalsum=totalsum+arr[i]
//         arr[i]=-arr[i]
//     }
//     wrapsum=totalsum+kadan(arr)
//     return Math.max(wrapsum,nonwrapsum)
// }

// let arr=[8, -8, 9, -9, 10, -11, 12]
// console.log(maxCircularSubArrSum(arr))

// =======pair of sum of index is same as target======>

// function findpair(arr,k){

//     for(let i=0;i<arr.length;i++){
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[i]+arr[j]==k){
//                 return [i,j]
//             }
//         }
//     }
// }

// let arr = [2, 4, 7, 11, 14, 16, 20, 21]
// let k = 31
// console.log(findpair(arr,k))

// =========if arr is sorted then use two pointer method===>

// function findpair(arr,k){
//     let low=0
//     let high=arr.length-1

//     while(low<high){
//         if(arr[low]+arr[high]==k){
//             return [low,high]
//         }
//         else if(arr[low]+arr[high]>k){
//             high--
//         }
//         else{
//             low++
//         }
//     }
//     return false
// }

// let arr = [2, 4, 7, 11, 14, 16, 20, 21]
// let k = 31

// console.log(findpair(arr,k))

//=======================Recursion All Question============================//

//============Sum upto nth nummebr

// function SumUptoNtNum(n){

//     if(n==1) return 1
//     return n+SumUptoNtNum(n-1)  
// }
// let n=5
// console.log(SumUptoNtNum(n))

// =============Factorial of N number

// function Factorial(n){

//     if(n==1)return 1
//     return n*Factorial(n-1)
// }
// let n=5
// console.log(Factorial(n))

// ===============Fibonacci number

// function fib(n){
//     // if(n==0 )return 1
//     if(n<=1) return n
//     return fib(n-1)+fib(n-2)
// }
// let n=9
// console.log(fib(n))

// ==============Product of evry Number 

// function getProduct(n){

//     let product=1
//     while(n != 0){
//         product=product*(n%10)
//         n=Math.floor(n/10)
//     }
//     return product
// }
// let n=12314
// console.log(getProduct(n))

// =============Reverse Sentece=================>

function reverse(str){
    if(str.length==0)return str
    return reverse(str.slice(1))+str[0]
}

function reversSentence(str){
    let arr=str.split(" ")
    for(let i=0;i<arr.length;i++){
        arr[i]=reverse(arr[i])
    }
    return arr.join(" ")
}
let str="i am backend developer"
console.log(reversSentence(str))
console.log(reverse(str))
// ====================>reverse a string usning recursion

// function reverse(str){
//     if(str.length==0)return str
//     return reverse(str.slice(1))+str[0]
// }
// let str='jaymatadi'
// console.log(reverse(str))

// ===========Add sum of array using recursion===========>

// function SumOfArr(arr,n){

//     if(n<1) return arr[0]
//     return arr[n]+SumOfArr(arr,n-1)
// }

// let arr=[0,1,2,3,4,5]
// let n=arr.length-1
// console.log(SumOfArr(arr,n))

// ========check if string is palindrome or not using recursion======>

// function Isplaindirom(str){
//     if(str.length<=1) return true
//     if(str.slice(-1)==str[0]) return Isplaindirom(str.slice(1,-1))
//     else return false
// }
// let str="rama la bob al amar"
// console.log(Isplaindirom(str))

// =========program to flattern array using recursion=======>

// function flatterarr(arr){
//     let flat=[]
//     for(let i=0;i<arr.length;i++){
//         if(Array.isArray(arr[i])){
//             flat=flat.concat(flatterarr(arr[i]))
//         }else{
//             flat.push(arr[i])
//         }
//     }
//     return flat
// }

// let arr=[1,2,[3,4,5],[6,7],[[8,[[[[9]]]],10]]]
// console.log(flatterarr(arr))

//==========sum of all element of flattern arr======>

// function SumOfelemOfFlattArr(arr){

//     let sum=0
//     for(let i=0;i<arr.length;i++){
//         if(Array.isArray(arr[i])){
//             console.log(sum)
//             sum=sum+SumOfelemOfFlattArr(arr[i])
//         }else{
//             sum=sum+arr[i]
//         }
//     }
//     return sum
// }
// let arr=[1,2,[3,4,5],[6,7],[[8,[[[[9]]]],10]]]
// // let arr=[1,2,3,[4,5,6,[11,12,13]]]
// console.log(SumOfelemOfFlattArr(arr))

//========>first letter capital using recursion============>

// function FirstLettCap(arr) {
//     let arr1 = []
//     for (let i = 0; i < arr.length; i++) {
//         arr1.push(arr[i][0].toUpperCase() + arr[i].slice(1))
//     }
//     return arr1
// }

// let arr = ["hi", "hello", "how"]
// console.log(FirstLettCap(arr))

// =======================Sorting all method=============================//

// ==========Bubble soting====================================>

// function bubbleSort(arr) {

//     for (let i = 0; i < arr.length-1; i++) {
//         let swap=false
//         for (let j = 0; j < arr.length-i; j++) {
//             if(arr[j]>arr[j+1]){
//             [arr[j],arr[j+1]]=[arr[j+1],arr[j]] 
//             swap=true     
//             }
//         }
//         if(swap==false) break
//     }
//     return arr
// }

// let arr = [12, 34, 2, 5, 87, 5, 54, 98, 64]
// console.log(bubbleSort(arr))

// =============selection sort================================>

// function selectionSort(arr){

//     for(let i=0;i<arr.length;i++){
//         let swap=false
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[i]>arr[j])
//             [arr[i],arr[j]]=[arr[j],arr[i]]
//             swap=true
//         }
//         if(swap==false) break
//     }
//     return arr
// }

// let arr=[75,36,2,7,98,57,65,3,0]
// console.log(selectionSort(arr))

// ==========insertion Sort==================================>

// function insertionSort(arr){
//      for(let right=1;right<arr.length;right++){
//         let curr=right

//         while(curr>=1 && arr[curr-1]>arr[curr]){
//             [arr[curr-1],arr[curr]]=[arr[curr],arr[curr-1]]
//             curr--
//         }
//      }
// }

// let arr=[9,8,7,6,5,4,3,2,1]

// insertionSort(arr)
// console.log(arr)

// =================Quick Search============================>

// function getcpOfpivot(arr,left,right){
//     let pivot=arr[right]
//     let cpofPivotSoFar=left-1

//     for(let i=left;i<right;i++){
//         if(pivot>arr[i]){
//             cpofPivotSoFar++
//             [arr[cpofPivotSoFar],arr[i]]=[arr[i],arr[cpofPivotSoFar]]
//         }
//     }
//     [arr[cpofPivotSoFar+1],arr[right]]=[arr[right],arr[cpofPivotSoFar+1]]
//     return cpofPivotSoFar+1
// }
// function QuickSort(arr,left,right){
//     if(left>=right) return 

//     let cpOfpivot=getcpOfpivot(arr,left,right)
//     QuickSort(arr,left,cpOfpivot-1)
//     QuickSort(arr,cpOfpivot+1,right)

// }

// let arr=[12,5,74,8,5,84,3,7,33,64,4]
// let left=0
// let right=arr.length-1
// QuickSort(arr,left,right)
// console.log(arr)


// ======================Merge Sort================>

// =======================Searching===========================>

// ===============Liner search================>

// function linearSearch(arr,key){

//     for(let i=0;i<arr.length;i++){
//         if(arr[i]==key) return true  
//     }
//     return false
// }
// let arr =[12,5,74,8,5,84,3,78,33,64,4]
// let key =33
// console.log(linearSearch(arr,key))

// ================Binary Search========================>

// function BinarySearch(arr,key){
//     let start=[0]
//     let end=arr.length-1
//     let mid=(start+end)/2

//     while(start<=end){
//         if(arr[mid]==key){
//             return true
//         }else if(key>arr[mid]){
//             start=mid+1
//         }else{
//            end= mid-1
//         }
//         mid=(start+end)/2
//     }
//     return false
// }
// let arr =[2,4,6,8,10,12,18]
// let key =1
// console.log(BinarySearch(arr,key))

// ================Binary Search with Recursion========================>

// function BinarySearch(arr,key,start,end){


//     if(start>end) return false
//     mid=Math.floor((start+end)/2)
//     if(arr[mid]==key) return true
//     else if(key>arr[mid]) return BinarySearch(arr,key,mid+1,end)
//     else if(key<arr[mid]) return BinarySearch(arr,key,start,mid-1)

// }
// let arr =[2,4,6,8,10,12,18]
// let key =88
// let start=0
// let end=arr.length-1
// console.log(BinarySearch(arr,key,start,end))

// ==========================Rotation Of array================>

// ==========left rotation==============>

// function leftRotation(arr,k){

//     let n =arr.length
//     let arr1=[]
//     for(let i=k;i<n+k;i++){
//         arr1.push(arr[i%n])
//     }
//     return arr1
// }

// let arr = [8, 3, 1, 2, 9, 7]
// let k=3
// console.log(leftRotation(arr,k))

// ==========rigth rotation==============>

// function rightRotation(arr,k){
//     let n=arr.length
//     let arr1=[]
//     for(let i=0;i<n;i++){
//         if(i<k){
//             arr1.push(arr[n+i-k])
//         }else{
//             arr1.push(arr[i-k])
//         }
//     }
//     return arr1
// }

// let arr = [8, 3, 1, 2, 9, 7]
// let k=2
// console.log(rightRotation(arr,k))

// ===============Frequency Count Question and Map wale Question==========>

// =======Remove duplicates from an array and return unique values in O(n) complexity.

// function RemovDupEle(arr){

//     let map=new Map()
//     for(let i=0;i<arr.length;i++){
//         if(map.get(arr[i])){
//             map.set((arr[i]),map.get(arr[i])+1)
//         }else{
//             map.set(arr[i],1)
//         }

//     }
//     let uni=[]
//     for(let pair of map){
//             uni.push(pair[0])
//         }
//     return uni
// }
// let arr = [1, 2, 3, 3, -5, 2,-11, 0, 9, 9, 0, 2]
// console.log(RemovDupEle(arr))

// ==========General Question=======================>

// =======Find highest and second highest number

// function highAndsecondHighNumber(arr){

//     let highNum=0
//     let secoHighNum=0
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>highNum){
//             secoHighNum=highNum
//             highNum=arr[i]
//         }else if(arr[i]>secoHighNum){
//             secoHighNum=arr[i]
//         }
//     }
//     return [highNum,secoHighNum]

// }

// let arr=[43,56,98,6,42,3,78,79,56,54,65,301]
// console.log(highAndsecondHighNumber(arr))

// =====Remove duplicates from an array and return unique values in O(n) complexity.

// function RemovDupEle(arr){

//     let set=new Set()
//     for(let i=0;i<arr.length;i++){
//         set.add(arr[i])
//     }
//     let arr1=Array.from(set)
//     return arr1
// }
// let  arr = [1, 2, 3, 3, -5, 2,-11, 0, 9, 9, 0, 2]
// console.log(RemovDupEle(arr))

// *Given three arrays sorted in increasing order. Find the elements that are common in all three arrays.
// Note: can you take care of the duplicates without using any additional Data Structure?

// Example 1:

// Input:
// let arr1 = [1, 5, 10, 20, 40, 80]
// let arr2 = [6, 7, 20, 80, 100]
// let arr3 = [3, 4, 15, 20, 30, 70, 80, 120]
// Output: 20 80
// Explanation: 20 and 80 are the only
// common elements in A, B and C.


// function findcommonElement(arr1, arr2, arr3) {


//     let i = 0, j = 0, k = 0
//     let n1 = arr1.length
//     let n2 = arr2.length
//     let n3 = arr3.length

//     let arr = []
//     while (i < n1 && j < n2 && k < n3) {
//         if (arr1[i] == arr2[j] && arr2[j] == arr3[k]) {
//             arr.push(arr1[i])
//             i++
//             j++
//             k++
//         } else if (arr1[i] < arr2[j]) {
//             i++
//         } else if (arr2[j] < arr3[k]) {
//             j++
//         } else {
//             k++
//         }
//     }
//     return arr
// }
// console.log(findcommonElement(arr1, arr2, arr3))

//========================  4sum========================

// function fourSum(arr, n, x) {

//     let map = new Map()
//     for (let i = 0; i < n; i++)
//         for (let j = i + 1; j < n; j++)
//             map.set(arr[i] + arr[j], [i, j])
//             console.log(map)

//     for (let i = 0; i < n; i++) {
//         for (let j = i + 1; j < n; j++) {
//             let sum = arr[i] + arr[j]
//             if (map.has(x - sum)) {
//               console.log(x-sum)
//                 let p = map.get(x - sum)

//                 if (p[0] != i && p[0] != j && p[1] != i && p[1] != j) {
//                    return ( [arr[i], arr[j], arr[p[0]], arr[p[1]]])

//                 }
//             }
//         }

//     }
// }

// let arr = [10, 20, 30, 40, 1, 2];
// let n = arr.length;
// let x = 91;
// console.log(fourSum(arr, n, x))

// ============sort negative as first and positive as last

// function SortNegAndPositive(arr) {


//     let j = 0
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < 0) {
//             if (i != j) {
//               [arr[i],arr[j]]=[arr[j],arr[i]]
//             }
//             j++
//         }
//     }
//     return arr
// }


// let arr = [12, -34, 10, -20, 30, -40, 1, 2]
// console.log(SortNegAndPositive(arr))

//  merge two sorted arry

// function mergTwiSortedarr(arr1, arr2, n1, n2, arr) {


//     let i = 0, j = 0

//     let mainArrind = 0
//     while (i < n1 && j < n2) {
//         if (arr1[i] < arr2[j]) {
//             arr[mainArrind++] = arr1[i]
//         } else {
//             arr[mainArrind++] = arr2[j]
//         }
//     }
//     console.log(arr[i])
//     while (i < n1) {
//         arr[mainArrind++] = arr1[i]
//     }
//     while (j < n2) {
//         arr[mainArrind++] = arr2[j]
//     }


// }

// let arr1 = [1, 3, 5, 7, 9]
// let arr2 = [2, 4, 6, 8]
// let n1 = arr1.length, n2 = arr2.length
// console.log(mergTwiSortedarr(arr1, arr2, n1, n2,))

// anagram==========================
// function isAnagram(str1, str2) {
//     if (str1.length != str2.length) return false
//     let obj = {}
//     for (let i of str1) {
//         obj[i] = (obj[i] || 0) + 1
//     }
//     for (let char of str2) {
//         if (!obj[char]) {
//             return false
//         } else {
//             obj[char]--
//         }
//     }
//     return true
// }
// let str1 = "madam"
// let str2 = "mamda"
// console.log(isAnagram(str1, str2))


