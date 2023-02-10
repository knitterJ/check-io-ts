// This mission is the first one of the series. Here you should find the length of the longest substring that consists of the same letter. For example, line "aaabbcaaaa" contains four substrings with the same letters "aaa", "bb","c" and "aaaa". The last substring is the longest one, which makes it the answer.
//
// Input: A string.
// Output: An int.
//https://stackoverflow.com/questions/19480916/count-number-of-occurrences-for-each-char-in-a-string



function longRepeat(line: string): number {

  var nicearr = line.match(/(.)\1*/g);
  console.log(nicearr);
  var longest = nicearr.sort(function (a, b) {return b.length - a.length})[0];
  // console.log(longest);
  return longest.length;
}

console.log(longRepeat('sdsffffse'));
console.log(longRepeat('ddvvrwwwrggg'));
