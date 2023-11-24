function xor(text, key) {
    const result = [];
    for (let i = 0; i < text.length; i++) {
        const charCodeText = text.charCodeAt(i);
        const charCodeKey = key.charCodeAt(i);
        const encryptedCharCode = charCodeText ^ charCodeKey;
        result.push(String.fromCharCode(encryptedCharCode));
    }
    return result.join('');
}

function encrypt() {
    const inputText = document.getElementById('inputText').value;
    const key = document.getElementById('key').value;

    if (inputText.length !== key.length) {
        alert("Input and key lengths must be the same.");
        return;
    }

    const encryptedText = xor(inputText, key);
    document.getElementById('outputText').value = encryptedText;
}

function decrypt() {
    const inputText = document.getElementById('inputText').value;
    const key = document.getElementById('key').value;

    if (inputText.length !== key.length) {
        alert("Input and key lengths must be the same.");
        return;
    }

    const decryptedText = xor(inputText, key);
    document.getElementById('outputText').value = decryptedText;
}