const caeserEncrypt = (plainText) => {
  let cipherText = '';
  [...plainText].forEach((character) => {
    const newCharacterAscii = (character.charCodeAt() + 3) % 127;

    if (newCharacterAscii < 32) {
      cipherText += String.fromCharCode(32 + newCharacterAscii);
    } else {
      cipherText += String.fromCharCode(newCharacterAscii);
    }
  });

  return cipherText;
};

const caeserDecrypt = (cipherText) => {
  let plainText = '';
  [...cipherText].forEach((character) => {
    const originalCharacterAscii = (character.charCodeAt() - 3) % 127;

    if (originalCharacterAscii < 32) {
      plainText += String.fromCharCode(127 - (32 - originalCharacterAscii));
    } else {
      plainText += String.fromCharCode(originalCharacterAscii);
    }
  });

  return plainText;
};

module.exports = { caeserEncrypt, caeserDecrypt };
