// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let total = 0
    string = str.toLowerCase()
    for(let char of string){
        if(vowels.includes(char)){
            total += 1
        }
    }
    return total
}

module.exports = vowels;
