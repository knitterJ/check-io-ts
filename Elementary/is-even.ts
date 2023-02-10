// Check if the given number is even or not. Your function should return true if the number is even, andfalse if the number is odd.
// Input: An int.
// Output: A bool.
//One-liner practice

function isEven(num: number): boolean {
    return num % 2 == 0 ? true : false;
}

console.log(isEven(2));
console.log(isEven(5));
console.log(isEven(0));
