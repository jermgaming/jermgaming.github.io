function encrypt() {
    const message = document.getElementById("message").value;
    const shift = parseInt(document.getElementById("shift").value);
    const encryptedMessage = caesarCipher(message, shift);
    document.getElementById("result").textContent = `Encrypted Message: ${encryptedMessage}`;
  }
  
  function decrypt() {
    const message = document.getElementById("message").value;
    const shift = parseInt(document.getElementById("shift").value);
    const decryptedMessage = caesarCipher(message, -shift);
    document.getElementById("result").textContent = `Decrypted Message: ${decryptedMessage}`;
  }
  
  function caesarCipher(str, shift) {
    return str
      .split("")
      .map((char) => {
        if (char.match(/[a-z]/i)) {
          const code = char.charCodeAt(0);
          const isUpperCase = char === char.toUpperCase();
          const offset = isUpperCase ? 65 : 97;
          const shifted = (code - offset + shift) % 26;
          return String.fromCharCode(offset + (shifted + 26) % 26);
        }
        return char;
      })
      .join("");
  }
  