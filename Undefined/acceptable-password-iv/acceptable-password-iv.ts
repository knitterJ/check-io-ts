// In this mission you need to create a password verification function.
//
// The verification conditions are:
//
//    the length should be bigger than 6;
//    should contain at least one digit, but it cannot consist of just digits;
//    if the password is longer than 9 - previous rule is not required.

function isAcceptablePasswordIV(password: string): boolean {
        const hasCorrectLength = password.length > 6;
        let containsDigit = ['0','1','2','3','4','5','6','7','8','9'].some(digit => password.includes(digit)); //should contain at least one digit
        let atLeastOneChar = /\D/.test(password); //  it cannot consist of just digits;
        if(password.length > 9){
            containsDigit = true;
            atLeastOneChar = true;
        }
        return hasCorrectLength && containsDigit && atLeastOneChar;
}

console.log(isAcceptablePasswordIV("short"));
