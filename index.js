import cipher from "./cipher.js";

const btnEncode = document.getElementById("btnEncode");
const btnDecode = document.getElementById("btnDecode");

btnEncode.addEventListener("click", function() {
  const valorDesloc = parseInt(document.querySelector("#Displacement").value);
  const msgInserida = document.querySelector("#textoInserido").value;
  const msgInseridaEmMaiusculas = msgInserida.toUpperCase();

  const msgCodificada = cipher.encode(valorDesloc, msgInseridaEmMaiusculas);
  document.getElementById("textoResultado").value = msgCodificada;
});

btnDecode.addEventListener("click", function() {
  const valorDesloc = parseInt(document.querySelector("#Displacement").value);
  const msgInserida = document.querySelector("#textoInserido").value;
  const msgInseridaEmMaiusculas = msgInserida.toUpperCase();

  const msgDecodificada = cipher.decode(valorDesloc, msgInseridaEmMaiusculas);
  document.getElementById("textoResultado").value = msgDecodificada;
});
