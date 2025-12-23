--- START OF FILE app.js ---

// 



// 


import "../css/style.css";

import "preline";


import AOS from 'aos';
import 'aos/dist/aos.css';

// Import the React entry point to render your component
import '../../react-entry.jsx'; // This will execute the React rendering logic

AOS.init();


// Function to handle navbar stickiness
function windowScroll() {
    const navbar = document.getElementById("navbar-sticky");
    if (navbar) {
        if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
            navbar.classList.add("active");
        } else {
            navbar.classList.remove("active");
        }
    }
}

// Combined scroll handler
window.addEventListener("scroll", () => {
    windowScroll();
});