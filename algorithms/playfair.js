const {
    generateDigrams,
    generateMatrix,
    getCol,
    getRowCol,
} = require('../utils/playfairUtils');
const { LETTERS_ARRAY } = require('../utils/constants');

function playfairEncrypt(plainText) {
    plainText = plainText.replace(/\s/g, '').toUpperCase();
    regex = /^[a-zA-Z]+$/;
    if (!regex.test(plainText)) {
        return {
            message: 'Invalid characters',
            error: 'Enter only letters in the English alphabet',
        };
    }

    const digrams = generateDigrams(plainText);
    const matrix = generateMatrix('COMMONLOUNGE', LETTERS_ARRAY);
    let cipherText = '';

    for (const i of digrams) {
        const result = getRowCol(i, matrix);

        // If they are in the same row
        if (result.a.row === result.b.row) {
            const row = matrix[result.b.row];
            const aIndex = (row.indexOf(i[0]) + 1) % 5;
            const bIndex = (row.indexOf(i[1]) + 1) % 5;
            cipherText += row[aIndex] + row[bIndex];
        }

        // If they are in the same column
        else if (result.a.col === result.b.col) {
            const col = getCol(result.b.col, matrix);
            const aIndex = (col.indexOf(i[0]) + 1) % 5;
            const bIndex = (col.indexOf(i[1]) + 1) % 5;
            cipherText += col[aIndex] + col[bIndex];
        }

        // If they are not in same row or column
        else {
            const aIndex = matrix[result.a.row][result.b.col];
            const bIndex = matrix[result.b.row][result.a.col];
            cipherText += aIndex + bIndex;
        }
    }

    return { message: 'Done', cipherText, plainText };
}

function playfairDecrypt(cipherText) {
    regex = /^[A-Z]+$/;
    if (!regex.test(cipherText)) {
        return {
            message: 'Invalid characters',
            error: 'Enter only letters in the English alphabet',
        };
    }

    const digrams = generateDigrams(cipherText);
    const matrix = generateMatrix('COMMONLOUNGE', LETTERS_ARRAY);
    let plainText = '';

    for (const i of digrams) {
        const result = getRowCol(i, matrix);

        // If they are in the same row
        if (result.a.row === result.b.row) {
            const row = matrix[result.b.row];
            const aIndex = (row.indexOf(i[0]) - 1 + 5) % 5;
            const bIndex = (row.indexOf(i[1]) - 1 + 5) % 5;
            plainText += row[aIndex] + row[bIndex];
        }

        // If they are in the same column
        else if (result.a.col === result.b.col) {
            const col = getCol(result.b.col, matrix);
            const aIndex = (col.indexOf(i[0]) - 1 + 5) % 5;
            const bIndex = (col.indexOf(i[1]) - 1 + 5) % 5;
            plainText += col[aIndex] + col[bIndex];
        }

        // If they are not in same row or column
        else {
            const aIndex = matrix[result.a.row][result.b.col];
            const bIndex = matrix[result.b.row][result.a.col];
            plainText += aIndex + bIndex;
        }
    }

    return { message: 'Done', cipherText, plainText };
}

module.exports = { playfairEncrypt, playfairDecrypt };

// console.log(playfairEncrypt('PLAYFAIRMESSAGE'));
// console.log(playfairDecrypt('TOINIGHSEHRYBEHM'));
