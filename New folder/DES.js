var encryptedText;
function encrypt() {
    var inputText = document.getElementById('inputText').value;
    var key = document.getElementById('key').value;

     encryptedText = CryptoJS.DES.encrypt(inputText, key).toString();
    document.getElementById('outputText').innerText = 'Encrypted Message: ' + encryptedText;
}

function decrypt() {
    var inputText = document.getElementById('outputText').value;
    var key = document.getElementById('key').value;

    var decryptedText = CryptoJS.DES.decrypt(encryptedText, key).toString(CryptoJS.enc.Utf8);
    document.getElementById('outputText').innerText = 'Decrypted Message: ' + decryptedText;
}
