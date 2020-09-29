const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(!Array.isArray(arr) && !arr.length) throw new Error()
  let _arr = []
  let check
  for (let i = 0; i < arr.length; i++) {  
    if(i === check) continue
    //if(isNaN(arr[i])) continue
    if(typeof(arr[i])==='undefined') continue
    if(arr[i] === '--discard-next') {check=i; continue;}
    if(arr[i] === '--discard-prev' && i!=0) {_arr.pop(); continue;}
    if(arr[i] === '--double-next') {_arr.push(arr[i+1]); check=i; continue;}
    if(arr[i] === '--double-prev'&& i!=0) {_arr.push(arr[i-1]); continue;}
    if(i==0 && (arr[i] === '--discard-prev' || arr[i] === '--double-prev')) continue;
    _arr.push(arr[i])
  }
  return _arr
};
