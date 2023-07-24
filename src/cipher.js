const cipher = {
  encode: function(offset, string) {
    if (typeof offset !== 'number' || typeof string !== 'string') {
      throw TypeError();
    } else {
      let msgCodificada = "";
      for (let i = 0, j = string.length; i < j; i++) {
        let charCode = string.charCodeAt(i);

        // Verifica se o caractere é uma letra maiúscula (código ASCII entre 65 e 90)
        if (charCode >= 65 && charCode <= 90) {
          let numAscii = ((charCode - 65 + offset) % 26) + 65;
          msgCodificada += String.fromCharCode(numAscii);
        } 
        // Verifica se o caractere é uma letra minúscula (código ASCII entre 97 e 122)
        else if (charCode >= 97 && charCode <= 122) {
          let numAscii = ((charCode - 97 + offset) % 26) + 97;
          msgCodificada += String.fromCharCode(numAscii);
        } 
        // Caso contrário, mantém o caractere inalterado
        else {
          msgCodificada += string[i];
        }
      }
      return msgCodificada;
    }
  },

    decode: function(offset, string) {
      if (typeof offset !== 'number' || typeof string !== 'string') {
        throw TypeError();
      } else {
        let msgDecodificada = "";
        for (let i = 0, j = string.length; i < j; i++) {
          let charCode = string.charCodeAt(i);
  
          // Verifica se o caractere é uma letra maiúscula (código ASCII entre 65 e 90)
          if (charCode >= 65 && charCode <= 90) {
            let numAscii = ((charCode - 65 - offset + 26) % 26) + 65;
            msgDecodificada += String.fromCharCode(numAscii);
          } 
          // Verifica se o caractere é uma letra minúscula (código ASCII entre 97 e 122)
          else if (charCode >= 97 && charCode <= 122) {
            let numAscii = ((charCode - 97 - offset + 26) % 26) + 97;
            msgDecodificada += String.fromCharCode(numAscii);
          } 
          // Caso contrário, mantém o caractere inalterado
          else {
            msgDecodificada += string[i];
          }
        }
        return msgDecodificada;
      }
    }
  };
  
  export default cipher
  