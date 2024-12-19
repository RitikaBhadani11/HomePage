function setTheme(theme) {
    const body = document.body;
    const themeImage = document.getElementById('theme-image');

    // Remove all theme-related classes
    body.classList.remove('light-theme', 'dark-theme');

    if (theme === 'dark') {
        body.classList.add('dark-theme');
        themeImage.style.display = 'block'; // Show image in dark mode
    } else {
        body.classList.add('light-theme'); // Default to light theme for 'light' and 'auto'
        themeImage.style.display = 'none'; // Hide image in light and auto modes
    }
}
