// The main task is to sort the array based on the frequency of occurences.
//  So table [3,4,7,11,11,4,4]  should be converted into:
// [4,4,4, 11,11, 3,7]


// My idea is to:
// 1) create a frequency map that will show us the occurrences: {3:1, 4:3, 7:1, 11:2} - we'll do it in a seperate function
// 2) This frequency map, especially second set of numbers (called values) will be used as the sorting criterium inside the sort function numbers.sort((a, b) => {here comes the criterium}
// extra remark for the 2) - During the sort we can't forget about adding mechanism that will evaluate numbers in case when both numbers are equal (look at the numbers 3 and 7 in the example above)

var mockuparray = [3,4,7,11,11,4,4];

function SortBasedonFrequencyMap(numbers) {

function understandingReduceConverted(numbers) {
  const frequencyMap = {};
for (const element of numbers) {
  if (!(element in frequencyMap)) {
    frequencyMap[element] = 1;
  } else {
    frequencyMap[element]++;
  }

  // console.log(frequencyMap);
}
// If we divide the procedure into two parts, first function needs to return intermediate product which is frequency map
return frequencyMap;
}

  // Now the second part of our task - sorting
  // 2a) create intermediate frequency map, based on the first function that we created
  const auxiliaryMap = understandingReduceConverted(numbers)

  // 2b) sort
  numbers.sort((a, b) => {
    // what's very important to note (and the most magical thing in programming) is that we sort the initial array,
    // but the sorting criterium that we're using is totally different data structure (frequencyMap)

         if (auxiliaryMap[a] !== auxiliaryMap[b]) {
             return auxiliaryMap[b] - auxiliaryMap[a]; // Sort by frequency descending. Note that it's just a criterium NOT THE END PRODUCT!
         } else {
             return a - b; // If frequencies are equal, sort by value ascending
         }
     });
  return numbers;
}

console.log(SortBasedonFrequencyMap(mockuparray));

// reduce function that is shown below, is doing exactly what function above () does
// what's crutial to understand the code?
// element - key
// frequencyMap[element] - value
// the end result - {element : frequencyMap[element]}

// function understandingReduce(numbers) {
//   return numbers.reduce(function (frequencyMap, current) {
//       frequencyMap[current] = (frequencyMap[current] || "blaa") + 1;
//       console.log(frequencyMap);
//       return frequencyMap; // return that updates the accumulator
//     }, {});
// }
