import * as cipher from './cipher.js';


console.log(cipher);
//<img src="./bg-desktop.jpg" alt="Send Message" align ="top-center">//

const offset = document.getElementById("Displacement");
const box1 = document.getElementById("entertext");
const crip = document.getElementById("cript");
const box2 = document.getElementById("textexit");
const descrip = document.getElementById("descript");

crip.addEventListener("click", CodeAction);
descrip.addEventListener("click", DecodeAction);

function CodeAction() {
  box1.value = cipher.encode(parseInt(offset.value), box1.value);
}

function DecodeAction() {
  box2.value = cipher.decode(parseInt(offset.value), box1.value);
}