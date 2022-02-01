
//  You have a table with all available goods in the store. The data is represented as a list of objects

//  Your mission here is to find the TOP most expensive goods. The amount we are looking for will be given as a first argument and the whole data as the second one
//  Input: Integer and array of objects. Each objects has two attributes "name" and "price"
//  Output: the same as the second Input argument. 

interface Stock {
    name: string,
    price: number,
};

function biggerPrice(limit: number, data: Stock[]): Stock[] {
          var filess = data.sort(function(a, b) {
                // console.log(a.price - b.price);
                return b.price - a.price;
});
                // console.log(filess);
                var filesToDisplay = filess.slice(0,limit);
                // console.log(filesToDisplay)
                return filesToDisplay;
}




console.log(biggerPrice(2, [
    {"name": "bread", "price": 100},
    {"name": "wine", "price": 138},
    {"name": "meat", "price": 15},
    {"name": "water", "price": 1}
]));

console.log(biggerPrice(1, [
    {"name": "pen", "price": 5},
    {"name": "whiteboard", "price": 170}
])); 


