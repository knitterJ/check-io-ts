// You have an array. Each value from that array can be either a string or an integer. Your task here is to return two values. The first one is a concatenation of all strings from the given array. The second one is a sum of all integers from the given array.
// Input: A list of strings and ints
// Output: An array

function sumByTypes(values: Array<number | string>): [string, number] {

  var arr1 = [];
  var arr2 = [];
  
  if (values == []) {
    return ["", 0];
  }


  for (let e of values) {
    if (typeof e == "string") arr1.push(e);
    else arr2.push(e);
  }

  const reducer = (accumulator: number, curr: number) => accumulator + curr;

  // console.log(arr1);
  // console.log(arr2);

  return [arr1.join(""), arr2.reduce(reducer, 0)];
}

console.log(sumByTypes([])); //['', 0])
console.log(sumByTypes([1, 2, 3])); // ['', 6]
console.log(sumByTypes(["1", 2, 3])); // ['1', 5]
console.log(sumByTypes(["1", "2", 3])); //['12', 3]
console.log(sumByTypes(["1", "2", "3"])); //['123', 0]
console.log(sumByTypes(["size", 12, "in", 45, 0])); //, ['sizein', 57]
