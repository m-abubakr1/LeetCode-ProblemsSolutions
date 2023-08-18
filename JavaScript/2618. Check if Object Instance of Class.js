/**
 * @param {any} obj
 * @param {any} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function(value, classObj) {
 if (value === null || value === undefined || classObj === null || classObj === undefined || typeof classObj !== 'function') {
        return false;
    } else if (classObj === Object) {
        return true;
    } else if (typeof value === 'symbol') {
        return classObj === Symbol;
    } else if (typeof value === 'object') {
        return value instanceof classObj;
    } else if (typeof value === 'number') {
        return classObj === Number;
    } else if (typeof value === 'string') {
        return classObj === String;
    } else if (typeof value === 'boolean') {
        return classObj === Boolean;
    } else if (typeof value === 'bigint') {
        return classObj === BigInt;
    } else {
        return false;
    }
};

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */