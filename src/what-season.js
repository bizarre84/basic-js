const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(d) {
  if(Object.prototype.toString.call(d) !== '[object Date]') return 'Unable to determine the time of year!'
  let r = ''
  switch(d.getMonth()) {
    case 11 :
    case 0 :
    case 1 :
      r = 'winter'
      break
    case 2 :
    case 3 :
    case 4 :
      r = 'spring'
      break
    case 5 :
    case 6 :
    case 7 :
      r = 'summer'
      break
    case 8 :
    case 9 :
    case 10 :
      r = 'autumn' 
  }
  return r
};
