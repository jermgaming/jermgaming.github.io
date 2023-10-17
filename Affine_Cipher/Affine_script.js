function encrypt() {
    const message = document.getElementById("message").value;
    const a = parseInt(document.getElementById("a").value);
    const b = parseInt(document.getElementById("b").value);
    const encryptedMessage = affineEncrypt(message, a, b);
    document.getElementById("result").textContent = `Encrypted Message: ${encryptedMessage}`;
  }
  
  function decrypt() {
    const message = document.getElementById("message").value;
    const a = parseInt(document.getElementById("a").value);
    const b = parseInt(document.getElementById("b").value);
    const decryptedMessage = affineDecrypt(message, a, b);
    document.getElementById("result").textContent = `Decrypted Message: ${decryptedMessage}`;
  }
  
  function affineEncrypt(plainText, a, b) {
    return plainText
      .toUpperCase()
      .split('')
      .map(char => {
        if (char.match(/[A-Z]/)) {
          const charCode = char.charCodeAt(0) - 65;
          const encryptedCharCode = (a * charCode + b) % 26;
          return String.fromCharCode(encryptedCharCode + 65);
        }
        return char;
      })
      .join('');
  }
  
  function modInverse(a, m) {
    for (let x = 1; x < m; x++) {
      if ((a * x) % m === 1) return x;
    }
    return 1;
  }
  
  function affineDecrypt(cipherText, a, b) {
    const aInverse = modInverse(a, 26);
    return cipherText
      .toUpperCase()
      .split('')
      .map(char => {
        if (char.match(/[A-Z]/)) {
          const charCode = char.charCodeAt(0) - 65;
          const decryptedCharCode = (aInverse * (charCode - b + 26)) % 26;
          return String.fromCharCode(decryptedCharCode + 65);
        }
        return char;
      })
      .join('');
  }
  