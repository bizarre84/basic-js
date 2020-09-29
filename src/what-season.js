const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(d) {
  if (!d) return 'Unable to determine the time of year!'
  if (!(d instanceof Date) && isNaN(d.getMonth)) {
    console.log(d)
    throw new Error()
  }
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
      break
  }
  return r
};
