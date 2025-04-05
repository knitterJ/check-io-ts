// This function should take two positive numbers
// (length and width) as inputs and return the perimeter of a rectangle.

function isAcceptablePassword(password: string): boolean {

         // Direct property access (.length) and a simple comparison are generally much faster than creating and executing a regex.
         // Regular expressions involve more overhead for pattern matching.

        // const conditionsAll = /^(?=.*\d).{7,}$/;
        // return conditionsAll.test(password);
        const hasCorrectLength = password.length > 6;
        const containsDigit = ['0','1','2','3','4','5','6','7','8','9'].some(digit => password.includes(digit));
        return hasCorrectLength && containsDigit;
}


console.log(isAcceptablePassword("short"));
console.log(isAcceptablePassword("muchlonger"));
console.log(isAcceptablePassword("abcdefg8"));
