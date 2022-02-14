function nearestValue(values, search) {
    const sorted = values.sort(function(a,b){
      return (a - b)
    });
    const blaa = [];
    for (let i = 0; i < sorted.length; i++){
        blaa.push(search - sorted[i]);
        }
        //convert the list after substraction to the list with positive integers

        var positiveblaa = blaa.map(Math.abs)
        // console.log(positiveblaa.indexOf(Math.min.apply(null,positiveblaa)));
        return values[positiveblaa.indexOf(Math.min.apply(null,positiveblaa))];
}



console.log(nearestValue([4, 7, 10, 11, 12, 17], 9));
console.log(nearestValue([4, 7, 10, 11, 12, 17], 9));
console.log(nearestValue([4, 7, 10, 11, 12, 17], 8));
console.log(nearestValue([4, 8, 10, 11, 12, 17], 9));
console.log(nearestValue([4, 9, 10, 11, 12, 17], 9));
console.log(nearestValue([4, 7, 10, 11, 12, 17], 0));
console.log(nearestValue([4, 7, 10, 11, 12, 17], 100));
console.log(nearestValue([5, 10, 8, 12, 89, 100], 7));
console.log(nearestValue([-1, 2, 3], 0));
