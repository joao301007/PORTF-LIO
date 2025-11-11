document.addEventListener('DOMContentLoaded', () => {
    
    const themeToggle = document.getElementById('toggleTheme');
    const themeIcon = document.getElementById('themeIcon');
    const body = document.body;

    
    const sunIconPath = 'https://joao301007.github.io/PORTF-LIO/assets/sun.png';
    const moonIconPath = 'https://joao301007.github.io/PORTF-LIO/assets/moon.png';

    function applyTheme(theme) {
        if (theme === 'dark') {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            
            themeIcon.src = "https://joao301007.github.io/PORTF-LIO/assets/sun.png";
            themeIcon.alt = 'Ícone do Sol para ativar o modo claro';
        } else {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
         
            themeIcon.src = "https://joao301007.github.io/PORTF-LIO/assets/moon.png";
            themeIcon.alt = 'Ícone da Lua para ativar o modo escuro';
        }
    }

   
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);

    
    themeToggle.addEventListener('click', () => {
      
        const currentTheme = body.classList.contains('dark-mode') ? 'dark' : 'light';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';

       
        applyTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    });

});

