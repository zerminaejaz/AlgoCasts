// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let numOfChars = {}
    let max = str[0]
    let strArray = str.split("")
    let length = strArray.length

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
      return max

}

module.exports = maxChar;
