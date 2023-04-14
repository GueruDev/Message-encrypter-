export var lang;
(function (lang) {
    lang["es"] = "spanish";
    lang["en"] = "english";
})(lang || (lang = {}));
export var theme;
(function (theme) {
    theme["light"] = "l";
    theme["dark"] = "d";
})(theme || (theme = {}));
const defaultDictionary = Object.freeze({
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat",
});
const defaultLanguage = lang.es;
const defaultTheme = theme.light;
window["currentDictionary"] = Object.assign({}, defaultDictionary);
window["currentLanguage"] = localStorage.getItem('lang') ?? defaultLanguage;
window["theme"] = localStorage.getItem('theme') ?? defaultTheme;
export const getLanguage = () => {
    return window["currentLanguage"];
};
export const getTheme = () => {
    return window["theme"];
};
export const getDictionary = () => {
    return window["currentDictionary"];
};
