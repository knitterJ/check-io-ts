function nonUniqueElements(data) {
var count = data.reduce((o,v) => {
o[v] = (o[v] +1 || 0) + 1
return o;
},{});


const sortable = data.map(item => [item, count[item]]);
sortable.sort((a,b) => {
if (a[1] === b[1]) return a[0] - b[0];
return b[1] - a[1];
});
return sortable.map(s => s[0]);
}

console.log(nonUniqueElements([1, 2, 3, 1, 3]));
console.log(nonUniqueElements([1, 2, 3, 4, 5]));
console.log(nonUniqueElements([5, 5, 5, 5, 5]));
console.log(nonUniqueElements([10, 9, 10, 10, 9, 8]));
console.log(nonUniqueElements(["bob", "bob", "blaa"]));

// function popularWords(text: string, words: string[]) {
//
//     const str = text.toLowerCase().replace(/\n/g, ' ').split(' ');
//     const dic = {};
//     for (let i of words) {
//         dic[i] = str.filter(x => x == i).length;
//     }
//     return dic
// }
