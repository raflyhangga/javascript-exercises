const convertToCelsius = function(temperature) {
  let hasil = (temperature - 32) * (5/9);
  return Math.round(hasil*10)/10;
};

const convertToFahrenheit = function(temperature) {
  let hasil = (temperature * 9/5) + 32;
  return Math.round(hasil*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
