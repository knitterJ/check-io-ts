 // Sort the integers in sequence in sequence. But the position of zeros should not be changed. 

function exceptZero(items: number[]): number[] {
    const cleaned = items.filter(Boolean).sort((a, b)=> b-a);
    let res = [];
    for(let i of items){
      res.push(Boolean(i) ? cleaned.pop() : 0);
    }
    return res;
}

console.log(exceptZero([0, 2, 3, 1, 0, 4, 5]));
