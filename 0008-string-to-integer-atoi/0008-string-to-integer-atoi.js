/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  s = s.trim();
  var data = parseInt(s, 10);
  if (isNaN(data)) {
    return 0;
  }
  if (data < -2147483648) {
    return -2147483648;
  }
  if (data > 2147483647) {
    return 2147483647;
  }
  return data;
};