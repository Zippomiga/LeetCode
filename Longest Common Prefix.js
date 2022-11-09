// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.


// <--------------- SOLUTION 2 --------------->

var longestCommonPrefix = function(strs) {    
    strs.sort((a, b) => a.length - b.length)

    let prefix = ''
    
    for(let i in strs[0]) {
        if(strs.every(word => word[i] === strs[0][i])) {
            prefix += strs[0][i]
        } else {
            break
        }
    }
    
    return prefix
}


// <--------------- SOLUTION 1 --------------->

var longestCommonPrefix = function(strs) {
    // const shortestWord = strs.find(word => 
    //     word.length === Math.min(...strs.map(word => 
    //         word.length)))
    
    const shortestWord = strs.reduce((a, b) => (a.length < b.length)? a : b)
         
    let letters = ''
    
    for(let i in shortestWord) {
        if(strs.every(word => word[i] === shortestWord[i])) {
            letters += shortestWord[i]
        } else {
            break
        }
    }
    
    return letters
}

// <--------------- Others --------------->

var longestCommonPrefix = function(strs) {
    strs.sort()

    for(let i = 0; i < strs[0].length; i++) {
      if(strs[0][i] !== strs[strs.length - 1][i]) return strs[0].substr(0, i)
    }
    
    return strs[0]
}