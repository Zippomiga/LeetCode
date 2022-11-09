// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.
 
// Example 1:
// Input: s = "III"
// Output: 3
// Explanation: III = 3.

// Example 2:
// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.

// Example 3:
// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.


// <--------------- SOLUTION 3 --------------->

var romanToInt = function(s) {
    const ROMAN = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    }

    const integers = s.split('').map(r => r = ROMAN[r])

    return integers.reduce((a, b, i) => 
        (integers[i] < integers[i+1])? a -= b : a += b, 0)
}

// <--------------- SOLUTION 2 --------------->

var romanToInt = function(s) {
    const ROMAN = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    }

    let integer = 0

    for(let i = 0; i < s.length; i++) {
        const curr = ROMAN[s[i]]
        const next = ROMAN[s[i+1]]

        if(curr < next) integer -= curr
        else integer += curr
   }

    return integer
}

// <--------------- SOLUTION 1 --------------->

var romanToInt = function(s) {
    const ROMAN = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
        IV: 4,
        IX: 9,
        XL: 40,
        XC: 90,
        CD: 400,
        CM: 900
    }

    const nsRoman = s.split('')
    let integer = 0

    while(nsRoman.length) {
        const slice = nsRoman.slice(0, 2).join('')
    
        if(slice in ROMAN) {
            integer += ROMAN[slice]
            nsRoman.shift()
        } else {
            integer += ROMAN[slice[0]]
        }
        nsRoman.shift()
    }

    return integer
}

// <--------------- Others --------------->

var romanToInt = function(s) {
    const m = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
        IV: 4,
        IX: 9,
        XL: 40,
        XC: 90,
        CD: 400,
        CM: 900
    }    
    
    return s
    .split(/(IV|IX|XL|XC|CD|CM|I|V|X|L|C|D|M)/)
	    .filter(Boolean)
	        .map(x => m[x])
	            .reduce((a, b) => a + b, 0)
}