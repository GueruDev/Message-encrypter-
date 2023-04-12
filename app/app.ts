const dictionary: Record<string, string> = Object.freeze({
    "a": "ai",
    "e": "enter",
    "i": "imes",
    "o": "ober",
    "u": "ufat",
})

// Function to decrypter string with Dict
function encrypted (value: string, dict: Record <string, string>) :string {
    let newString = value;
    Object.keys(dict).forEach(letter => {
        newString = newString.replace(letter, dictionary[letter])
    });
    return newString;
}

function decrypted (value: string, dict: Record <string, string>) :string {
    let newString = value;
    Object.keys(dictionary).forEach(letter => {
        newString = newString.replace(letter, dictionary[letter])
    });
    return newString;
}

const encryptBtn = document.querySelector('button#encrypt') as HTMLButtonElement;
const decryptBtn = document.querySelector('button#decrypt') as HTMLButtonElement;

const textInput = document.querySelector('textarea#inputText') as HTMLTextAreaElement;
const textOutput = document.querySelector('textarea#outputText') as HTMLTextAreaElement;

const insertTextOutput = (
    inputText: string,
    decoder: (textTransform: string) => string
) => {
    const newValue = decoder(inputText)
    textOutput.value = newValue
    console.log(newValue)
}

encryptBtn.onclick = () => insertTextOutput(textInput.value ,encrypted)
decryptBtn.onclick = () => insertTextOutput(textInput.value ,decrypted)
