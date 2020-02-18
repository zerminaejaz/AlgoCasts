// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// function palindrome(str) {
//     return str.split("").reverse().join("") === str
// }

//solve the issue of the double comparisons
//Array.every is not the most efficient
function palindrome(str){
    return str.split("").every((char, i)=>{
        console.log(char, str[str.length-i-1])
        return char === str[str.length-i-1]
    })
}

module.exports = palindrome;
