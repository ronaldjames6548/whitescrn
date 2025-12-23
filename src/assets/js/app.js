import "../css/style.css";
import "preline";
import AOS from 'aos';
import 'aos/dist/aos.css';

import "../../react-entry.jsx"; 
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



