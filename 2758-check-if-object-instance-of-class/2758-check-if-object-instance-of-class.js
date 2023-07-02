/**
 * @param {any} obj
 * @param {any} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function(obj, classFunction) {
    if (obj == null || typeof classFunction != "function") {
        return false;
    }
    let result = (Object(obj) instanceof classFunction);
    return result;
};

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */