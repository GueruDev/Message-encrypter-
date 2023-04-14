import { getTheme, theme } from "./constants.js";
// Theme Actions
const themeBtn = document.querySelector('input#DLChecking');
const body = document.querySelector('body');
function reloadTheme(themeSelect) {
    if (themeSelect === theme.dark)
        body.setAttribute('data-theme', 'ligth');
    else
        body.setAttribute('data-theme', 'dark');
}
function changeTheme(value) {
    const themeSelect = value ? theme.light : theme.dark;
    localStorage.setItem('theme', themeSelect);
    reloadTheme(themeSelect);
}
(function () {
    const currentLang = getTheme();
    themeBtn.checked = currentLang !== theme.dark;
    reloadTheme(currentLang);
})();
themeBtn.addEventListener('change', () => changeTheme(themeBtn.checked));
