// You are given a non-empty list of integers (X). For this task, you should return a list consisting of only the non-unique elements in this list. To do so you will need to remove all unique elements (elements which are contained in a given list only once). When solving this task, do not change the order of the list. Example: [1, 2, 3, 1, 3] 1 and 3 non-unique elements and result will be [1, 3, 1, 3].

// Input: A list of integers.
// Output: An iterable of integers.

function nonUniqueElements(data){
    var count = data.reduce((o,v)=>{
o[v] = (o[v] || 0) +1 ;
return o;
},{});



return count;
// var duplicate = data.filter(k => count[k] > 1 )
// // console.log(duplicate);
// return duplicate;
}

console.log(nonUniqueElements([1, 2, 3, 1, 3]));
console.log(nonUniqueElements([1, 2, 3, 4, 5]));
console.log(nonUniqueElements([5, 5, 5, 5, 5]));
console.log(nonUniqueElements([10, 9, 10, 10, 9, 8]));
//
// function allTheSame(elements: any[]): boolean {
//   for(let e of elements) if (e!=elements[0]) return false;
//     return true;
// }
