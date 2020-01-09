// These functions are from MDN
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

/**
 * Check if a set is a superset of another set.
 *
 * @param {Set} set A set that could be a superset
 * @param {Set} subset A set that could be a subset
 *
 * @return {Boolean} Returns true if `set` is a superset of `subset` otherwise returns false.
 */
function isSuperset(set, subset) {
    for (let elem of subset) {
        if (!set.has(elem)) {
            return false;
        }
    }
    return true;
}

/**
 * Get the union of setA and setB.
 *
 * @param {Set} setA
 * @param {Set} setB
 *
 * @return {Set} Returns a set that contains the union of both sets.
 */
function union(setA, setB) {
    let _union = new Set(setA);
    for (let elem of setB) {
        _union.add(elem);
    }
    return _union;
}

/**
 * Get the elements found in both setA and setB.
 *
 * @param {Set} setA
 * @param {Set} setB
 *
 * @return {Set} Returns a set containing elements in both setA and setB.
 */
function intersection(setA, setB) {
    let _intersection = new Set();
    for (let elem of setB) {
        if (setA.has(elem)) {
            _intersection.add(elem);
        }
    }
    return _intersection;
}

/**
 * Get the elements that are not in both sets.
 *
 * @param {Set} setA
 * @param {Set} setB
 *
 * @return {Set} Returns a set containing all elements that the sets don't have in common.
 */
function symmetricDifference(setA, setB) {
    let _difference = new Set(setA);
    for (let elem of setB) {
        if (_difference.has(elem)) {
            _difference.delete(elem);
        } else {
            _difference.add(elem);
        }
    }
    return _difference;
}

module.exports = {
    isSuperset,
    union,
    intersection,
    symmetricDifference,
};
