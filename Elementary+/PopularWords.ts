"use strict";

function popularWords(text: string, words: string[]) {
  
    const str = text.toLowerCase().replace(/\n/g, ' ').split(' ');
    const dic = {};
    for( let i of words ){
        dic[i] = str.filter(x => x == i).length;
    }
    return dic
}

console.log('Example:')
console.log(popularWords(`
When I was One
I had just begun
When I was Two
I was nearly new`, ['i', 'was', 'three', 'near']))