//in count-digits.ts we were counting ocurrences of the numbers. 
//This time it's necesary to sum these numbers:
// In a given text you need to sum the numbers. Only separated numbers should be counted. If a number is part of a word it shouldn't be counted.
// The text consists from numbers, spaces and english letters
// Input: A string.
// Output: An int. 


function sumNumbers(test: string): number {
    var blaa = [];
    let inputStringToArray = test.split(" ");
    for (let i = 0; i < inputStringToArray.length; i++) {
        if (inputStringToArray[i].match(/\b\d+\b/g)) {
            // "\b" Matches a word boundary position between a word character and non-word character. 
            // (/\b\d+/g) -> extracts the number from "1st" 
            // (/\d+\b/g) -> extracts the number from "w8" 
            blaa.push(inputStringToArray[i]);
        };
    };
    var total = blaa.reduce(function (prev, num) {
        return prev + +num;}, 0);
    return total;
}


console.log(sumNumbers('hi'));
console.log(sumNumbers('who is 1st here'));
console.log(sumNumbers('my numbers is 2'));
console.log(sumNumbers('This picture is an oil on canvas '
    + 'painting by Danish artist Anna '
    + 'Petersen between 1845 and 1910 year'));
console.log(sumNumbers('5 plus 6 is'));
console.log(sumNumbers(''));

