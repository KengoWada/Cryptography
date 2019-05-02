# Using Python3


def encrypt(plain_text):
    cipher_text = ''
    for character in plain_text:
        new_character_ascii = (ord(character) + 3) % 127

        if new_character_ascii < 32:
            new_character = chr(32 + new_character_ascii)
            cipher_text += new_character
        else:
            cipher_text += chr(new_character_ascii)

    return cipher_text


def decrypt(cipher_text):
    plain_text = ''
    for character in cipher_text:
        original_character_ascii = (ord(character) - 3) % 127

        if original_character_ascii < 32:
            new_character = chr(127 - (32 - original_character_ascii))
            plain_text += new_character
        else:
            plain_text += chr(original_character_ascii)

    return plain_text


if __name__ == '__main__':
    while True:
        print('Type 0 for Encryption and 1 for decryption')
        try:
            enc_dec = int(input('Enter 0 or 1: '))
        except ValueError:
            print('Error! This is not a number. Try again')
        else:
            if enc_dec == 0:
                plain_text = input('Enter plain text to encrypt: ')
                print(encrypt(plain_text))
            elif enc_dec == 1:
                cipher_text = input('Enter cipher text to decrypt: ')
                print(decrypt(cipher_text))
            else:
                print('Input 0 or 1')
            break
