const findTheOldest = function(arr) {
    let age = 0;
    let result;
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i].yearOfDeath - arr[i].yearOfBirth > age){
            result = arr[i];
            age = arr[i].yearOfDeath - arr[i].yearOfBirth;
        }
    }
    return result;
};

// Do not edit below this line
module.exports = findTheOldest;
