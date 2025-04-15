// https://js.checkio.org/en/mission/acceptable-password-v/
// In this mission you need to create a password verification function.
//
// The verification conditions are:
//
// -   the length should be bigger than 6;
// -   should contain at least one digit, but it cannot consist of just digits;
// -   having numbers or containing just numbers does not apply to the password longer than 9;
// -   a string should not contain the word "password" in any case.

function isAcceptablePassword(password: string): boolean {
        const hasCorrectLength = password.length > 6;
        let containsDigit = ['0','1','2','3','4','5','6','7','8','9'].some(digit => password.includes(digit));
        let atLeastOneChar = /\D/.test(password);
        if(password.length > 9){
            containsDigit = true;
            atLeastOneChar = true;
        }
        return hasCorrectLength && containsDigit && atLeastOneChar && !password.toLowerCase().includes('password');
}


console.log(isAcceptablePassword("short"));
console.log(isAcceptablePassword("password12345"));
console.log(isAcceptablePassword("pas111sword12345"));
