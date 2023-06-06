/**
 * @param {any} object
 * @return {string}
 */
var jsonStringify = function(object) {
    if (object === null) {
        return "null";
    }
    if (typeof object === "string") {
        return `"${object}"`;
    }
    if (typeof object === "number") {
        return String(object);
    }
    if (typeof object === "boolean") {
        return String(object);
    }
    if (Array.isArray(object)) {
        const result = object.map(o => `${(jsonStringify(o))}`);
        return `[${result.join(",")}]`;
    }
    if (typeof object === "object") {
        const result = Object.keys(object).map(o => `"${o}":${(jsonStringify(object[o]))}`);
        return `{${result.join(",")}}`;
    }
};