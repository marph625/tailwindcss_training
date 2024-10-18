let table = document.getElementById("bagua-table");
let originalBgClass = null;
let selectedTd;

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

   // if (!table.contains(td)) return; // (3)

    highlight(td); // (4)

    console.log(td);

};



function highlight(td) {
    if (selectedTd === td) {
        // If the clicked cell is already highlighted, remove the highlight
        selectedTd.classList.remove('bg-red-600');

        if (originalBgClass) {
            selectedTd.classList.add(originalBgClass)
        }

        selectedTd = null; // Deselect
        originalBgClass = null; // Clear stored original class

    } else {
        // Remove the highlight from the previous cell if any

        if (selectedTd) {
            selectedTd.classList.remove('bg-red-600');

            if (originalBgClass) {
                selectedTd.classList.add(originalBgClass);
            }
        }
        // Store the original background class of the new cell
        originalBgClass = Array.from(td.classList).find((className) => className.startsWith('bg-'));

        // Highlight the new cell
        selectedTd = td;
        removeBackgroundClass(td);
        selectedTd.classList.add('bg-red-600');
    }
}

function removeBackgroundClass(element) {
    element.classList.forEach((className) => {
        if (className.startsWith('bg-')) {
            selectedTd.classList.remove(className)
        }
    });
}