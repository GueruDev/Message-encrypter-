import { getDictionary } from './constants.js';

// Basic Function

const normalizeText = (
    value: string
    ) => value.toLowerCase().normalize('NFD').replaceAll(/[\u0300-\u036f]/g, "")


// Encrypted
function encrypted (value: string, dict: Record <string, string>) :string {
    let newString = normalizeText(value);
    Object.keys(dict).forEach(letter => {
        newString = newString.replaceAll(letter, dict[letter])
    });
    return newString;
}

// Decrypted
function decrypted (value: string, dict: Record <string, string>) :string {
    let newString = normalizeText(value);
    Object.keys(dict).forEach(letter => {
        newString = newString.replaceAll(dict[letter], letter)
    });
    return newString;
}

// Buttons (Encrypted & Decrypted)

const encryptBtn = document.querySelector('button#encrypt') as HTMLButtonElement;
const decryptBtn = document.querySelector('button#decrypt') as HTMLButtonElement;
const copyBtn = document.querySelector('button#copy') as HTMLButtonElement;

// Textareas

const textInput = document.querySelector('textarea#inputText') as HTMLTextAreaElement;
const textOutput = document.querySelector('textarea#outputText') as HTMLTextAreaElement;

// Other Items

const cardItems = document.querySelectorAll('.card-items');
const imageMunneco = document.querySelector('img#munneco') as HTMLImageElement;
// Insert text in textarea output

const insertTextOutput = (
    inputText: string,
    decoder: (textTransform: string, dict: Record<string, string>) => string,
    dict: Record<string, string>
) => {
    /*
        Insert code change div class card-output
    */
    copyBtn.classList.remove('none')
    textOutput.classList.remove('none')

    imageMunneco.style.display = 'none'
    cardItems.forEach(el => el.classList.add('none'))
    textOutput.value = decoder(inputText, dict).toUpperCase()
}

// Onclick buttons event

encryptBtn.onclick = () => insertTextOutput(textInput.value ,encrypted, getDictionary())
decryptBtn.onclick = () => insertTextOutput(textInput.value ,decrypted, getDictionary())
copyBtn.onclick = async () => {
    try {
        navigator.clipboard.writeText(textOutput.value)
    }
    catch (err) {
        console.error(err)
    }
}


