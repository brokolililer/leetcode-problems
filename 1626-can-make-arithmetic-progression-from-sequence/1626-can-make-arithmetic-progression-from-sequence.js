/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function (arr) {
    arr = arr.sort((a, b) => { return a - b; });
    var diff = [];
    for (let index = 1; index < arr.length; index++) {
        diff.push(arr[index - 1] - arr[index])
    }
    return diff.every(o => o == diff[0]);
};