const menubar = document.querySelector('#menu');
const Navbar = document.querySelector('.navbar');

menubar.onclick = () => {
    menubar.classList.toggle('bx-x');
    Navbar.classList.toggle('active')
}

const section = document.querySelectorAll('section');
const navlink = document.querySelectorAll('header nav a');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if (top >= offset && top < offset + height) {
            sec.classList.add('start-animation');
            
            navlink.forEach(links => {
                links.classList.remove('active');
            });
            
            const currentLink = document.querySelector('header nav a[href*=' + id + ']');
            if (currentLink) {
                currentLink.classList.add('active');
            }
        }
    });

    var header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);
    
    menubar.classList.remove('bx-x');
    Navbar.classList.remove('active');
}

document.querySelector('a[href="#projects"]').addEventListener('click', function(e) {
    e.preventDefault();
    const projectsSection = document.querySelector('#projects');
    const offset = projectsSection.offsetTop - 100;
    window.scrollTo({
        top: offset,
        behavior: 'smooth'
    });
});