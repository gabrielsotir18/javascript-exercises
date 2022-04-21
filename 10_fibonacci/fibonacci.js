const fibonacci = function(index) {
    if (index < 2) return index;
    return fibonacci(index-1) + fibonacci(index-2);

};

// Do not edit below this line
module.exports = fibonacci;
