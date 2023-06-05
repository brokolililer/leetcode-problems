/**
 * @param {any} o1
 * @param {any} o2
 * @return {boolean}
 */
var areDeeplyEqual = function(o1, o2) {
    if (o1 === o2) return true;
    if (!(o1 instanceof Object) || !(o2 instanceof Object)) return false;
    if (o1.constructor !== o2.constructor) return false;
    for (const key in o1) {
        if (o1.hasOwnProperty(key)) {
            if (o2.hasOwnProperty(key)) {
                if (typeof o1[key] === "object") {
                    if (!areDeeplyEqual(o1[key], o2[key])) {
                        return false;
                    }
                } else {
                    if (o1[key] !== o2[key]) {
                        return false;
                    }
                }
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
    for (const key in o2) {
        if (o2.hasOwnProperty(key) && !o1.hasOwnProperty(key))
            return false;
    }
    return true;
};