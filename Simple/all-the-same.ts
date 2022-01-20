
function allTheSame(elements: any[]): boolean {


    if(elements.length == 1 || elements.length == 0){
      return true;
    }else {
    for(let i = 0; i < elements.length; i++){
        for(let y = 1; y < elements.length; y++){
          // console.log(elements[i]);
          // console.log(elements[y]);
          if(elements[i] == elements[y]){
            return true;
          } else return false;
        }
    }
}
}


console.log(allTheSame([1, 1, 1]));
console.log(allTheSame(['a','b','a']));
console.log(allTheSame([]));
console.log(allTheSame([1]));

// assert.equal(allTheSame([1, 1, 1]), true)
// assert.equal(allTheSame([1, 2, 1]), false)
// assert.equal(allTheSame(['a', 'a', 'a']), true)
// assert.equal(allTheSame([]), true)
// assert.equal(allTheSame([1]), true)
// console.log("Coding complete? Click 'Check' to earn cool rewards!");
