    // TYPING TEXT ANIMATION

    const typed = new Typed(".spanname", {
    strings: ["Chan Klear Baylon", "Front-End Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
});

    // NAVBAR FIXED WHEN SCROLL

    document.addEventListener('DOMContentLoaded', () => {
        const navbar = document.querySelector('.header');
        const navbarHeight = navbar.offsetHeight;

        function navbarSticky() {
            if (window.pageYOffset > navbarHeight) {
                navbar.classList.add('navbarsticked');
            } else {
                navbar.classList.remove('navbarsticked');
                }
            }

        window.addEventListener('scroll', navbarSticky);
});

    // REVEAL ON SCROLL
        
    document.addEventListener('DOMContentLoaded', () => {
        const revealElements = document.querySelectorAll('.reveal');
    
        function revealOnScroll() {
            revealElements.forEach(function(element) {
                const revealPosition = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
    
                if (revealPosition < windowHeight / 1.3) {
                    element.classList.add('revealed');
                } 
            });
        }
    
        window.addEventListener('scroll', revealOnScroll);
});