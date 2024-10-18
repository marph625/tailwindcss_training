document.addEventListener('click', function(event) {

    let closingButton = event.target.closest('button')
    let card = event.target.closest('.card')

    if (!closingButton || !card) return;

    if (card && closingButton) {
        card.style.display = "none";
        console.log("closed");
    }
});