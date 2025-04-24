console.log(Math.floor(1234/10));
console.log(1234%10);


function reverseDigits(num: number): number {
    const isNegative = num < 0;
    num = Math.abs(num);

    let reversed = 0;
    while(num > 0){
        reversed = reversed * 10 + num%10;
        num = Math.floor(num / 10);
    }
    return isNegative ? -reversed : reversed;
}

console.log(reverseDigits(32));
console.log(reverseDigits(-32));
