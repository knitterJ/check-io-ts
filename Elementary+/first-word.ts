function firstWord(text: string): string {
    var textModified = text.replace(/[^A-Za-z0-9']/g,' ').trim().split(" ")[0];
  
    return textModified;
}

console.log('Example:');
console.log(firstWord("Hello world"));