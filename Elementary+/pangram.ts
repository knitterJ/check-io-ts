// A pangram (Greek:παν γράμμα, pan gramma, "every letter") or holoalphabetic sentence for a given alphabet is a sentence using every letter of the alphabet at least once. Perhaps you are familiar with the well known pangram "The quick brown fox jumps over the lazy dog".
//
// For this mission, we will use the latin alphabet (A-Z). You are given a text with latin letters and punctuation symbols. You need to check if the sentence is a pangram or not. Case does not matter.
//
// Input: A text as a string.
//
// Output: Whether the sentence is a pangram or not as a boolean.

function checkPangram(text: string): boolean {
    return (text.match(/([a-z])(?!.*\1)/gi) || []).length === 26;
}

console.log(checkPangram('ABCDEF'));
console.log(checkPangram('abcdefghijklmnopqrstuvwxyz'));
console.log(checkPangram('ABCDEFGHIJKLMNOPQRSTUVWXYZ'));
console.log(checkPangram('Bored? Craving a pub quiz fix? Why, ' + 'just come to the Royal Oak!'));
console.log(checkPangram('Six big devils from Japan quickly '
 + 'forgot how to walt.'));
