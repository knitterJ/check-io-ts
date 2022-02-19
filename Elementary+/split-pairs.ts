// Split the string into pairs of two characters. If the string contains an odd number of characters, then the missing second character of the final pair should be replaced with an underscore ('_').
// Input: A string.
// Output: An array of strings.

//match() in its simplest form doesnt yield any relevant results.
//But when it's used with REGEXP it starts becoming powerful tool which edits the array with a particular pattern

function splitPairs(text: string): string[] {
  return (text + "_").match(/(..)/g) || [];
}

console.log(splitPairs("abcdefghi"));
console.log(splitPairs("abc"));
console.log(splitPairs("abcdf"));
console.log(splitPairs("a"));
console.log(splitPairs(""));
