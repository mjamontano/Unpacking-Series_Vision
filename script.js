// Get the button
const scrollUpBtn = document.getElementById('scrollUpBtn');

// Show the button when the user scrolls down
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollUpBtn.style.display = 'block';  // Show the button
    } else {
        scrollUpBtn.style.display = 'none';  // Hide the button
    }
};

// Scroll to the top of the page when the button is clicked
scrollUpBtn.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};
