 // Sort the given Array so that its elements should be grouped and those groups end up in the decreasing frequency order, that is, the number of times element appears in Array.
 // If two elements have the same frequency, their groups should end up in the same order as the first appearance of element in the Array.

function frequencySort<T extends number | string>(items: T[]): T[] {

    // create a following map {1: 2, 2:1, 3: 2} { item : amountOfTimes }
    // "one appeared two times, two appeared one time, three appeared two times"
    // Let's define it first
    const FirstFrequecyMap: Map<T, number> = new Map;

    for(const item of items){

    return [];
}

// first stage done!
// Tomorrow rewrite the code again, how to build the counter (value pair in the map) is very sophisticated

console.log(frequencySort([1, 2, 3, 1, 3]));
console.log(frequencySort([1, 2, 3, 4, 5]));
console.log(frequencySort([5, 5, 5, 5, 5]));
console.log(frequencySort([10, 9, 10, 10, 9, 8]));
console.log(frequencySort(["bob", "bob", "blaa"]));
