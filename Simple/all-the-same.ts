//  In this mission you should check if all elements in the given Array are equal.
//  Input: Array.
//  Output: Bool.

function allTheSame(elements: any[]): boolean {
  for (let e of elements) if (e != elements[0]) return false;
  return true;
}

console.log(allTheSame([1, 1, 1]));
console.log(allTheSame([1, 2, 1, 1]));
console.log(allTheSame(["a", "b", "a"]));
console.log(allTheSame([]));
console.log(allTheSame([1]));

// assert.equal(allTheSame([1, 1, 1]), true)
// assert.equal(allTheSame([1, 2, 1]), false)
// assert.equal(allTheSame(['a', 'a', 'a']), true)
// assert.equal(allTheSame([]), true)
// assert.equal(allTheSame([1]), true)
// console.log("Coding complete? Click 'Check' to earn cool rewards!");
