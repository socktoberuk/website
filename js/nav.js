function toggleNav() {
    
    const parentNav = document.querySelectorAll('.custom-nav');

    parentNav.forEach(nav => nav.classList.toggle('show'));
    
    const navs = document.querySelectorAll('.cnav-item.right');

    navs.forEach(nav => nav.classList.toggle('show'));


}