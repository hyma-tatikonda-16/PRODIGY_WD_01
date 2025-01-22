// Function to add "scrolled" class to navbar when the page is scrolled
window.onscroll = function() {
    const navbar = document.getElementById('navbar');
    
    // Check if the page has been scrolled down by more than 50px
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
};
