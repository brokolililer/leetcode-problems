/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
   var checkStraight = function([x1, x2], [y1, y2], [z1, z2]) {
    return (y2 - x2) * (z1 - y1) === (z2 - y2) * (y1 - x1);
    };
    for (let index = 2; index < coordinates.length; index++) {
        if (!checkStraight(coordinates[0], coordinates[1], coordinates[index])) {
            return false;
        }
    }
    return true;
};