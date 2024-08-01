document.getElementById('actualizar').textContent = new Date().getFullYear();

document.addEventListener("DOMContentLoaded", function() {
    const darkmodeButton = document.getElementById('darkmode');
    const modeImage = document.getElementById('modeImage');
    const footerModeImage = document.getElementById('footerModeImage');

    const applyTheme = (isDark) => {
        if (isDark) {
            document.documentElement.classList.add('dark');
            if (modeImage) {
                modeImage.src = 'img/logo.svg';
                modeImage.alt = 'Dark Mode Image';
            }
            if (footerModeImage) {
                footerModeImage.src = 'img/logo.svg';
                footerModeImage.alt = 'Dark Mode Image';
            }
        } else {
            document.documentElement.classList.remove('dark');
            if (modeImage) {
                modeImage.src = 'img/logo-modo-claro.svg';
                modeImage.alt = 'Light Mode Image';
            }
            if (footerModeImage) {
                footerModeImage.src = 'img/logo-modo-claro.svg';
                footerModeImage.alt = 'Light Mode Image';
            }
        }
    };

    // Detect system theme
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

    // Apply the theme on load
    applyTheme(prefersDarkScheme.matches);

    // Add listener for theme changes
    prefersDarkScheme.addEventListener('change', (e) => {
        applyTheme(e.matches);
    });

    // Toggle theme on button click
    if (darkmodeButton) {
        darkmodeButton.addEventListener('click', () => {
            const isDark = document.documentElement.classList.toggle('dark');
            applyTheme(isDark);
        });
    }
});

