function encrypt() {
    const plaintext = document.getElementById('plaintext').value.toUpperCase();
    const key = document.getElementById('key').value.toUpperCase();

    if (!isValidKey(key)) {
        alert('Invalid key. Key must be a permutation of the alphabet.');
        return;
    }

    const ciphertext = substitute(plaintext, key);
    document.getElementById('result').innerText = `Encrypted Text: ${ciphertext}`;
}

function decrypt() {
    const ciphertext = document.getElementById('plaintext').value.toUpperCase();
    const key = document.getElementById('key').value.toUpperCase();

    if (!isValidKey(key)) {
        alert('Invalid key. Key must be a permutation of the alphabet.');
        return;
    }

    const plaintext = substitute(ciphertext, key, true);
    document.getElementById('result').innerText = `Decrypted Text: ${plaintext}`;
}

function isValidKey(key) {
    // Check if the key is a permutation of the alphabet
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return key.length === 26 && Array.from(key).every(char => alphabet.includes(char));
}

function substitute(text, key, reverse = false) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    return text
        .split('')
        .map(char => {
            if (char === ' ') {
                return ' '; // Leave spaces unchanged
            }

            const index = alphabet.indexOf(char);
            return reverse ? key[index] : alphabet[index];
        })
        .join('');
}