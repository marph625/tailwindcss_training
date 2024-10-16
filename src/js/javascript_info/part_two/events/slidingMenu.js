document.addEventListener('DOMContentLoaded', () => {
    clickable.onclick = () => {
        hideMenu.classList.toggle('hidden');
        icon.classList.toggle('fa-rotate-90');
    }
});