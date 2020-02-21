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
// function palindrome(str){
    // return str.split("").every((char, i)=>{
    //     console.log(char, str[str.length-i-1])
    //     return char === str[str.length-i-1]
    // })
// }

function palindrome(str){
    // if length is even number just iterate through half comparisons
    // if length is odd divide by two +1
    let loopLength
    if(str.length%2 == 0){
        loopLength = str.length/2
    }
    else{
        loopLength = str.length/2 + 1
    }
    let isMatching = true

    for(let i = 0; i < loopLength && isMatching; i++){
        (str[i] === str[str.length-i-1])? isMatching = true: isMatching = false
    }
    return isMatching

}
module.exports = palindrome;
