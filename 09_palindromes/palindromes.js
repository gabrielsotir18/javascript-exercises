const palindromes = function (string) {
    string = string.toLowerCase();
    strArr = string.split("");
    noPunctuationArr = strArr.map(item => {
        if (item >= "a" && item <= "z") return item;
    });
    
    string = noPunctuationArr.join("");
    console.log(string);
    for(let i = 0 ; i < string.length/2 ; i++){
        if(string[i] != string[string.length-1-i]) return false;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
