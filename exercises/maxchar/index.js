// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

//changed for cases where more than one character appeared max num times

function maxChar(str) {
    let numOfChars = {}
    // let length = strArray.length
    // for(let i = 0; i<length; i++){
    //     numOfChars[str[i]]
    //     if(numOfChars[str[i]]){
    //         numOfChars[str[i]] +=1
    //     }
    //     else
    //     numOfChars[str[i]] = 1
    // }
    for(let char of str){
        numOfChars[char] = numOfChars[char] + 1 || 1
    }
    
    let max = 0
    let maxChar = ""
    // for (let key of Object.keys(numOfChars)) {
    //     if(numOfChars[key] >= max){
    //         max = key.value
    //         maxChar = key
    //     }
    //   }
    for(let char in numOfChars){
        if(numOfChars[char] >= max){
                    max = numOfChars[char]
                    maxChar = char
                }
    }
    return maxChar

    // arrayOfMax = []
    // for(let key of Object.keys(numOfChars)){
    //     if(numOfChars[key] == max)
    //     arrayOfMax.push(key)
    // }
    // return arrayOfMax
}

console.log(maxChar("cc11")) // [c,1]
console.log(maxChar("3fftittt")) // [t]
console.log(maxChar("hhhh3333tttt")) //[hhhh3333tttt]
module.exports = maxChar;
