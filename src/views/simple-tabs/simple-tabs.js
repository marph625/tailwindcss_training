document.addEventListener('DOMContentLoaded', function() {
    const dynamicTabs = document.querySelectorAll('.tab-content');
    const tabSelectors = document.querySelectorAll('.tab-selector');

    function switchTab(index) {
        dynamicTabs.forEach((tabContent, i) => {

            if (i === index) {
                tabContent.classList.add('flex');
                tabContent.classList.remove('hidden');
                tabSelectors[i].classList.add('font-bold');
            } else {
                tabContent.classList.remove('flex');
                tabContent.classList.add('hidden');
                tabSelectors[i].classList.remove('font-bold');
            }
        });
    }

    switchTab(0);

    tabSelectors.forEach((tab, index) => {
        tab.addEventListener('click', () => switchTab(index))
    });

});
    
    
    // document.addEventListener('click', function(event) {

    //         let tab = event.target.closest('.tab-selector')
    //         if (tab === tabSelectors[0]) {
    //             dynamicTabs[0].classList.add('flex');
    //             dynamicTabs[0].classList.remove('hidden');
    //             dynamicTabs[1].classList.add('hidden');
    //             dynamicTabs[2].classList.add('hidden');
    //             dynamicTabs[3].classList.add('hidden');

    //             tabSelectors[0].classList.add('font-bold');
    //             tabSelectors[1].classList.remove('font-bold');
    //             tabSelectors[2].classList.remove('font-bold');
    //             tabSelectors[3].classList.remove('font-bold');
    //         } else if (tab === tabSelectors[1]) {
    //             dynamicTabs[1].classList.add('flex');
    //             dynamicTabs[1].classList.remove('hidden');
    //             dynamicTabs[0].classList.add('hidden');
    //             dynamicTabs[2].classList.add('hidden');
    //             dynamicTabs[3].classList.add('hidden');

    //             tabSelectors[1].classList.add('font-bold');
    //             tabSelectors[0].classList.remove('font-bold');
    //             tabSelectors[2].classList.remove('font-bold');
    //             tabSelectors[3].classList.remove('font-bold');
    //         } else if (tab === tabSelectors[2]) {
    //             dynamicTabs[2].classList.add('flex');
    //             dynamicTabs[2].classList.remove('hidden');
    //             dynamicTabs[0].classList.add('hidden');
    //             dynamicTabs[1].classList.add('hidden');
    //             dynamicTabs[3].classList.add('hidden');

    //             tabSelectors[2].classList.add('font-bold');
    //             tabSelectors[0].classList.remove('font-bold');
    //             tabSelectors[1].classList.remove('font-bold');
    //             tabSelectors[3].classList.remove('font-bold');

    //         } else {
    //             dynamicTabs[3].classList.add('flex');
    //             dynamicTabs[3].classList.remove('hidden');
    //             dynamicTabs[0].classList.add('hidden');
    //             dynamicTabs[1].classList.add('hidden');
    //             dynamicTabs[2].classList.add('hidden');

    //             tabSelectors[3].classList.add('font-bold');
    //             tabSelectors[0].classList.remove('font-bold');
    //             tabSelectors[2].classList.remove('font-bold');
    //             tabSelectors[1].classList.remove('font-bold');
    //         }