function toggleSidebar() {
    document.querySelector('.nav-links').classList.toggle('show');
}

document.addEventListener('DOMContentLoaded', () => {
    const toggles = document.querySelectorAll('.dropdown-toggle');

    toggles.forEach(toggle => {
    const parent = toggle.closest('.dropdown');
    const menu = parent.querySelector('.dropdown-content');

    toggle.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        document.querySelectorAll('.dropdown-content').forEach(m => {
        if (m !== menu) m.style.display = 'none';
        });
        menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    });
    });

    document.addEventListener('click', () => {
    document.querySelectorAll('.dropdown-content').forEach(menu => menu.style.display = 'none');
    });
});
