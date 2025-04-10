//  You are given a non-empty sequence of integers.
// For this task, you should return Array consisting of only the non-unique elements from the initial sequence.
// To do so you will need to remove all unique elements (elements which are contained in a given sequence only once).
// When solving this task, do not change the order of the elements.
// Example: in [1, 2, 3, 1, 3] elements 1, 3 are non-unique and result will be [1, 3, 1, 3].


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
