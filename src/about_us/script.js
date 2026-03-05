// src/about_us/script.js

document.addEventListener('DOMContentLoaded', () => {
    const actionBtn = document.getElementById('action-btn');
    
    if (actionBtn) {
        actionBtn.addEventListener('click', () => {
            // Simple animation or interaction
            actionBtn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                actionBtn.style.transform = '';
                alert('¡Gracias por tu interés en nuestra historia!');
            }, 150);
        });
    }
});
