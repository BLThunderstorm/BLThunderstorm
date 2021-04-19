// https://stackoverflow.com/a/52395990/13415044
module.exports.lnSplit = function lnSplit(str, maxLength){
  if(str.length <= maxLength)  return str;
  var parts = str.match(new RegExp(".{1," + maxLength + "}","g"));
  return parts;
}
