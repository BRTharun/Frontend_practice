// valid parantesis
// function isValidParentheses(S) {
//     const s = [];
//     const o = new Set(["(", "{", "["]);
//     const m = {
//         "(": ")",
//         "{": "}",
//         "[": "]",
//     };
//     for (let c of S) {
//         if (o.has(c)) {
//             s.push(c);
//         } else {
//             if (s.length === 0 || m[s.pop()] !== c) {
//                 return false;
//             }
//         }
//     }
//     return s.length === 0;
// }

// console.log(isValidParentheses("({)"));

//shift zeros to right

// function shiftRight(arr) {
//     let idx = 0;
//     arr.map((ele, i) => {
//         if (ele !== 0) {
//             arr[idx] = arr[i];
//             idx++;
//         }
//     });
//     while (idx < arr.length) {
//         arr[idx] = 0;
//         idx++;
//     }
//     return arr;
// }

// const arr = [1, 2, 0, 8, 0, 9];
// console.log(shiftRight(arr));

//shift zeros to left

// function shiftLeft(arr){
//     const l = arr.length-1;
//     let idx = arr.length-1;
//     arr.forEach((e,i)=>{
//         if(arr[l-i]!==0){
//             arr[idx]=arr[l-i];
//             idx--;
//         }
//     })
//     while(idx>0){
//         arr[idx]=0;
//         idx--;
//     }
//     return arr;
// }

// const arr = [0,8,2,0,1,3];
// console.log(shiftLeft(arr));

//right rotation
// function leftRotation(arr,pos){
//     const er = pos%arr.length;
//     return arr.slice(er).concat(arr.slice(0,er));
// }

// const arr = [1,2,3,4,5];
// console.log(leftRotation(arr,3));

//right rotation
// function rightRotation(arr,pos){

//     const er = pos%arr.length;
//     return arr.slice(er-1).concat(arr.slice(0,er-1))
// }

// const arr =[1,2,3,4,5];

// console.log(rightRotation(arr,3));

//remove duplicates
// function removeDup(arr){
//     return arr.reduce((res,cur)=>{
//         return res.includes(cur)?res:[...res,cur]
//     },[])

// }

// function removeDup(arr) {
//     return Array.from(new Set(arr));
// }

// const arr = [1,2,2,3,4,2];
// console.log(removeDup(arr));

//most repeatative element
// function mostRep(arr){
//     const hm= {}
//     let mre=null
//     arr.forEach(e => {
//        if(hm[e]===undefined) hm[e]=1;
//        hm[e]+=1;
//        if(hm[e]>mre) mre= e;
//     });
//     return mre;
// }

// const arr=[1,2,3,4,2,4,2,2];
// console.log(mostRep(arr));

//insert at postition
// function insAtPos (arr,pos,ele){
//     const s =arr.slice(0,pos-1);
//     s.push(ele);
//     return s.concat(arr.slice(pos-1))

// }

// const arr=[1,2,3,4,5];
// const pos =3;
// const ele=9
// console.log(insAtPos(arr,pos,ele))

//remove element from position

// function removeEle(arr,pos){
//     const s = arr.slice(0,pos-1);
//     return s.concat(arr.slice(pos))
// }

// const arr = [1,2,3,4,5];
// console.log(removeEle(arr,3));

//odd ,even,prime count

// function isPrime(e){
//     if(e<=1) return false;
//     if(e===2) return true;
//     if(!(e%2)) return false;
//     for(let i = 3; i<=Math.sqrt(e);i+=2 ) if(!(e%i)) return false;
//     return true;
// }

// function custom(arr){
//     let oc=0;
//     let ec=0;
//     let pc=0;
//     arr.forEach(e=>{
//         if(e%2==0) ec++;
//         else oc++;

//         if(isPrime(e)) pc++;
//     })
//     return {oc,ec,pc}
// }

// console.log(custom([1,2,4,25,97]));

// let readLine = require("readline-sync");
// function printCustom(str, safe, id) {
//     const arr = [];
//     for (let i = 0; i < str.length; i++) {
//         for (let j = i; j < str.length; j++) {
//             const sub = str.substr(i, j);
//             arr.push(sub);
//         }
//     }
//     let coun = 0;
//     for (let l in safe) {
//         arr.filter((e) => {
//             const c = e.split(l).length - 1;
//             console.log;
//             coun += c;
//             return coun < id;
//         });
//         return arr;
//     }
// }

// let str = readLine.question();
// let safe = readLine.question();
// let id = readLine.question();
// console.log(printCustom(str, safe, id));

// let m =  [[1, 2, 3, 4],
// [5, 6, 7, 8],
// [9, 10, 11, 12],
// [13, 14, 15,16]];

// let a =0;
// let d=0;
// let b =m.length-1;
// let c =m[0].length -1

// while(d<b){
//     console.log(m[a][d])
//     d+=1;
// }
// while(a<c){
//     console.log(m[a][d]);
//     a+=1;
// }
// while(d>=0){
//     console.log(m[a][d]);
//     d-=1;
// }
// d=0
// while(a>0) {
//     console.log(m[a][d]);
//     a-=1;
// }
// a+=1;
// while(d<b){
//     console.log(m[a][d]);
//     d+=1;
// }
// d-=1
// while(a<c){
//     console.log(m[a][d]);
//     a+=1;
// }
// a-=1
// while(d>1){
//     console.log(m[a][d]);
//     d-=1;
// }

// for(let i = 0; i<m.length;i++){
//     for(let j = 0;j<m[0].length;j++){
//        row+=m[i][j]+' ';
//     }
//     console.log(row);
// }
// function fu(str) {
//     const f=[];
//     for(let i=0;i<str.length;i++){
//         for(let j=i;j<str.length;j++){
//             const sub = str.substr(i,j);
//             f.push(sub);
//         }
//     }
//     const hp = {};
//     f.forEach(x=>{
//         if(hp[x]===undefined) hp[x]={}
//         const hp1={}
//         for(l of x){
//             if(hp1[l]===undefined) hp1[l]=0
//             hp1[l]+=1
//         }
//         hp[x]=hp1;
//     })
//     return hp;
// }

// const str = 'ababbc';
// console.log(fu(str));\

// function cus(arr){
//     const m =Math.max(...arr);
//     const min = Math.min(...arr);
//     const av=Math.floor((m+min)/2);
//     let cc =0
//     arr.forEach(x=>{
//         if(Math.abs(x-av)>0) cc+=Math.abs(x-av);
//     })
//     return cc;
// }

// A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.

// For example, number 9 has binary representation 1001 and contains a binary gap of length 2. The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3. The number 20 has binary representation 10100 and contains one binary gap of length 1. The number 15 has binary representation 1111 and has no binary gaps. The number 32 has binary representation 100000 and has no binary gaps.

// Write a function:

// function solution(N);

// that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.

// For example, given N = 1041 the function should return 5, because N has binary representation 10000010001 and so its longest binary gap is of length 5. Given N = 32 the function should return 0, because N has binary representation '100000' and thus no binary gaps.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..2,147,483,647].

// function bina(N){
//     const  bs = N.toString(2).replace(/^0+|0+$/,'');
//     const gaps = bs.split('1');
//     return gaps.length<2?0:Math.max(...gaps.map(gap=>gap.length));
// }

// const readLine=require("readline-sync");
// let n=Number(readLine.question());
// console.log(bina(n));

//console.log(('00000'.replace(/^0+|0+$/g,'').split('1')));

// A non-empty array A consisting of N integers is given. The array contains an odd number of elements, and each element of the array can be paired with another element that has the same value, except for one element that is left unpaired.

// For example, in array A such that:

//   A[0] = 9  A[1] = 3  A[2] = 9
//   A[3] = 3  A[4] = 9  A[5] = 7
//   A[6] = 9
// the elements at indexes 0 and 2 have value 9,
// the elements at indexes 1 and 3 have value 3,
// the elements at indexes 4 and 6 have value 9,
// the element at index 5 has value 7 and is unpaired.
// Write a function:

// class Solution { public int solution(int[] A); }

// that, given an array A consisting of N integers fulfilling the above conditions, returns the value of the unpaired element.

// For example, given array A such that:

//   A[0] = 9  A[1] = 3  A[2] = 9
//   A[3] = 3  A[4] = 9  A[5] = 7
//   A[6] = 9
// the function should return 7, as explained in the example above.

// Write an efficient algorithm for the following assumptions:

// N is an odd integer within the range [1..1,000,000];
// each element of array A is an integer within the range [1..1,000,000,000];
// all but one of the values in A occur an even number of times.

// function isO(arr){
//     let hm = new Map();
//     arr.forEach(x=>{
//         if(!hm.has(x)) hm.set(x,0);
//         hm.set(x,hm.get(x)+1);
//     })
//     // return hm;
//     let kv = 0;
//     for (let [key, value] of hm) {
//         if (value % 2 === 1) { // Check if the count is odd
//             return key; // Return the unpaired element
//         }
//     }
// }

// const readLine=require("readline-sync");
// let arr=readLine.question().split(' ');
// console.log(isO(arr));

// function checkEqual(arr) {
//     arr.sort((a, b) => a - b); // Sort the array in ascending order
//     const median = arr[Math.floor(arr.length / 2)]; // Find the median
//     let operations = 0; // Initialize operations counter

//     // Calculate the total operations to equal all elements to the median
//     for (let num of arr) {
//         operations += Math.abs(num - median); // Corrected syntax: replaced 'median' with '- median'
//     }

//     return operations; // Return the total number of operations
// }

// const arr = [1,3,5,9,9,9];
// console.log(checkEqual(arr)); // Call the function and log the result

// function solution(A) {
//     // Implement your solution here
//     let ts = A.reduce((a,v)=>a+v,0);
//     let ls = 0;
//     let md = Infinity;
//     for(let p =0; p<A.length-1;p++){
//         ls+=A[p];
//         const rs=ts-ls;
//         const d = Math.abs(ls-rs)
//         if(d<md) md =d;
//     }
//     return md;
// }

// const rl = require('readline-sync')
// const A =rl.question().split(' ').map(Number);
// console.log(solution(A));

// A small frog wants to get to the other side of a river. The frog is initially located on one bank of the river (position 0) and wants to get to the opposite bank (position X+1). Leaves fall from a tree onto the surface of the river.

// You are given an array A consisting of N integers representing the falling leaves. A[K] represents the position where one leaf falls at time K, measured in seconds.

// The goal is to find the earliest time when the frog can jump to the other side of the river. The frog can cross only when leaves appear at every position across the river from 1 to X (that is, we want to find the earliest moment when all the positions from 1 to X are covered by leaves). You may assume that the speed of the current in the river is negligibly small, i.e. the leaves do not change their positions once they fall in the river.

// For example, you are given integer X = 5 and array A such that:

//   A[0] = 1
//   A[1] = 3
//   A[2] = 1
//   A[3] = 4
//   A[4] = 2
//   A[5] = 3
//   A[6] = 5
//   A[7] = 4
// In second 6, a leaf falls into position 5. This is the earliest time when leaves appear in every position across the river.

// Write a function:

// function solution(X, A);

// that, given a non-empty array A consisting of N integers and integer X, returns the earliest time when the frog can jump to the other side of the river.

// If the frog is never able to jump to the other side of the river, the function should return −1.

// For example, given X = 5 and array A such that:

//   A[0] = 1
//   A[1] = 3
//   A[2] = 1
//   A[3] = 4
//   A[4] = 2
//   A[5] = 3
//   A[6] = 5
//   A[7] = 4
// the function should return 6, as explained above.

// Write an efficient algorithm for the following assumptions:

// N and X are integers within the range [1..100,000];
// each element of array A is an integer within the range [1..X].

// function solution(X,A){
//     let s = new Set();
//     for(let i =0;i<A.length;i++){
//         let pos = A[i];
//         if(pos<=X){
//             s.add(pos);
//         }
//         if(s.size === X) {
//             return i;
//         }
//     }
//     return -1;
// }

// const arr =[1,3,1,4,2,3,5,4]
// console.log(solution(5,arr));

// A non-empty array A consisting of N integers is given.

// A permutation is a sequence containing each element from 1 to N once, and only once.

// For example, array A such that:

//     A[0] = 4
//     A[1] = 1
//     A[2] = 3
//     A[3] = 2
// is a permutation, but array A such that:

//     A[0] = 4
//     A[1] = 1
//     A[2] = 3
// is not a permutation, because value 2 is missing.

// The goal is to check whether array A is a permutation.

// Write a function:

// function solution(A);

// that, given an array A, returns 1 if array A is a permutation and 0 if it is not.

// For example, given array A such that:

//     A[0] = 4
//     A[1] = 1
//     A[2] = 3
//     A[3] = 2
// the function should return 1.

// Given array A such that:

//     A[0] = 4
//     A[1] = 1
//     A[2] = 3
// the function should return 0.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [1..1,000,000,000].

// function solution(A) {
//     // Implement your solution here
//     let s = new Set();
//     for(let i =0;i<A.length;i++){
//         let num = A[i];

//         if(num<1||num>A.length||s.has(num)) return 0;
//         s.add(num);
//     }
//     return s.size===A.length?1:0;
// }

// const nl = require('readline-sync');
// const n = nl.question().split(' ').map(Number);
// console.log(solution(n));

// You are given N counters, initially set to 0, and you have two possible operations on them:

// increase(X) − counter X is increased by 1,
// max counter − all counters are set to the maximum value of any counter.
// A non-empty array A of M integers is given. This array represents consecutive operations:

// if A[K] = X, such that 1 ≤ X ≤ N, then operation K is increase(X),
// if A[K] = N + 1 then operation K is max counter.
// For example, given integer N = 5 and array A such that:

//     A[0] = 3
//     A[1] = 4
//     A[2] = 4
//     A[3] = 6
//     A[4] = 1
//     A[5] = 4
//     A[6] = 4
// the values of the counters after each consecutive operation will be:

//     (0, 0, 1, 0, 0)
//     (0, 0, 1, 1, 0)
//     (0, 0, 1, 2, 0)
//     (2, 2, 2, 2, 2)
//     (3, 2, 2, 2, 2)
//     (3, 2, 2, 3, 2)
//     (3, 2, 2, 4, 2)
// The goal is to calculate the value of every counter after all operations.

// Write a function:

// class Solution { public int[] solution(int N, int[] A); }

// that, given an integer N and a non-empty array A consisting of M integers, returns a sequence of integers representing the values of the counters.

// Result array should be returned as an array of integers.

// For example, given:

//     A[0] = 3
//     A[1] = 4
//     A[2] = 4
//     A[3] = 6
//     A[4] = 1
//     A[5] = 4
//     A[6] = 4
// the function should return [3, 2, 2, 4, 2], as explained above.

// Write an efficient algorithm for the following assumptions:

// N and M are integers within the range [1..100,000];
// each element of array A is an integer within the range [1..N + 1].
// 3 4 4 6 1 4 4
// function solution(N,A) {
//     const arr = new Array(N).fill(0);
//     const m = 0;
//     A.forEach((e)=>{
//         if(e>N) arr.fill(m);
//         else arr[e-1]+=1;
//         m<arr[e-1]?m=arr[e-1]:m=m;
//     })
//     return arr;
// }

// const nl = require('readline-sync');
// const arr = nl.question().split(' ').map(Number);
// console.log(solution(5,arr));

// This is a demo task.

// Write a function:

// class Solution { public int solution(int[] A); }

// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

// Given A = [1, 2, 3], the function should return 4.

// Given A = [−1, −3], the function should return 1.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].

// function solution(arr){

//     const a = new Array(Math.max(...arr)+1).fill(0);
//     arr.forEach(x=>{
//         if(x>0)a[x]+=1;
//     })
//     a.shift();
//     for(let i =0;i<a.length;i++){
//         if(a[i]===0){
//             return i+1;
//         }
//     }
//     if(a.length===0) return 1;
// }

// const nl = require('readline-sync');
// const arr = nl.question().split(' ').map(Number);
// console.log(solution(arr));

// Function to calculate prefix sums
// function prefixSums(A) {
//     const n = A.length;
//     const P = Array(n + 1).fill(0);  // Initialize the prefix sum array with zeros
//     for (let k = 1; k <= n; k++) {
//         P[k] = P[k - 1] + A[k - 1];  // P[k] = sum of first k elements of A
//     }
//     return P;
// }

// // Function to calculate total mushrooms between positions x and y using prefix sums
// function countTotal(P, x, y) {
//     return P[y + 1] - P[x];  // Calculate total mushrooms between indices x and y
// }

// // Main function to calculate the maximum mushrooms the picker can collect
// function mushrooms(A, k, m) {
//     const n = A.length;
//     let result = 0;  // To store the maximum mushrooms collected
//     const pref = prefixSums(A);  // Get prefix sums

//     // Case 1: Move left first, then right
//     for (let p = 0; p <= Math.min(m, k); p++) {
//         const left_pos = k - p;
//         const right_pos = Math.min(n - 1, k + (m - 2 * p));
//         result = Math.max(result, countTotal(pref, left_pos, right_pos));
//     }

//     // Case 2: Move right first, then left
//     for (let p = 0; p <= Math.min(m, n - k - 1); p++) {
//         const right_pos = k + p;
//         const left_pos = Math.max(0, k - (m - 2 * p));
//         result = Math.max(result, countTotal(pref, left_pos, right_pos));
//     }

//     return result;
// }

// // Example usage:
// const A = [2, 3, 7, 5, 1, 3, 9];
// const k = 4;  // Starting position
// const m = 6;  // Number of moves

// // Calculate the maximum mushrooms collected
// const result = mushrooms(A, k, m);
// console.log(result);  // Output: 25

// 2375139
// k=4,p=0
// lp=4
// rp=min(7-1,5+(6-2*0))=6

// 01011

// 1. PassingCars
// Count the number of passing cars on the road.
// Task Score
// 100%
// Correctness
// 100%
// Performance
// 100%
// Task description
// A non-empty array A consisting of N integers is given. The consecutive elements of array A represent consecutive cars on a road.

// Array A contains only 0s and/or 1s:

// 0 represents a car traveling east,
// 1 represents a car traveling west.
// The goal is to count passing cars. We say that a pair of cars (P, Q), where 0 ≤ P < Q < N, is passing when P is traveling to the east and Q is traveling to the west.

// For example, consider array A such that:

//   A[0] = 0
//   A[1] = 1
//   A[2] = 0
//   A[3] = 1
//   A[4] = 1
// We have five pairs of passing cars: (0, 1), (0, 3), (0, 4), (2, 3), (2, 4).

// Write a function:

// function solution(A);

// that, given a non-empty array A of N integers, returns the number of pairs of passing cars.

// The function should return −1 if the number of pairs of passing cars exceeds 1,000,000,000.

// For example, given:

//   A[0] = 0
//   A[1] = 1
//   A[2] = 0
//   A[3] = 1
//   A[4] = 1
// the function should return 5, as explained above.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..100,000];
// each element of array A is an integer that can have one of the following values: 0, 1.
// Copyright 2009–2024 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// function solution(A) {
//     // Implement your solution here
//     let eastCar =0;
//     let seen =0
//     for(let i =0;i<A.length;i++){
//         if(A[i]===0){
//             eastCar++;
//         } else{
//             seen+=eastCar;
//         }
//         if(seen>1000000000) return -1;
//     }
//     return seen;
// }

// CountDiv
// Compute number of integers divisible by k in range [a..b].
// Task Score
// 100%
// Correctness
// 100%
// Performance
// 100%
// Task description
// Write a function:

// function solution(A, B, K);

// that, given three integers A, B and K, returns the number of integers within the range [A..B] that are divisible by K, i.e.:

// { i : A ≤ i ≤ B, i mod K = 0 }

// For example, for A = 6, B = 11 and K = 2, your function should return 3, because there are three numbers divisible by 2 within the range [6..11], namely 6, 8 and 10.

// Write an efficient algorithm for the following assumptions:

// A and B are integers within the range [0..2,000,000,000];
// K is an integer within the range [1..2,000,000,000];
// A ≤ B.

// function solution(A, B, K) {
//     // Implement your solution here
//     const Adiv = Math.floor((A-1)/K);
//     const Bdiv = Math.floor(B/K);
//     return Bdiv-Adiv;
// }'

// A DNA sequence can be represented as a string consisting of the letters A, C, G and T, which correspond to the types of successive nucleotides in the sequence. Each nucleotide has an impact factor, which is an integer. Nucleotides of types A, C, G and T have impact factors of 1, 2, 3 and 4, respectively. You are going to answer several queries of the form: What is the minimal impact factor of nucleotides contained in a particular part of the given DNA sequence?

// The DNA sequence is given as a non-empty string S = S[0]S[1]...S[N-1] consisting of N characters. There are M queries, which are given in non-empty arrays P and Q, each consisting of M integers. The K-th query (0 ≤ K < M) requires you to find the minimal impact factor of nucleotides contained in the DNA sequence between positions P[K] and Q[K] (inclusive).

// For example, consider string S = CAGCCTA and arrays P, Q such that:

//     P[0] = 2    Q[0] = 4
//     P[1] = 5    Q[1] = 5
//     P[2] = 0    Q[2] = 6
// The answers to these M = 3 queries are as follows:

// The part of the DNA between positions 2 and 4 contains nucleotides G and C (twice), whose impact factors are 3 and 2 respectively, so the answer is 2.
// The part between positions 5 and 5 contains a single nucleotide T, whose impact factor is 4, so the answer is 4.
// The part between positions 0 and 6 (the whole string) contains all nucleotides, in particular nucleotide A whose impact factor is 1, so the answer is 1.
// Write a function:

// function solution(S, P, Q);

// that, given a non-empty string S consisting of N characters and two non-empty arrays P and Q consisting of M integers, returns an array consisting of M integers specifying the consecutive answers to all queries.

// Result array should be returned as an array of integers.

// For example, given the string S = CAGCCTA and arrays P, Q such that:

//     P[0] = 2    Q[0] = 4
//     P[1] = 5    Q[1] = 5
//     P[2] = 0    Q[2] = 6
// the function should return the values [2, 4, 1], as explained above.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..100,000];
// M is an integer within the range [1..50,000];
// each element of arrays P and Q is an integer within the range [0..N - 1];
// P[K] ≤ Q[K], where 0 ≤ K < M;
// string S consists only of upper-case English letters A, C, G, T.

// class Solution {
//     solution(S, P, Q) {
//         const N = S.length;
//         const M = P.length;

//         // Initialize prefix sum arrays for A, C, G, T
//         const prefixA = new Array(N + 1).fill(0);
//         const prefixC = new Array(N + 1).fill(0);
//         const prefixG = new Array(N + 1).fill(0);
//         const prefixT = new Array(N + 1).fill(0);

//         // Fill prefix sum arrays
//         for (let i = 0; i < N; i++) {
//             prefixA[i + 1] = prefixA[i] + (S[i] === 'A' ? 1 : 0);
//             prefixC[i + 1] = prefixC[i] + (S[i] === 'C' ? 1 : 0);
//             prefixG[i + 1] = prefixG[i] + (S[i] === 'G' ? 1 : 0);
//             prefixT[i + 1] = prefixT[i] + (S[i] === 'T' ? 1 : 0);
//         }

//         console.log(prefixA,prefixC,prefixG,prefixT)
//         const result = new Array(M);

//         // Process each query
//         for (let k = 0; k < M; k++) {
//             const start = P[k];
//             const end = Q[k] + 1; // +1 because we need inclusive ranges in the prefix sum

//             // Check for minimal nucleotide in the range
//             if (prefixA[end] - prefixA[start] > 0) {
//                 result[k] = 1;
//             } else if (prefixC[end] - prefixC[start] > 0) {
//                 result[k] = 2;
//             } else if (prefixG[end] - prefixG[start] > 0) {
//                 result[k] = 3;
//             } else {
//                 result[k] = 4; // If T is found
//             }
//         }

//         return result;
//     }
// }

// // Example usage:
// const sol = new Solution();
// const S = "CAGCCTA";
// const P = [2, 5, 0];
// const Q = [4, 5, 6];
// console.log(sol.solution(S, P, Q)); // Output: [2, 4, 1]

// function add(a) {

//     return function(b) {

//        return b ? add(a + b) : a;

//     }

//    }

//    console.log(add(1)(2)(3)())
//    4225158
//    46813141926

// function f(arr,iteratee){
//     const v = arr.map(iteratee).filter(x=>x!==undefined);
//   console.log(v);

//   const minV = v.sort();
//   console.log(minV[0]);
//   console.log(iteratee(arr[0]));
//   return minV.length?arr.find(x=>iteratee(x)===minV[0]):undefined;
// }

// const o =([{a:1,},{a:2}],(o)=>o.a)
// console.log(f([{a:1,},{a:2}],(o)=>o.n));

// function solution(A) {
//     const m = new Map();
//     A.forEach(x=>{
//         if(!m.has(x)) m.set(x,0);
//         m.set(x,m.get(x)+1);
//     });
//     return m.size;
// }

// function merge(l,r){
//     let f =[],li=0,ri=0;
//     while(li<l.length && ri<r.length) {
//         if(l[li]<r[ri]){
//             f.push(l[li]);
//             li++;
//         } else {
//             f.push(r[ri]);
//             ri++;
//         }
//     }
//     return f.concat(l.slice(li)).concat(r.slice(ri));
// }

// function sortArray(A){
//     const n = A.length;
//     if(n<2){
//         return A;
//     }
//     const m = Math.floor(n/2);
//     const l = A.slice(0,m);
//     const r= A.slice(m);
//     return merge(sortArray(l),sortArray(r))
// }

// function solution(A) {
//     // Implement your solution here
//     const s = sortArray(A);
//     console.log(s);
//     for(let i = 2;i<A.length;i++){
//         const a = s[i-2],b =s[i-1],c=s[i];
//         console.log(a,b,c);
//         if((a+b)>c) return 1;
//     }
//     console.log(s);
//     return 0;
// }

// function merge(l,r){
//     const final =[];
//     let li =0;
//     let ri=0;
//     while(li<l.length&& ri<r.length) {
//         if(l[li]<r[ri]) {
//             final.push(l[li]);
//             li++;
//         } else{
//             final.push(r[ri]);
//             ri++;
//         }
//     }
//     return final.concat(l.slice(li)).concat(r.slice(ri));
// }

// function mergeSort(A){
//     const n = A.length;
//     if(n<2){
//         return A;
//     }
//     const m = Math.floor(n/2);
//     const l = A.slice(0,m);
//     const r = A.slice(m);
//     return merge(mergeSort(l),mergeSort(r));
// }

// function solution(A) {
//     // Implement your solution here
//     const f = mergeSort(A);
//     f.reverse();
//     let p =-Infinity;
//     console.log(f);
//     for(let i =0;i<=f.length-3;i++){
//         let a = f[i],b=f[i+1],c=f[i+2];
//         console.log(a,b,c);
//         if((a*b*c)>p){
//             console.log((a*b*c));
//             p= (a*b*c);
//         };
//     }
//     return p;

// }
// console.log(solution( [-5, 5, -5, 4]));

// function solution(S) {
//     // Implement your solution here
//     const st = [];
//     const o = new Set(['(','[','{']);
//     const s = {
//         '[':']',
//         '{':'}',
//         '(':')'
//     }
//     for(let c of S) {
//         if(o.has(c)) st.push(c);

//         else {
//             if(st.length===0 ||s[st.pop()]!==c) return 0
//         }
//         console.log(st);
//     }
//     return st.length===0;
// }

// console.log(solution('()'));

// You are given two non-empty arrays A and B consisting of N integers. Arrays A and B represent N voracious fish in a river, ordered downstream along the flow of the river.

// The fish are numbered from 0 to N − 1. If P and Q are two fish and P < Q, then fish P is initially upstream of fish Q. Initially, each fish has a unique position.

// Fish number P is represented by A[P] and B[P]. Array A contains the sizes of the fish. All its elements are unique. Array B contains the directions of the fish. It contains only 0s and/or 1s, where:

// 0 represents a fish flowing upstream,
// 1 represents a fish flowing downstream.
// If two fish move in opposite directions and there are no other (living) fish between them, they will eventually meet each other. Then only one fish can stay alive − the larger fish eats the smaller one. More precisely, we say that two fish P and Q meet each other when P < Q, B[P] = 1 and B[Q] = 0, and there are no living fish between them. After they meet:

// If A[P] > A[Q] then P eats Q, and P will still be flowing downstream,
// If A[Q] > A[P] then Q eats P, and Q will still be flowing upstream.
// We assume that all the fish are flowing at the same speed. That is, fish moving in the same direction never meet. The goal is to calculate the number of fish that will stay alive.

// For example, consider arrays A and B such that:

//   A[0] = 4    B[0] = 0
//   A[1] = 3    B[1] = 1
//   A[2] = 2    B[2] = 0
//   A[3] = 1    B[3] = 0
//   A[4] = 5    B[4] = 0
// Initially all the fish are alive and all except fish number 1 are moving upstream. Fish number 1 meets fish number 2 and eats it, then it meets fish number 3 and eats it too. Finally, it meets fish number 4 and is eaten by it. The remaining two fish, number 0 and 4, never meet and therefore stay alive.

// Write a function:

// function solution(A, B);

// that, given two non-empty arrays A and B consisting of N integers, returns the number of fish that will stay alive.

// For example, given the arrays shown above, the function should return 2, as explained above.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [0..1,000,000,000];
// each element of array B is an integer that can have one of the following values: 0, 1;
// the elements of A are all distinct.

// function solution(a, b) {
//     const s = [];
//     const n = a.length;
//     let ac = 0;
//     for (let i = 0; i < n; i++) {
//         if (b[i] === 1) s.push(a[i]);
//         else {
//             let upalive = true;
//             while (s.length > 0) {
//                 const sl = s.length;
//                 const l = s[sl - 1];
//                 if (l > a[i]) {
//                     upalive = false;
//                     break;
//                 } else {
//                     s.pop();
//                 }
//             }
//             if (upalive) {
//                 ac++;
//             }
//         }
//     }
//     ac += s.length;
//     return ac;
// }

// console.log(solution([4, 3, 2, 1, 5], [0, 1, 0, 0, 0]));
// function solution(A) {
//     A.sort();
//     const n = A.length;
//     if (n < 1) return 0;
//     const a = new Array(n + 1).fill(0);
//     for (const num of A) {
//         a[num] += 1;
//     }
//     const d = [];
//     const un = [];
//     for (let num = 1; num <= n; num++) {
//         if (a[num] === 0) {
//             un.push(num);
//         } else if (a[num] > 1) {
//             for (let i = 0; i < a[num] - 1; i++) {
//                 d.push(num);
//             }
//         }
//     }
//     d.sort();
//     un.sort();
//     let m = 0;
//     for (const dup of d) {
//         if (un.length === 0) {
//             break;
//         }
//         const t = un.shift();
//         m += Math.abs(dup - t);
//         if (m > 1000000000) return -1;
//     }
//     return m;
// }

