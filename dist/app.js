import { getDictionary } from './constants.js';
// Basic Function
const normalizeText = (value) => value.toLowerCase().normalize('NFD').replaceAll(/[\u0300-\u036f]/g, "");
// Encrypted
function encrypted(value, dict) {
    let newString = normalizeText(value);
    Object.keys(dict).forEach(letter => {
        newString = newString.replaceAll(letter, dict[letter]);
    });
    return newString;
}
// Decrypted
function decrypted(value, dict) {
    let newString = normalizeText(value);
    Object.keys(dict).forEach(letter => {
        newString = newString.replaceAll(dict[letter], letter);
    });
    return newString;
}
// Buttons (Encrypted & Decrypted)
const encryptBtn = document.querySelector('button#encrypt');
const decryptBtn = document.querySelector('button#decrypt');
const copyBtn = document.querySelector('button#copy');
// Textareas
const textInput = document.querySelector('textarea#inputText');
const textOutput = document.querySelector('textarea#outputText');
// Other Items
const cardItems = document.querySelectorAll('.card-items');
const imageMunneco = document.querySelector('img#munneco');
// Insert text in textarea output
const insertTextOutput = (inputText, decoder, dict) => {
    /*
        Insert code change div class card-output
    */
    copyBtn.classList.remove('none');
    textOutput.classList.remove('none');
    imageMunneco.style.display = 'none';
    cardItems.forEach(el => el.classList.add('none'));
    textOutput.value = decoder(inputText, dict).toUpperCase();
};
// Onclick buttons event
encryptBtn.onclick = () => insertTextOutput(textInput.value, encrypted, getDictionary());
decryptBtn.onclick = () => insertTextOutput(textInput.value, decrypted, getDictionary());
copyBtn.onclick = async () => {
    try {
        navigator.clipboard.writeText(textOutput.value);
    }
    catch (err) {
        console.error(err);
    }
};
