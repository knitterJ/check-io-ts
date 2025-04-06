// Your function should take a string as an input and convert all the first letters of the words in the string to uppercase,
// making the string a title case (other letters must be in lowercase).

function toTitleCase(sentence: string): string {
  return sentence
     .toLowerCase()
     .split(" ")
     .map(word => word.charAt(0).toUpperCase() + word.slice(1))
     .join(" ");
    }

console.log(toTitleCase("heWEFARGJlo world"));
console.log(toTitleCase("b C d"));
