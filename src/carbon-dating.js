const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(item) {
  if (typeof item !== "string") return false;
  item = parseFloat(item);
  if (typeof item !== "number" || item !== item) return false;
  if (item <=0 || item>=15.1) return false;
  return (Math.ceil((Math.log(MODERN_ACTIVITY/item)/(Math.log(2)/HALF_LIFE_PERIOD))));
  
};
