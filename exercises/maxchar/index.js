// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let numOfChars = {}
    let strArray = str.split("")
    let length = strArray.length
    let max = strArray[0]

    for(let i = 0; i<length; i++){
        if(numOfChars[str[i]]){
            numOfChars[str[i]] +=1
        }
        else
        numOfChars[str[i]] = 1
    }
    
    for (let key of Object.keys(numOfChars)) {
        if(numOfChars[key] >= numOfChars[max]){
            max = key
        }
      }
    console.log("max: " , max)

    arrayOfMax = []
    for(let key of Object.keys(numOfChars)){
        if(numOfChars[key] == numOfChars[max])
        arrayOfMax.push(key)
    }


    return arrayOfMax

    //   return max

}
console.log(maxChar("cc11")) // [c,1]
console.log(maxChar("3fftittt")) // [t]
console.log(maxChar("hhhh3333tttt")) //[hhhh3333tttt]
module.exports = maxChar;
