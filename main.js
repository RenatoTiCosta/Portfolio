const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  if (body.classList.contains('light-theme')) {
    body.classList.replace('light-theme', 'dark-theme');
  } else {
    body.classList.replace('dark-theme', 'light-theme');
  }
});
