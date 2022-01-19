// You are given a string and two markers (the initial and final). You have to find a substring enclosed between these two markers. But there are a few important conditions:

// The initial and final markers are always different.
// If there is no initial marker, then the first character should be considered the beginning of a string.
// If there is no final marker, then the last character should be considered the ending of a string.
// If the initial and final markers are missing then simply return the whole string.
// If the final marker comes before the initial marker, then return an empty string.

// Input: Three arguments. All of them are strings. The second and third arguments are the initial and final markers.
// Output: A string. 



function betweenMarkers(text: string, begin: string, end: string): string {

  var firstChar = text.indexOf(begin);
  var lastChar = text.indexOf(end);

  if (firstChar == -1 && lastChar == -1) {
    return text;
  }
  //No initial marker? First character is the beginning of a string.
  if (firstChar == -1) {
    firstChar = 0;

  //Otherwise firstChar should start from the last character of "begin: string". Example <title>
  } else {
    firstChar += begin.length;
  }

  //No final marker? Last character is the end of string.
  if (lastChar == -1) {
    lastChar = text.length;
  }

  //firstchar is further than last char? return empty string
  if (firstChar > lastChar) {
    return "";
  }
  var newText = text.substring(firstChar, lastChar);
  return newText;

}

console.log(betweenMarkers('MyLongString:StringIWant;', ':', ';'));
console.log(betweenMarkers('My cow always gives milk', 'cow ', ' milk'));
console.log(betweenMarkers('What is >apple<', '>', '<'));
console.log(betweenMarkers("<head><title>My new site</title></head>", "<title>", "</title>"));
console.log(betweenMarkers('Nooo[/b] hi', '[b]', '[/b]'));
console.log(betweenMarkers('No result [b]hi', '[b]', '[/b]'));
console.log(betweenMarkers('No <bye>', '>', '<'));
