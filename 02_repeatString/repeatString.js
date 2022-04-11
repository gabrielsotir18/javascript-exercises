const repeatString = function(text, numberOfTimes) {
    let result = "";
    if (numberOfTimes < 0) return "ERROR";
    for(let i = 0 ; i < numberOfTimes ; i++){
        result = result + text;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
