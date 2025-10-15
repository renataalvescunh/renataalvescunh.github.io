        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');

        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('nav-active');
            hamburger.classList.toggle('toggle');
        });
        document.addEventListener('click', function (event) {
            const isHamburger = hamburger.contains(event.target);
            const isNav = navLinks.contains(event.target);
            if (!isHamburger && !isNav) {
                navLinks.classList.remove('nav-active');
                hamburger.classList.remove('toggle');
            }
        });