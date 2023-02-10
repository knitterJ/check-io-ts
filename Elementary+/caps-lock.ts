// Joe Palooka has fat fingers, so he always hits the “Caps Lock” key whenever he actually intends to hit the key “a” by itself. (When Joe tries to type in some accented version of “a” that needs more keystrokes to conjure the accents, he is more careful in the presence of such raffinated characters ([Shift] + [Char]) and will press the keys correctly.) Compute and return the result of having Joe type in the given text. The “Caps Lock” key affects only the letter keys from “a” to “z” , and has no effect on the other keys or characters. “Caps Lock” key is assumed to be initially off.
//
// For Joe's keyboard, Caps Lock is always uppercase a letter. That means if Caps Lock is on, and Joe does Shift + b - he gets 'B' (in upper case) printed.
//
// Input: A string. The typed text.
// Output: A string. The showed text after being typed.

function capsLock(text: string) {
  var remA = text.split("a");
  for (let i = 0; i < remA.length; i++) {
    if ((i % 2) != 0) {
        remA[i] = remA[i].toUpperCase();
      }
    }
  return remA.join("");
}

console.log(capsLock("Aloha from Hawaii")); // "Aloh FROM HwII"
console.log(capsLock("Always wanted to visit Zambia.")); // "AlwYS Wnted to visit ZMBI."
console.log(capsLock("Why are you asking me that?")); // "Why RE YOU sking me thT?"
