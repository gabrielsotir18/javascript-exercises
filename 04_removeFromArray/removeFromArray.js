

const removeFromArray = function(array, ...args) {
    for(let i = 0 ; i < args.length ; i++){
        valueToRemove = args[i];
        array = array.filter(function(value){
            return value !== valueToRemove;
        });
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
