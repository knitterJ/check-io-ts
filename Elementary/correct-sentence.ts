// For the input of your function, you will be given one sentence. You have to return a corrected version, that starts with a capital letter and ends with a period (dot).
//  If a sentence already ends with a period (dot), then adding another one will be a mistake.
// Input: A string.
// Output: A string. 

function correctSentence(text: string): string {
    var newText = text.replace(text[0],text[0].toUpperCase());
      if(newText[newText.length-1] != '.'){
        newText += '.'
      }
      console.log(newText);
      return newText;
}

console.log(correctSentence('greetings, friends'));
console.log(correctSentence('Greetings, friends'));
console.log(correctSentence('Greetings, friends.'));