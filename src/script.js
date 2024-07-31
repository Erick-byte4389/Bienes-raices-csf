document.getElementById('actualizar').textContent = new Date().getFullYear();

const darkmodeButton = document.getElementById('darkmode');
darkmodeButton.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    if (document.documentElement.classList.contains('dark')) {
        modeImage.src = 'img/logo.svg';
        modeImage.alt = 'Dark Mode Image';
    } else {
        modeImage.src = 'img/logo-modo-claro.svg';
        modeImage.alt = 'Light Mode Image';
    }
});