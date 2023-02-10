function mostWanted(text: string): string {
    var textRedefined = text.replace(/[^a-z0-9]/gi, "").toLowerCase().split("");

    console.log(textRedefined);
    const dic = {};
    for (let i of textRedefined) {
        dic[i] = textRedefined.filter(x => x == i).length;
    }


    console.log(dic);

    var keysSorted = Object.keys(dic).sort(function(a,b){return dic[b]-dic[a]})

    //first case still to do
    if(Object.keys(dic).every((k) => dic[k] === dic[0])){
      var sortedText = text.toLowerCase().split('').sort();
      return sortedText[0];
    } else return keysSorted[0];
}

console.log(mostWanted("Hello World"));
console.log(mostWanted("One"));
console.log(mostWanted("Oops!"));
console.log(mostWanted("AAaooo!!!!"));
