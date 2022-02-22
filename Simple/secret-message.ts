// You are given a chunk of text. Gather all capital letters in one word in the order that they appear in the text.
// For example: text = " H ow are you? E h, ok. L ow or L ower? O hhh.", if we collect all of the capital letters, we get the message "HELLO".
// Input: A text as a string (unicode).
// Output: The secret message as a string or an empty string.

function secretMessage(message: string): string {
    return message.replace(/[^A-Z]+/g, "");
}

console.log(secretMessage("hello world!"));
console.log(secretMessage("Hello World!"));
console.log(secretMessage("How are you? Eh, ok. Low or Lower?" + "Oooh"));
