document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    toggleButton.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
    
    toggleButton.addEventListener('click', () => {
      let theme = document.documentElement.getAttribute('data-theme');
      theme = theme === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
      toggleButton.textContent = theme === 'dark' ? '☀️' : '🌙';
    });
  });
  