import { getTheme, theme } from "./constants.js";

// Theme Actions

const themeBtn = document.querySelector('input#DLChecking') as HTMLInputElement
const body = document.querySelector('body') as HTMLBodyElement

function reloadTheme(themeSelect: theme){
    if(themeSelect === theme.dark) body.setAttribute('data-theme', 'ligth')
    else body.setAttribute('data-theme', 'dark')
}

function changeTheme(value: boolean) {
    const themeSelect = value ? theme.light : theme.dark
    localStorage.setItem('theme', themeSelect)
    reloadTheme(themeSelect)
}

(function (){
    const currentLang = getTheme()
    themeBtn.checked = currentLang !== theme.dark
    reloadTheme(currentLang)
})()

themeBtn.addEventListener('change', () => changeTheme(themeBtn.checked))