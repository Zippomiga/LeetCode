// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:

// 1. Open brackets must be closed by the same type of brackets.
// 2. Open brackets must be closed in the correct order.
// 3. Every close bracket has a corresponding open bracket of the same type.
 
// Example 1:
// Input: s = "()"
// Output: true

// Example 2:
// Input: s = "()[]{}"
// Output: true

// Example 3:
// Input: s = "(]"
// Output: false


var isValid = function(s) {
    const SYMBOLS = {
        '()': '()',
        '[]': '[]', 
        '{}': '{}'
    }

    if(s in SYMBOLS) return true

    let sArr = s.split('')

    for(let i = 0; i < sArr.length; i++) {
        const slice = sArr.slice(i, i+2).join('')

        if(slice in SYMBOLS) {
            sArr.splice(i, 2)
            i = 0
        } 
    }
    
    return (sArr.join('') in SYMBOLS)? true : false
}


// <--------------- OTHERS ---------------->

var isValid = function(s) {
    const re = /(?:\[\]|\(\)|\{\})/

    while(re.test(s))
        s = s.replace(re,'')

    return !s.length
}