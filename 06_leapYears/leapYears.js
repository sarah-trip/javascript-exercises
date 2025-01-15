// Determine if year is a leap year 
const leapYears = function(year) {
    // Leap years are divisible by four
    // Leap years divisible by 100 are not leap years, unless they are also divisible by 400 
    if (year % 4 === 0) {
        if (year % 100 != 0 || year % 100 === 0 && year % 400 === 0) {
            return true; 
        } 
        return false; 
    }
    return false; 

};

// Do not edit below this line
module.exports = leapYears;
