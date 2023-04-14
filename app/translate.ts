import { lang, wordComponent, getLanguage } from './constants.js';
import { words } from './language.js';

const changeLangBtn = document.querySelector('input#tslChecking') as HTMLInputElement

function insertLangText(content: wordComponent, language: lang){
    if(content.type === 'placeholder'){
        const element = document.querySelector(`[data-lang="${content.data}"]`) as HTMLTextAreaElement;
        element.placeholder = language === lang.es ? content.es : content.en
    }
    else if(content.type === 'inner'){
        const element = document.querySelector(`[data-lang="${content.data}"]`) as HTMLElement;
        element.innerText = language === lang.es ? content.es : content.en
    }
}

function reloadLang(la: lang){
    Object.keys(words).forEach(key => {
        insertLangText(words[key], la)
    })
}

function changeLang(value: boolean){
    const langChange = value ? lang.es : lang.en 
    localStorage.setItem('lang', langChange)
    reloadLang(langChange)
}

(function (){
    const currentLang = getLanguage()
    changeLangBtn.checked = currentLang !== lang.en
    reloadLang(currentLang)
})()

changeLangBtn.addEventListener('change', () => changeLang(changeLangBtn.checked))