document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // 1. TERMINAL AUTO-TYPING ENGINE
    // ==========================================
    const phrases = [
        "Cybersecurity Student...",
        "Ethical Hacker...",
        "Aspiring Penetration Tester...",
        "Red Team Enthusiast..."
    ];
    let phraseIndex = 0;
    let characterIndex = 0;
    let currentPhrase = "";
    let isDeleting = false;
    const typingTarget = document.getElementById("typing-text");

    function typeTerminal() {
        if (!typingTarget) return;

        currentPhrase = phrases[phraseIndex];

        if (isDeleting) {
            characterIndex--;
        } else {
            characterIndex++;
        }

        typingTarget.textContent = currentPhrase.substring(0, characterIndex);

        let typingSpeed = isDeleting ? 40 : 80;

        if (!isDeleting && characterIndex === currentPhrase.length) {
            typingSpeed = 2000; // Pause at full string completion
            isDeleting = true;
        } else if (isDeleting && characterIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typingSpeed = 400; // Delay before starting next word
        }

        setTimeout(typeTerminal, typingSpeed);
    }
    typeTerminal();


    // ==========================================
    // 2. RESPONSIVE MOBILE NAVBAR HAMBURGER
    // ==========================================
    const mobileMenuBtn = document.getElementById("mobile-menu");
    const navLinksList = document.querySelector(".nav-links");

    if (mobileMenuBtn && navLinksList) {
        mobileMenuBtn.addEventListener("click", () => {
            navLinksList.classList.toggle("active");
            const icon = mobileMenuBtn.querySelector("i");
            icon.classList.toggle("fa-bars");
            icon.classList.toggle("fa-xmark");
        });

        // Close menu panel if a navigation item is clicked
        document.querySelectorAll(".nav-links a").forEach(link => {
            link.addEventListener("click", () => {
                navLinksList.classList.remove("active");
                const icon = mobileMenuBtn.querySelector("i");
                icon.classList.add("fa-bars");
                icon.classList.remove("fa-xmark");
            });
        });
    }


    // ==========================================
    // 3. SMOOTH SCROLL REVEAL ENGINE
    // ==========================================
    const revealElements = document.querySelectorAll("section, .project-card, .skill-card");
    
    // Inject core scroll element trigger architecture classes dynamically
    revealElements.forEach(el => el.classList.add("reveal"));

    function runScrollReveal() {
        const triggerPoint = (window.innerHeight / 5) * 4.3;

        revealElements.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;
            if (itemTop < triggerPoint) {
                item.classList.add("active");
            }
        });
    }
    
    window.addEventListener("scroll", runScrollReveal);
    runScrollReveal(); // Trigger immediately to capture viewport state


    // ==========================================
    // 4. INTERACTIVE 3D PARALLAX TILT ACTION
    // ==========================================
    const activeCards = document.querySelectorAll(".project-card, .skill-card");

    activeCards.forEach(card => {
        card.addEventListener("mousemove", (e) => {
            const boundary = card.getBoundingClientRect();
            const mouseX = e.clientX - boundary.left - (boundary.width / 2);
            const mouseY = e.clientY - boundary.top - (boundary.height / 2);
            
            const intensityFactor = 10; 
            const computeTiltX = (mouseY / boundary.height) * -intensityFactor;
            const computeTiltY = (mouseX / boundary.width) * intensityFactor;

            card.style.transform = `rotateX(${computeTiltX}deg) rotateY(${computeTiltY}deg) translateY(-5px)`;
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "rotateX(0deg) rotateY(0deg) translateY(0)";
        });
    });
});