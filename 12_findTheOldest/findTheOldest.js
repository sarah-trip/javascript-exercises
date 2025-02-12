const getAge = function(person) {
    if (!person.yearOfDeath) {
        person.yearOfDeath = new Date().getFullYear(); 
    }
    return person.yearOfDeath - person.yearOfBirth; 
}; 

const findTheOldest = function(peopleArray) {
    sortedArray = peopleArray.sort((currentPerson, nextPerson) => getAge(nextPerson) - getAge(currentPerson)); 
    return sortedArray[0]; 
}; 

// Do not edit below this line
module.exports = findTheOldest;
