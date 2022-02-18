//READ THE INSTRUCTIONS CAREFULLY!
// The alphabet contains both vowel and consonant letters (yes, we divide the letters).
// Vowels -- A E I O U Y
// Consonants -- B C D F G H J K L M N P Q R S T V W X Z
//
// You are given a block of text with different words.
//These words are separated by whitespaces and punctuation marks.
//Numbers are not considered as words in this mission (a mix of letters and digits is not a word either).
//You should count the number of words (striped words) where the vowels with consonants are alternating; words that you count cannot have two consecutive vowels or consonants. The words consisting of a single letter are not striped -- don't count those.
//Casing is not significant for this mission.
// Input: A text as a string (unicode)
// Output: A quantity of striped words as an integer.

function stripedWords(line: string): number {
  // First editorial of the input string
  // As casing is not important let's do "toLowerCase()". Then replace numbers with the word that doesn't meet criteria
  var lowTextFinal = line.toLowerCase().replace(/[0-9]/g, "blaa");
  // Clean the words from all the "impurities like . , and other punctuation marks and create an array of strings""
  var textFinal = lowTextFinal.match(/\b(\w+)\b/g);
  console.log(textFinal);
  var count = 0;
  for (let e of textFinal)
    if (
      e.match(/[aeiouy]{2}/g) ||
      e.match(/[bcdfghjklmnpqrstvwxz]{2}/g) ||
      e.length == 1
    )
      count++;

  // console.log(count);
  // console.log(textFinal.length);
  return textFinal.length - count;
}

//Looking for pure words that don't have 2 consecutive vowels or 2 consecutive consonants
console.log(stripedWords("My name is ...")); // should return 3. All the words have the right pattern
console.log(stripedWords("Hello world")); // 2 because of "ll" and "rl"
console.log(stripedWords("A quantity of striped words."));
console.log(stripedWords("Dog,cat,mouse,bird.Human."));
console.log(
  stripedWords(
    "For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words."
  )
); // case sensitive? flag /i will do the job
console.log(stripedWords("1 2 3 12 13")); //numbers? .replace() them with the word, that doesn't meet criteria
console.log(stripedWords("abababababababababababababababab"));
console.log(stripedWords("1st 2a ab3er root rate"));
