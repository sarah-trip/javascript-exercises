const palindromes = function (string) {
    const allowedChars = 'abcdefghijklmnopqrstuvwxyz0123456789'.split(''); 
    const updatedString = string
        .toLowerCase()
        .split('')
        .filter(char => allowedChars.includes(char))
        .join(''); 
    const reversedString = updatedString
        .split('')
        .reverse()
        .join(''); 
    return updatedString === reversedString; 
};

// Do not edit below this line
module.exports = palindromes;
