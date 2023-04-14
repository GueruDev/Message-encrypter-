import { getTheme, theme } from "./constants.js";
// Theme Actions
const themeBtn = document.querySelector('input#DLChecking');
const body = document.querySelector('body');
function reloadTheme(themeSelect) {
    if (themeSelect === theme.dark)
        body.classList.add('dark');
    else
        body.classList.remove('dark');
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
