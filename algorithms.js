// _______________________________________________________
// 258. Add Digits

var addDigits = function (num) {
    if (num === 0) {
        return 0;
    } else {
        return (num - 1) % 9 + 1;
    }
};

// _______________________________________________________
// 66. Plus One

/**
* @param {number[]} digits
* @return {number[]}
*/
var plusOne = function(digits) {
    let k = 0;
    for (var i = 0; i < digits.length; i++) {
        k = 10 * k + digits[i];
    }
    let number = k + 1;
    let array = number.toString(10).replace(/\D/g, '0').split('').map(Number);
    return array; 
};

// _______________________________________________________
// 344. Reverse String

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    var n = s.length,
        middle = Math.floor(n / 2),
        temp;

    if (n <= 1) {
        return s;
    } else {
        for (var i = 0; i < middle; i++) {
            temp = s[i];
            s[i] = s[n - 1 - i];
            s[n - 1 - i] = temp;
        }
    }
    return s;
};


