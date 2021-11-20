document.querySelectorAll('.sidebar-submenu').forEach(event => {
    event.querySelector('.sidebar-menu-dropdown').onclick = (event) => {
        event.preventDefault();
        event.querySelector('.sidebar-menu-dropdown .dropdown-icon').classList.toggle('active');
    }
})