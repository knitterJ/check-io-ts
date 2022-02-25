// Let's continue examining words. You are given two string with words separated by commas. Try to find what is common between these strings. The words are not repeated in the same string.
//
// Your function should find all of the words that appear in both strings. The result must be represented as a string of words separated by commas in alphabetic order.
//
// Input: Two arguments as strings.
// Output: The common words as a string.

function commonWords(line1: string, line2: string): string {
  var line1arr = line1.split(",");
  var line2arr = line2.split(",");
  var fresh = [];

  for (let i = 0; i <= line1arr.length; i++) {
    for (let y = 0; y <= line2arr.length; y++) {
      if (line1arr[i] == line2arr[y]) {
        fresh.push(line1arr[i]);
      }
    }
  }
  // console.log(fresh);

  return fresh.filter((elem) => elem !== undefined).sort().toString();
}

console.log(commonWords("hello,world", "hello,earth"));
console.log(commonWords("one,two,three", "four,five,six"));
console.log(commonWords("one,two,three", "four,five,one,two,six,three"));
