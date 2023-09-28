// You can add interactive JavaScript here if needed
document.addEventListener("DOMContentLoaded", function() {
    // Example: Adding event listener to each card
    let cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', function() {
            alert('Card Clicked!');
        });
    });
});
