function isPalindrome(word) {
  // Write your algorithm here
  const clnStr = word.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
      //Cleans the string and turns it to lowercase

      //base of recursive call
    if(clnStr.length <= 1){
      return true
    }

      //check if first and last are the same. If not!!

    if(clnStr[0] !== clnStr[clnStr.length - 1]){
      return false
    }
    //recursively call the function and strip out and 
    return isPalindrome(clnStr.slice(1, -1))
}

console.log(isPalindrome('hannah'))
/* 
  isPalindrome recieved a word when called
    clean the string - 
    1. convert it to lowercase
    2. remove any spaces and unwanted characters
    3. Check if the first and last chars are similar, if not return false
    4. Else if they are similar, if there is no character between the chars return true,
    5. If there are characters in between, do a recursive call on palindrome

    [cars]
    [srac]
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
