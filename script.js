// Show an alert when a section button is clicked
function showAlert(section) {
    alert("You clicked on the " + section + " section button.");
}

// Show Back to Top button when scrolling down
window.onscroll = function() {
    const backToTopButton = document.getElementById('backToTop');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
};

// Scroll to the top of the page
function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}

// Toggle dark mode
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    alert("Dark mode has been " + (body.classList.contains('dark-mode') ? "enabled" : "disabled") + ".");
}

// Show a random motivational quote
function showRandomQuote() {
    const quotes = [
        "Believe you can and you're halfway there.",
        "Don't watch the clock; do what it does. Keep going.",
        "The best way to predict the future is to create it.",
        "Success is not how high you have climbed, but how you make a positive difference."
    ];
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    alert(randomQuote);
}
