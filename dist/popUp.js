import { getDictionary } from './constants.js';
const dict = getDictionary();
const buttonPopUp = document.getElementById("buttonDictionary");
const popUp = document.getElementById("popUpDictionary");
const popUpContent = document.getElementById("popUpContent");
const popUpSave = document.getElementById("popUpSave");
const table = document.getElementById("dictionaryTable");
const populatePopUp = async () => {
    let htmlContent = "";
    for (const [key, value] of Object.entries(dict)) {
        htmlContent += `<li><input value="${key}"></input>: <input value="${value}"></input></li>`;
    }
    popUpContent.innerHTML = `<ul>${htmlContent}</ul>`;
};
const showPopUp = async () => {
    populatePopUp();
    popUp.showModal();
};
const popUpUpdateDictionary = async () => {
    const data = Array.from(popUpContent.querySelectorAll("input")).map(input => input.value);
    for (let i = 0; i < data.length; i += 2) {
        dict[data[i]] = data[i + 1];
    }
    popUp.close();
    // Update table
    let newTable = "";
    for (const [key, value] of Object.entries(dict)) {
        newTable += `<tr><th>${key}</th><th>${value}</th></tr>`;
    }
    table.innerHTML = newTable;
};
buttonPopUp.addEventListener("click", showPopUp, { passive: true });
popUpSave.addEventListener("click", popUpUpdateDictionary, { passive: true });
