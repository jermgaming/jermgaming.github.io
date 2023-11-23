function encrypt() {
    var plaintext = document.getElementById("plaintext").value;
    var key = document.getElementById("key").value;

    var encryptedText = ""; // Store the encrypted text

    // Check if the plaintext and key have the same length
    if (plaintext.length !== key.length) {
        alert("Plaintext and key must have the same length");
        return;
    }

    // Loop through each character in the plaintext and perform XOR operation with the corresponding character in the key
    for (var i = 0; i < plaintext.length; i++) {
        var plaintextChar = plaintext.charCodeAt(i);
        var keyChar = key.charCodeAt(i);
        var encryptedChar = plaintextChar ^ keyChar;
        encryptedText += String.fromCharCode(encryptedChar);
    }

    document.getElementById("encryptedText").textContent = encryptedText;
}

function decrypt() {
    var encryptedText = document.getElementById("encryptedText").textContent;
    var key = document.getElementById("key").value;

    var decryptedText = ""; // Store the decrypted text

    // Check if the encrypted text and key have the same length
    if (encryptedText.length !== key.length) {
        alert("Encrypted text and key must have the same length");
        return;
    }

    // Loop through each character in the encrypted text and perform XOR operation with the corresponding character in the key
    for (var i = 0; i < encryptedText.length; i++) {
        var encryptedChar = encryptedText.charCodeAt(i);
        var keyChar = key.charCodeAt(i);
        var decryptedChar = encryptedChar ^ keyChar;
        decryptedText += String.fromCharCode(decryptedChar);
    }

    document.getElementById("decryptedText").textContent = decryptedText;
}
    