import cipher from './cipher.js';

console.log(cipher);
//<img src="./bg-desktop.jpg" alt="Send Message" align ="top-center">//

const offset = document.getElementById("Displacement");
const box1 = document.getElementById("entertext");
const crip = document.getElementById("cript");
const box2 = document.getElementById("textexit");
const descrip = document.getElementById("descript");

crip.addEventListener("click", Codeaction);
descrip.addEventListener("click", Decodeaction);

function Codeaction() {
  box1.value = cipher.encode(parseInt(offset.value), box1.value);
}

function Decodeaction() {
  box2.value = cipher.decode(parseInt(offset.value), box1.value);
}