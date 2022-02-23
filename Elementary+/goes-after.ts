// In a given word you need to check if one symbol goes right after another.
//
// Cases you should expect while solving this challenge:
//
//    If more than one symbol is in the list you should always count the first one
//    one of the symbols are not in the given word - your function should return False;
//    any symbol appears in a word more than once - use only the first one;
//    two symbols are the same - your function should return False;
//    the condition is case sensitive, which mease 'a' and 'A' are two different symbols.
//
//    Input: Three arguments. The first one is a given string, second is a symbol that shoud go first, and the third is a symbold that should go after the first one.
//
//   Output: A bool.

function goesAfter(word: string, first: string, second: string): boolean {
  if(word.indexOf(first)+1 == word.indexOf(second) && word.indexOf(first)!=-1){
     return true;
   } else return false;
}

console.log(goesAfter('world', 'l', 'd'));
console.log(goesAfter('world', 'w', 'r'));
console.log(goesAfter('world', 'l', 'o'));
console.log(goesAfter('panorama', 'a', 'n'));
console.log(goesAfter('list', 'l', 'o'));
console.log(goesAfter('', 'l', 'o'));
console.log(goesAfter('list', 'l', 'l'));
console.log(goesAfter('world', 'd', 'w'));
console.log(goesAfter('almaz', 'r', 'a')); // what if the first character doesn't exist and indexOf(first) returns -1?
console.log(goesAfter('Almaz','A', 'L'));
