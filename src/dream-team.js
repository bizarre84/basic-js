const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(a) {
  if(!Array.isArray(a)) return false
  let s = '';
  for (let i of a) {
    if (typeof i === 'string' || i instanceof String){
      s = s + i.trim()[0].toUpperCase()
    }
  }
  return s.length > 0 ? s.split('').sort().join('') : false
};
