// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    let strA = stringA.replace(/[^0-9a-z]/gi, '')
    let strB = stringB.replace(/[^0-9a-z]/gi, '')
    if(strA.length !== strB.length){
        return false
    }
   
    let mapA = createMap(strA)
    let mapB = createMap(strB)

    if(Object.keys(mapA).length !== Object.keys(mapB).length){
        return false
    }
    else{
        //then check deeper into the values to see if they all match
        //while loop through one map and check to see if the keys match
        for(let [key, value] of Object.entries(mapA)){
            if(mapB[key] !== value)
                return false
        }
        return true
    }
}

function createMap(str){
    let map = {}
    let string = str.toLowerCase()
    for(let char of string){
        if(map[char]){
            map[char] += 1
        }
        else{
            map[char] = 1
        }
    }
    return map
}

module.exports = anagrams;
