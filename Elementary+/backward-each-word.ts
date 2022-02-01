// In a given string you should reverse every word, but the words should stay in their places.
// Input: A string.
// Output: A string. 

function backwardStringByWord(text: string): string {
    var text2 = ''
    for (let i = text.length -1; i >= 0; i--){
        text2 += text[i];
      }
      var textFinal = text2.split(' ').reverse().join(' ')
      console.log(textFinal);

      return textFinal;
}

console.log(backwardStringByWord(''));
console.log(backwardStringByWord('world'));
console.log(backwardStringByWord('hello world'));
console.log(backwardStringByWord('hello   world'));
console.log(backwardStringByWord('welcome to a game'));