// Your mission is to convert the name of a function (a string) from the Python format (for example "my_function_name") into CamelCase ("MyFunctionName"), where the first char of every word is in uppercase and all words are concatenated without any intervening characters.
// Input: A function name as a string.
// Output: The same string, but in CamelCase.

function toCamelCase(name: string): string {
    var nameNotCapitalized = name.split("_").join(" ");
    // console.log(nameNotCapitalized);
    const finalSentence = nameNotCapitalized.replace(/\b\w/g, letter => letter.toUpperCase()).split(" ").join("");
    return finalSentence;
}

console.log(toCamelCase('my_function_nam_fjlewa')); // MyFunctionName
console.log(toCamelCase('i_phone_5')); // Iphone
