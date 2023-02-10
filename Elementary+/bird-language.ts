// The bird converts words by two rules:
//
//    - after each consonant letter the bird appends a random vowel letter (l ⇒ la or le);
//    - after each vowel letter the bird appends two of the same letter (a ⇒ aaa);
//
// Vowels letters == "aeiouy".
//
// You are given an ornithological phrase as several words which are separated by white-spaces (each pair of words by one whitespace). The bird does not know how to punctuate its phrases and only speaks words as letters. All words are given in lowercase. You should translate this phrase from the bird language to something more understandable.

// Input: A bird phrase as a string.
// Output: The translation as a string.

function translate(text: string): string {

  let consonants = "bcdfghjklmnpqrstvwxz";

  let arrayText = text.split("");
  for (let i = 0; i < arrayText.length; i++) {
    let currentLetter = arrayText[i];

    if (consonants.indexOf(currentLetter) != -1) {
      arrayText.splice(i + 1, 1);
      console.log(arrayText);
    } else {
      if (arrayText[i] !== " ") {
        arrayText.splice(i + 1, 2);
        console.log(arrayText);
      }
    }
  }
  return arrayText.join("");
}

console.log(translate("hiieeelalaooo")); //'hiello'
console.log(translate("hoooowe yyyooouuu duoooiiine")); //'how you doin'
console.log(translate("aaa bo cy da eee fe")); // 'a b c d e f'
console.log(translate("sooooso aaaaaaaaaaaaaaaa")); //'sos aaa'
