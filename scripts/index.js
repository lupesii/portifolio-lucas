const typeText = document.querySelector("#typed-text");
const texto = [
  "Olá, meu nome é Lucas Pereira",
  "Sou um desenvolvedor Full-Stack",
];
let indexChar = 0;
let indexSentence = 0;

const writeSpeed = 50;
const eraseSpeed = 30;
const pauseAfterWrite = 1000;
const pauseAfterErase = 500;

function write() {
  if (indexChar <= texto[indexSentence].length) {
    updateTexto();
    indexChar++;
    setTimeout(write, writeSpeed);
  } else {
    setTimeout(erase, pauseAfterWrite);
  }
}

function erase() {
  if (indexChar >= 0) {
    updateTexto();
    indexChar--;
    setTimeout(erase, eraseSpeed);
  } else {
    indexSentence = indexSentence === 1 ? 0 : 1;
    setTimeout(write, pauseAfterErase);
  }
}

function updateTexto() {
  typeText.textContent = texto[indexSentence].substring(0, indexChar);
}

write();
