document.addEventListener('DOMContentLoaded', function() {
    let dynamicTabs = document.querySelectorAll('.tab-content');
    let tabSelectors = document.querySelectorAll('.tab-selector');

    document.addEventListener('click', function(event) {

            let tab = event.target.closest('.tab-selector')
            if (tab === tabSelectors[0]) {
                dynamicTabs[0].classList.add('flex');
                dynamicTabs[0].classList.remove('hidden');
                dynamicTabs[1].classList.add('hidden');
                dynamicTabs[2].classList.add('hidden');
                dynamicTabs[3].classList.add('hidden');

                tabSelectors[0].classList.add('font-bold');
                tabSelectors[1].classList.remove('font-bold');
                tabSelectors[2].classList.remove('font-bold');
                tabSelectors[3].classList.remove('font-bold');
            } else if (tab === tabSelectors[1]) {
                dynamicTabs[1].classList.add('flex');
                dynamicTabs[1].classList.remove('hidden');
                dynamicTabs[0].classList.add('hidden');
                dynamicTabs[2].classList.add('hidden');
                dynamicTabs[3].classList.add('hidden');

                tabSelectors[1].classList.add('font-bold');
                tabSelectors[0].classList.remove('font-bold');
                tabSelectors[2].classList.remove('font-bold');
                tabSelectors[3].classList.remove('font-bold');
            } else if (tab === tabSelectors[2]) {
                dynamicTabs[2].classList.add('flex');
                dynamicTabs[2].classList.remove('hidden');
                dynamicTabs[0].classList.add('hidden');
                dynamicTabs[1].classList.add('hidden');
                dynamicTabs[3].classList.add('hidden');

                tabSelectors[2].classList.add('font-bold');
                tabSelectors[0].classList.remove('font-bold');
                tabSelectors[1].classList.remove('font-bold');
                tabSelectors[3].classList.remove('font-bold');

            } else {
                dynamicTabs[3].classList.add('flex');
                dynamicTabs[3].classList.remove('hidden');
                dynamicTabs[0].classList.add('hidden');
                dynamicTabs[1].classList.add('hidden');
                dynamicTabs[2].classList.add('hidden');

                tabSelectors[3].classList.add('font-bold');
                tabSelectors[0].classList.remove('font-bold');
                tabSelectors[2].classList.remove('font-bold');
                tabSelectors[1].classList.remove('font-bold');
            }

    })
})