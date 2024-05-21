function isPalindrome(word) {
  let reverseWord = word.split("").reverse().join("")
  if (reverseWord === word) {
    return true
  } else false
}

  // Write your algorithm here
  // Make a function that test if words are palindrom. same forward and backwards. 
  // first take a string and which it around to get it reverse
  // store reversed string in variable
  // check variable equals given word

  // expect testing mom to consol log true
  // expect testing toast to consol log false
//   palindrome(“never odd or even”) should return true
//  palindrome(“A man, a plan, a canal. Panama”) should return true


/* 
  Add your pseudocode here
// *
  // reverse method only works on an array***
  // word = "racecar"
  // take a string and separate letters
  // expect [r, a, c, e, c, a, r] 
  // characterArray = word.split("")
  // need to reverse order of characters.
  // reversedArray = characterArray.reverse()
  // need to join array elements to a single string
  // reverseArray.join("")
  // reverseWord = reverseArray.join("")
  // if (reverseWord = word) 
    return true
    else return false 



/*
  Add written explanation of your solution here
*/
// Im taking a string and splitting up the string to an array of single letters. 
// Im taking that array and calling reverse method to give me all the reversed order of single letters
// Im taking the reversed array of letters and call join. Which reforms to a single string and storing as a variable

// I am taking that variable and comparing it to the initial argument string that was passed into the function
// If they are the same I am returning the as true. If doesn't im returning false

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: true")
  console.log("=>", isPalindrome("never odd or even"));

  console.log("Expecting: true")
  console.log("=>", isPalindrome("A man, a plan, a canal. Panama"));

  
}

module.exports = isPalindrome;
