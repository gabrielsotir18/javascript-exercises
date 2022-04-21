const add = function(...args) {
  let sum = 0;
  for(let i = 0 ; i < args.length ; i++){
    sum += args[i];
  }
  return sum;
	
};

const subtract = function(a,b) {
  return a-b;
	
};

const sum = function(args) {
	let sum = 0;
  for(let i = 0 ; i < args.length ; i++){
    sum += Number(args[i]);
  }
  return sum;
};

const multiply = function(args) {
  let sum = 1;
  for(let i = 0 ; i < args.length ; i++){
    sum *= Number(args[i]);
  }
  return sum;
};

const power = function() {
	
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
