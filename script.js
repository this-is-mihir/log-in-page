const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');

// Toggle Sidebar
menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});
