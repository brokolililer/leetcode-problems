/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    const n = isConnected.length;
    var wired = {};
    var provinces = 0;
    for (let i = 0; i < n; i++) {
        if (!wired[i]) {
            provinces++;
            relatedCity(i);
        }
    }

    function relatedCity(i) {
        for (let j = 0; j < n; j++) {
            if (isConnected[i][j] === 1 && !wired[j]) {
                wired[j] = true;
                relatedCity(j)
            }
        }
    }
    return provinces;
};