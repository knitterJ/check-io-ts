// Your mission is to convert the name of a function (a string) from CamelCase ("MyFunctionName") into the Python format ("my_function_name") where all chars are in lowercase and all words are concatenated with an intervening underscore symbol "_".
//
// Input: A function name as a CamelCase string.
//
// Output: The same string, but in under_score.

function fromCamelCase(name: string): string {
    var underscoreversion = name.split(/(?=[A-Z])/).join("").toLowerCase().replace(/ /g, "_");
    // console.log(underscoreversion);
    return underscoreversion;
}

console.log(fromCamelCase('MyFunctionName')); // my_function_name
console.log(fromCamelCase('IPhone')); // i_phone
