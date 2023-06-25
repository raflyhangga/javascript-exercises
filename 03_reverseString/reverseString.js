const reverseString = function(string) {
    let length = string.length;
    let arr = [];

    for (let i = length - 1; i >= 0; i--) {
        arr.push(string[i]);
    }

    let newString = arr.join("");
    return newString;

};

// Do not edit below this line
module.exports = reverseString;
