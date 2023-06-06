/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
    var result = [];
    arr.map(fn).map((item, index) => { if (item) { result = [...result, arr[index]] } })
    return result;
};