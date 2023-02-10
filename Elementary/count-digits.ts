//You need to count the number of digits in a given string. 
// Input: A Str.
// Output: An Int. 


function countDigits(text: string): number {
    let count = 0;
    for (let i=0; i < text.length; i++){
            if(text[i].match(/\d/)){
            count++}
        } 
    return count;
}



console.log(countDigits('hi')); 
console.log(countDigits('who is 1st here')); //1 
console.log(countDigits('my numbers is 2'));  
console.log(countDigits('This picture is an oil on canvas ' +
 'painting by Danish artist Anna ' +
 'Petersen between 1845 and 1910 year')); //2 
console.log(countDigits('5 plus 6 is')); 
console.log(countDigits(''));