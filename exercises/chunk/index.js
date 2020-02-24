// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size){
    //create a chunked array
    const chunked = []
    //start at index 0 of array
    let index = 0
    //loop through array and push two items into each index
    while(index < array.length){
        chunked.push(array.slice(index, index+size)) //NOT SPLICE, which mutates the original array
        index += size
    }
    return chunked
}

module.exports = chunk;

console.log(chunk([1,2,3], 2))
    // function chunk(array, size) {
    //     let chunked = []
    //     for(let number of array){
    //         const last = chunked[chunked.length-1]
    //         if(!last || last.length === size){
    //             chunked.push([number]) // originally had chunked.push(number) which is why .push didnt work on line 19
    //         }
    //         else{
    //             last.push(number)
    //         }
    //     }
    //     return chunked
    // }
