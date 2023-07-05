const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
	let result = arr.reduce((sum,current) => (sum + current),0);
  return result;
};

const multiply = function(...args) {
  let result = args.reduce((sum,current)=>sum*current,1)
  return result;
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(a) {
	if (a === 0) {
    return  1;
  } else {
    return a*factorial(a-1);
  }
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
