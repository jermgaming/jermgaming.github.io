function encrypt() {
    const message = document.getElementById("message").value;
    const key = document.getElementById("key").value;
    const encryptedMessage = playfairEncrypt(message, key);
    document.getElementById("result").textContent = `Encrypted Message: ${encryptedMessage}`;
  }
  
  function decrypt() {
    const message = document.getElementById("message").value;
    const key = document.getElementById("key").value;
    const decryptedMessage = playfairDecrypt(message, key);
    document.getElementById("result").textContent = `Decrypted Message: ${decryptedMessage}`;
  }
  
  function playfairEncrypt(plainText, key) {
    const matrix = createPlayfairMatrix(key);
    const preparedText = preparePlayfairText(plainText);
    let encryptedText = '';
    
    for (let i = 0; i < preparedText.length; i += 2) {
      const pair = preparedText.slice(i, i + 2);
      const firstChar = pair[0];
      const secondChar = pair[1];
      const [row1, col1] = findCharInMatrix(matrix, firstChar);
      const [row2, col2] = findCharInMatrix(matrix, secondChar);
      let encryptedPair = '';
  
      if (row1 === row2) {
        encryptedPair += matrix[row1][(col1 + 1) % 5];
        encryptedPair += matrix[row2][(col2 + 1) % 5];
      } else if (col1 === col2) {
        encryptedPair += matrix[(row1 + 1) % 5][col1];
        encryptedPair += matrix[(row2 + 1) % 5][col2];
      } else {
        encryptedPair += matrix[row1][col2];
        encryptedPair += matrix[row2][col1];
      }
  
      encryptedText += encryptedPair;
    }
  
    return encryptedText;
  }
  
  function playfairDecrypt(cipherText, key) {
    const matrix = createPlayfairMatrix(key);
    let decryptedText = '';
  
    for (let i = 0; i < cipherText.length; i += 2) {
      const pair = cipherText.slice(i, i + 2);
      const firstChar = pair[0];
      const secondChar = pair[1];
      const [row1, col1] = findCharInMatrix(matrix, firstChar);
      const [row2, col2] = findCharInMatrix(matrix, secondChar);
      let decryptedPair = '';
  
      if (row1 === row2) {
        decryptedPair += matrix[row1][(col1 - 1 + 5) % 5];
        decryptedPair += matrix[row2][(col2 - 1 + 5) % 5];
      } else if (col1 === col2) {
        decryptedPair += matrix[(row1 - 1 + 5) % 5][col1];
        decryptedPair += matrix[(row2 - 1 + 5) % 5][col2];
      } else {
        decryptedPair += matrix[row1][col2];
        decryptedPair += matrix[row2][col1];
      }
  
      decryptedText += decryptedPair;
    }
  
    return decryptedText;
  }
  
  function createPlayfairMatrix(key) {
    // Create a 5x5 matrix using the provided key
    const alphabet = "ABCDEFGHIKLMNOPQRSTUVWXYZ"; // Note: No 'J' in the matrix
    key = key.toUpperCase().replace(/J/g, 'I'); // Convert to uppercase and replace 'J' with 'I'
    const uniqueChars = Array.from(new Set(key + alphabet));
    const matrix = [];
    
    for (let i = 0; i < 5; i++) {
      matrix[i] = [];
      for (let j = 0; j < 5; j++) {
        matrix[i][j] = uniqueChars[i * 5 + j];
      }
    }
  
    return matrix;
  }
  
  function preparePlayfairText(text) {
    // Prepare the input text for encryption
    text = text.toUpperCase().replace(/J/g, 'I'); // Convert to uppercase and replace 'J' with 'I'
    const preparedText = text.replace(/[^A-Z]/g, ''); // Remove non-alphabet characters
    // Ensure the text has an even length by appending 'X' if necessary
    if (preparedText.length % 2 !== 0) {
      preparedText += 'X';
    }
    return preparedText;
  }
  
  function findCharInMatrix(matrix, char) {
    // Find the row and column of a character in the matrix
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if (matrix[i][j] === char) {
          return [i, j];
        }
      }
    }
    return [-1, -1];
  }
  
  