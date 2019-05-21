# Cryptography

[![Build Status](https://travis-ci.org/KengoWada/Cryptography.svg?branch=master)](https://travis-ci.org/KengoWada/Cryptography) [![Coverage Status](https://coveralls.io/repos/github/KengoWada/Cryptography/badge.svg?branch=master)](https://coveralls.io/github/KengoWada/Cryptography?branch=master) [![Maintainability](https://api.codeclimate.com/v1/badges/747ce3b236ae76761589/maintainability)](https://codeclimate.com/github/KengoWada/Cryptography/maintainability)

My journey learning cryptography. I am using [CommonLoungue](https://www.commonlounge.com) to learn cryptography. The course is free.

A lot of the notes below are copied and pasted from the material provided by CommonLoungue. For more detailed information please refer to their material

## Intro

Cryptography deals with a set of methods which enable us to store and transmit information while safeguarding it from intruders.

[Link](https://www.commonlounge.com/discussion/9570cd139bc3406d91127acc49d1b5ba) to detailed info

### Branches of Cryptography

- **Cryptology** - is an umbrella term for the fields of cryptography and cryptanalysis

- **Cryptography** - is the area of cryptology related to the creation of new codes and ciphers.

- **Cryptanalysis** - is the art and science of breaking ciphers.

- **Steganography** - is the science of hiding information "in plain sight".

### Goals of Cryptography

- **Confidentiality** - means that cryptographic algorithms attempt to keep the contents of a message secret.

- **Integrity** - means that a cryptographic algorithm verifies that a message was not modified in transit.

- **Authentication** - means that a cryptographic algorithm verifies that a message is sent by the entity that claims to have sent the message

- **Non-repudiation** - means that the sender can not deny sending a message

### Kerckhoff's Principle

> A cryptosystem should be secure even if everything about the system, except the key, is public knowledge.

## Cryptosystems Components and Design objectives

A cryptosystem is a pair of algorithms: one for the encryption of data and another for decryption. Often these algorithms use a unique key which should be kept secret, in which case the process for generating and sharing the key is also considered part of the cryptosystem.

[Link](https://www.commonlounge.com/discussion/32080f88f1ee430293502876b90354ff) to detailed info

### Cryptography terms

- Plaintext - The original message in its original legible form

- Ciphertext - Encrypted text that will appear to be a random string

- Encryption - The process of converting data into its cryptic form that prevents unauthorized access

- Decryption - The process of converting encrypted data back into its original form for use

- Symmetric Key Cryptosystems - Cryptosystems that use the same key for encryption as well as decryption. Examples include:

  - Cipher - A system of encryption that maps each character to a substitute

  - Code - A system of encryption that maps each word or feature to a substitute

  - Shift Cipher - A cipher that replaces each character with another chosen by moving forwards through the alphabet by some fixed shift factor

- Asymmetric or Public Key Cryptosystems - Cryptosystems that use public-private key pairs.

- Digital Signatures - A digital code which is attached to an electronically transmitted document to verify its contents and the sender's identity.

### Number Theory Terms

- Modulo - The remainder operator (e.g. 17 modulo 5 is 2, i.e. 17 when divided by 5 leaves a remainder of 2). This is often shortened to mod, we write 17 ≡ 2 (mod 5), read as "17 is congruent to 2, modulo 5".

- Coprime - In number theory two values are said to be coprime or relatively prime if they do not share any common prime factors. That’s to say that their greatest common divisor (GCD) or highest common factor is 1.

### Design Objectives and Goals

The design objectives of a cryptosystem can be summarized by **Kerckhoff’s Priniciple**

### Symmetric Cryptosystems

These use the same key for encryption and decryption.

### Asymmetric Cryptosystems

These are cryptosystems where the encryption key differs from the decryption key.

## The Caesar Cipher

- In the Caesar cipher, each letter of a message is replaced by the letter three steps to the right of it in the alphabet. For example, A is replaced by D, B by E, etc. The shift "wraps" around the alphabet so that X is replaced by A, Y is replaced by B, and Z is replaced by C.

- To decode a message encrypted with a Caesar cipher, it is necessary to shift each letter in the ciphertext left by three steps to reach the original plaintext letter, so A becomes X, D becomes A, etc.

- Since this does not account for special characters such as **`'%', '*'`**, I will be using ASCII values from **`32`** to **`126`**

- Certain character such as **`'ð', '̉ß'`** are not catered for

### Example

```
plaintext - 'Kengo'
'K' - 'N'
'e' - 'h'
'n' - 'q'
'g' - 'j'
'o' - 'r'
ciphertext - 'Nhqjr'
```

## Implementation

I will be implementing the algorithms in JavaScript.

## Getting started

- Clone the repo

- `cd Cryptography`

- Run `npm install`

- Now run `npm start` and follow the prompts

- Also run `npm test` to run the tests

## Contributing

- Fork the repo

- Make the changes and write tests that pass

- Document your changes at the bottom of the README

- Create a pull request and add your name to the authors list

### Authors

- [Kengo Wada](https://githb.com/KengoWada)
