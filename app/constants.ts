declare const window: any

export interface wordComponent {
    'es': string
    'en': string
    'data': string
    'type': 'placeholder' | 'inner'
}

export enum lang {
    es = 'spanish',
    en = 'english'
}

export enum theme {
    light = 'l',
    dark = 'd'
}

const defaultDictionary: Record<string, string> = Object.freeze({
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat",
})

const defaultLanguage = lang.es
const defaultTheme = theme.light

window["currentDictionary"] = Object.assign({}, defaultDictionary)
window["currentLanguage"] = localStorage.getItem('lang') ?? defaultLanguage as lang
window["theme"] = localStorage.getItem('theme') ?? defaultTheme as theme

export const getLanguage = () => {
    return window["currentLanguage"] as lang
}

export const getTheme = () => {
    return window["theme"] as theme
}

export const getDictionary = ()=> {
    return window["currentDictionary"] as Record<string, string>
}
