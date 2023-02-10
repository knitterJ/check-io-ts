// You are given a string with words and numbers separated by whitespaces (one space). The words contains only letters. You should check if the string contains three words in succession. For example, the string "start 5 one two three 7 end" contains three words in succession.
// Input: A string with words.
// Output: The answer as a boolean. 

function threeWords(text: string): boolean {
    let count = 0;
   let inputStringToArray = text.split(" ");
   for(let i = 0; i<inputStringToArray.length -1 ; i++){
     if(inputStringToArray[i].match(/^[0-9]+$/) == null && inputStringToArray[i+1].match(/^[0-9]+$/) == null){
       count++;
     } else count = 0;
    if (count >= 2){
     return true;
    }
   }
   return false; 
 }

console.log(threeWords("Hello World hello"));
console.log(threeWords("He is 123 man"));
console.log(threeWords("1 2 3 4"));
console.log(threeWords("bla bla bla bla"));
console.log(threeWords("Hi"));