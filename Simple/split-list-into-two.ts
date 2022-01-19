//  You have to split a given array into two arrays. If it has an odd amount of elements, then the first array should have more elements. If it has no elements, then two empty arrays should be returned.
//
// splitList([1, 2, 3, 4, 5, 6]) == [[1, 2, 3], [4, 5, 6]]
// splitList([1, 2, 3]) == [[1, 2], [3]]
// splitList([1, 2, 3, 4, 5]) == [[1, 2, 3], [4, 5]]
// splitList([1]) == [[1], []]
// splitList([]) == [[], []]


function splitList(values: number[]): number[][] {
  //In case of uneven number of elements, first array will have more elements.
  const pivot = Math.ceil(values.length / 2)
  var fpart = values.slice(0, pivot);
  var spart = values.slice(pivot);
  //Glueing two lists can be done by using third, global one.
  //This way, both arrays will be always returned (even if empty).
  var c = [];
  c.push(fpart);
  c.push(spart);
  return c;
}

console.log(splitList([]));
