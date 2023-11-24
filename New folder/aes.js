var encryptedText;
function encrypt() {
            var inputText = document.getElementById('inputText').value;
            var key = document.getElementById('key').value;
            encryptedText = CryptoJS.AES.encrypt(inputText, key).toString();
            document.getElementById('result').innerText = encryptedText;
        }

        function decrypt() {
            
            var key = document.getElementById('key').value;
            var decryptedText = CryptoJS.AES.decrypt(encryptedText, key).toString(CryptoJS.enc.Utf8);
            document.getElementById('result').innerText = decryptedText;
        }