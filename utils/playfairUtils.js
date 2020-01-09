const { symmetricDifference } = require('./setFunctions');

/**
 * Genrate an encryption matrix from keyword and alpabet.
 *
 * Generate a 5x5 matrix to be used for encrupting and decrypting for the playfair cipher.
 *
 * @param {String} keyword The keyword for the cipher.
 * @param {Array} alphabet An array of all 26 characters in the English alphabet.
 *
 * @return {Array} A multidimensional array, 5x5 matrix.
 */
function generateMatrix(keyword, alphabet) {
    keyword = keyword.toUpperCase().split('');
    keywordSet = new Set(keyword);
    alphabetSet = new Set(alphabet);
    alphabet = symmetricDifference(keywordSet, alphabetSet);
    alphabet.delete('Q');
    alphabet = [...alphabet];
    keyword = [...keywordSet];
    values = [...keyword, ...alphabet];

    let encryptionMatrix = [];

    while (values.length !== 0) {
        encryptionMatrix.push(values.splice(0, 5));
    }

    return encryptionMatrix;
}

/**
 * Generate an array of digrams from the text provided.
 *
 * @param {Array} text
 *
 * @return {Array} Returns a 2x2 array
 */
function generateDigrams(text) {
    text = text.toUpperCase().split('');

    let digrams = [];

    while (text.length !== 0) {
        const digram = text.splice(0, 2);

        if (digram.length < 2) {
            digram.push('X');
        }

        if (digram[0] === digram[1]) {
            digram[1] = 'X';
        }

        digrams.push(digram);
    }

    return digrams;
}

/**
 * Get the row and column of a digram array from an encryption matrix.
 *
 * @param {Array} digram An array containing 2 elements
 * @param {Array} matrix A 5x5 encryption matrix
 *
 * @return {Object} Contains properties a and b that contain the row and column of the first and second elements of the digram respectively.
 */
function getRowCol(digram, matrix) {
    let a, b;
    for (let i = 0; i < matrix.length; i++) {
        const col = matrix[i].indexOf(digram[0]);
        if (col >= 0) {
            a = { row: i, col };
            break;
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        const col = matrix[i].indexOf(digram[1]);
        if (col >= 0) {
            b = { row: i, col };
            break;
        }
    }

    return { a, b };
}

/**
 * Get a column of a multidimensional array when given its index.
 *
 * @param {Number} colIndex The index of the column to return
 * @param {Array} matrix The matrix from which the column is to be obtained
 *
 * @return {Array} Returns the column as an array.
 */
function getCol(colIndex, matrix) {
    let col = [];

    for (const i of matrix) {
        col.push(i[colIndex]);
    }

    return col;
}

module.exports = { generateMatrix, generateDigrams, getRowCol, getCol };
