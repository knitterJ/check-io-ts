// This function should take a string as an input and return the count of vowels (a, e, i, o, u) in the string. The function should be case-insensitive.

const vowels = "aeiouAEIOU";

function countVowels(text: string): number {
    const myArray = text.split("");
    const countrVowel = myArray.reduce((count: number,char: string)=>{
      if(vowels.includes(char)){
        return count+1;
      } else {
        return count;
      }
    },0);
    return countrVowel;
}

console.log(countVowels("lwjfal"));
console.log(countVowels(""));
console.log(countVowels("AEIOU"));
