document.addEventListener('DOMContentLoaded', () => {
    let closeButtons = document.querySelectorAll(".close-button");

    // I needed the foreach-function here. Neat.
    closeButtons.forEach(closeButton => {
        closeButton.onclick = () => {
            // closest is new to me
            // so all buttons that the querySelector can find are put into a variable
            // for each of them a variable 'card' is declared and the closest card it finds is assigned to it
            // if there is a card, it's display will be set to 'none'
            let card = closeButton.closest(".card");
            if (card) {
                // how to do it in plain html/css, not tailwind
                card.style.display = "none";
                console.log("X clicked")
            }
        }
    })
});

