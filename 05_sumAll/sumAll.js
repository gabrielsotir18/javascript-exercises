const sumAll = function(min, max) {
    if( min < 0 || max < 0) return "ERROR";
    if(typeof min != 'number' || typeof max != 'number') return "ERROR";

    if (min > max){
        let aux = min;
        min = max;
        max = aux;
    }
    bigMin=BigInt(min);
    bigMax=BigInt(max);
    let sum = 0n;
    for(let i = bigMin ; i <= bigMax ; i++){
        sum += i;
    }
    return Number(sum);
};

// Do not edit below this line
module.exports = sumAll;
