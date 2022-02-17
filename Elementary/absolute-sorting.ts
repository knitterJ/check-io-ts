// The array has various numbers. You should sort it, but sort it by absolute value in ascending order. For example, the sequence (-20, -5, 10, 15) will be sorted like so: (-5, 10, 15, -20). Your function should return the sorted list .
//
// Precondition: The numbers in the array are unique by their absolute values.
// Input: An array of numbers.
// Output: The list or tuple (but not a generator) sorted by absolute values in ascending order.

function absoluteSorting(values: number[]): number[] {

    //"Cover" the real value, while comparing the elements, by using Math.abs()
    var sortedValues = values.sort(function(a, b){
      console.log("a = " + Math.abs(a) + ", b = " + Math.abs(b) );
      return Math.abs(a) - Math.abs(b)});
    return sortedValues;
}

console.log(absoluteSorting([-20, -5, 10, 15]));
console.log(absoluteSorting([1, 2, 3, 0]));
console.log(absoluteSorting([-1, -2, -3, 0]));
