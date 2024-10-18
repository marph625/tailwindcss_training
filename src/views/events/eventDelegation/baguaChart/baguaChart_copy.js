let selectedTd;

let table = document.getElementById("bagua-table");

table.onclick = function(event) {
    // let target = event.target; // where was the click?
    //
    // while (target !== this) {
    //     if (target.tagName === 'td') {
    //         highlight(target);
    //         console.log("click");
    //         return;
    //     }
    //     target = target.parentNode;
    // }

    let td = event.target.closest('td'); // (1)

    if (!td) return; // (2)

    if (!table.contains(td)) return; // (3)

    highlight(td); // (4)

    console.log("Click");

};

function highlight(td) {
    if (selectedTd) { // remove the existing highlight if any
        selectedTd.classList.remove('highlight');
    }
    selectedTd = td;
    selectedTd.classList.add('highlight');
}