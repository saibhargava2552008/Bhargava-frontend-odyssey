// 1. Loading Screen Timeout (Requirement #4 - Custom Loading)
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => loader.style.display = 'none', 500);
    }, 1500); // 1.5 seconds loading preview
});

// 2. GSAP Scroll Animations (Requirement #2 - Scroll Effects)
// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Animate each section content on scroll (Requirement #2 & #3)
gsap.utils.toArray('.content').forEach(content => {
    gsap.to(content, {
        scrollTrigger: {
            trigger: content,
            start: "top 80%", // Animation starts when 80% of section is visible
            toggleActions: "play none none reverse"
        },
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out"
    });
});

// 3. Interactive Elements Logic (Requirement #3 - Minimum 3 Interactions)

// Interaction 1: Bug Fix Button
const bugBtn = document.getElementById('bug-btn');
const bugStatus = document.getElementById('bug-status');
bugBtn.addEventListener('click', () => {
    bugStatus.innerText = "✅ Bug Fixed! (But 2 more appeared... just kidding)";
    bugBtn.style.backgroundColor = "#22c55e"; // Changes to green
});

// Interaction 2: Theme Toggle (Dark/Focus Mode)
const modeToggle = document.getElementById('mode-toggle');
modeToggle.addEventListener('change', () => {
    if(modeToggle.checked) {
        document.body.style.backgroundColor = "#020617";
        alert("Focus Mode Activated: Coffee consumption increased!");
    } else {
        document.body.style.backgroundColor = "#0f172a";
    }
});

// Interaction 3: Scroll Indicator Fade
gsap.to(".scroll-indicator", {
    opacity: 0,
    scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom center",
        scrub: true
    }
});