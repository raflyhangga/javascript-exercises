const fibonacci = function(a) {
    let value = Number(a);
    if (value<0) {
        return "OOPS"
    } else {
        if (value <= 1){
            return value;
        } else {
            return fibonacci(value-1) + fibonacci(value-2);
        }
    }
};

// Do not edit below this line
module.exports = fibonacci;
