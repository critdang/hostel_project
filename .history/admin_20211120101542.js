document.querySelectorAll('.sidebar-submenu').forEach(e => {
    e.querySelector('.sidebar-menu-dropdown').onclick = (event) => {
        event.preventDefault();
        e.querySelector('.sidebar-menu-dropdown .dropdown-icon').classList.toggle('active');
    }
})