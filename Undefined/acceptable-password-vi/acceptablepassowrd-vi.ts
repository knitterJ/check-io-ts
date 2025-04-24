// Taken from mission Acceptable Password V
// Taken from mission Acceptable Password IV
// Taken from mission Acceptable Password III
// Taken from mission Acceptable Password II
// Taken from mission Acceptable Password I

// The verification conditions are:
//
//     I) the length should be bigger than 6;
//     II) should contain at least one digit, but it cannot consist of just digits;
//     III) having numbers or containing just numbers does not apply to the password longer than 9.
//     IV) a string should not contain the word "password" in any case;
//     V) must contain at least 3 different (case-sensitive) letters (or digits) even if it is longer than 10


function isAcceptablePasswordvi(password: string): boolean {
        // I
        const hasCorrectLength = password.length > 6;
        // II
        let containsDigit = ['0','1','2','3','4','5','6','7','8','9'].some(digit => password.includes(digit));
        // II
        let atLeastOneChar = /\D/.test(password);
        //III
        if(password.length > 9) {
            containsDigit = true;
            atLeastOneChar = true;
        }
        //IV
        const notContainPassword = !password.toLowerCase().includes('password');
        //V  Check for at least 3 different characters
        const uniqueChars = new Set(password);
        console.log(uniqueChars);
        const hasEnoughUniqueChars = uniqueChars.size >= 3;

        return hasCorrectLength && containsDigit && atLeastOneChar && notContainPassword && hasEnoughUniqueChars;
}


console.log(isAcceptablePasswordvi("aaaaaaabbaaaaaaaab"));
