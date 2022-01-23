// You are given a string where you have to find its first word.
// When solving a task pay attention to the following points:

//     -There can be dots and commas in a string.
//     -A string can start with a letter or, for example, a dot or space.
//     -A word can contain an apostrophe and it's a part of a word.
//     -The whole text can be represented with one word and that's it.

// Input: A string.
// Output: A string.

function firstWord(text: string): string {
    var textModified = text.replace(/[^A-Za-z0-9]/g,' ').trim().split(" ")[0];
  
    return textModified;
}

console.log(firstWord("%%%'''''         Hello world"));
console.log(firstWord("... and so on ..."));
