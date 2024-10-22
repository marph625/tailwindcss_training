document.addEventListener('DOMContentLoaded', function() {
    let dynamicTabs = document.querySelectorAll('.tab-content');
    let tabSelectors = document.querySelectorAll('.tab-selector');

    function loopyApproach(index) {
        dynamicTabs.forEach((tabContent, i) => {
            if (i === index) {
                tabContent.classList.add('flex');
                tabContent.classList.remove('hidden');
                tabSelectors[i].classList.add('font-bold');
            } else {
                tabContent.classList.add('hidden');
                tabContent.classList.remove('flex');
                tabSelectors[i].classList.remove('font-bold');
            }
        });
    }

    loopyApproach(0);

    tabSelectors.forEach((tab, index) => {
        tab.addEventListener('click', () => loopyApproach(index))
    })

    // document.addEventListener('click', function(event) {
    //
    //         bad_if_else(dynamicTabs, tabSelectors, event);
    // })
})

function bad_if_else(tabs, selectors, event) {
    let tab = event.target.closest('.tab-selector')
    if (tab === selectors[0]) {
        tabs[0].classList.add('flex');
        tabs[0].classList.remove('hidden');
        tabs[1].classList.add('hidden');
        tabs[2].classList.add('hidden');
        tabs[3].classList.add('hidden');

        selectors[0].classList.add('font-bold');
        selectors[1].classList.remove('font-bold');
        selectors[2].classList.remove('font-bold');
        selectors[3].classList.remove('font-bold');
    } else if (tab === selectors[1]) {
        tabs[1].classList.add('flex');
        tabs[1].classList.remove('hidden');
        tabs[0].classList.add('hidden');
        tabs[2].classList.add('hidden');
        tabs[3].classList.add('hidden');

        selectors[1].classList.add('font-bold');
        selectors[0].classList.remove('font-bold');
        selectors[2].classList.remove('font-bold');
        selectors[3].classList.remove('font-bold');
    } else if (tab === selectors[2]) {
        tabs[2].classList.add('flex');
        tabs[2].classList.remove('hidden');
        tabs[0].classList.add('hidden');
        tabs[1].classList.add('hidden');
        tabs[3].classList.add('hidden');

        selectors[2].classList.add('font-bold');
        selectors[0].classList.remove('font-bold');
        selectors[1].classList.remove('font-bold');
        selectors[3].classList.remove('font-bold');

    } else {
        tabs[3].classList.add('flex');
        tabs[3].classList.remove('hidden');
        tabs[0].classList.add('hidden');
        tabs[1].classList.add('hidden');
        tabs[2].classList.add('hidden');

        selectors[3].classList.add('font-bold');
        selectors[0].classList.remove('font-bold');
        selectors[2].classList.remove('font-bold');
        selectors[1].classList.remove('font-bold');
    }
}

