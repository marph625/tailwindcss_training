document.addEventListener('DOMContentLoaded', () => {
    let leftButton = document.getElementById("leftButton");
    let rightButton = document.getElementById("rightButton");
    let picSection = document.getElementById("picSection");
    let images = document.querySelectorAll("#picSection img");

    let i = 1;

    // images.forEach(image => {
    //     alert("image Nr." + i++);
    // });

    rightButton.onclick = () => {
        const slideWidth = images.clientWidth;
        picSection.scrollLeft += slideWidth;
        console.log("Right Button clicked");
    }

    leftButton.onclick = () => {
        const slideWidth = images.clientWidth;
        picSection.scrollLeft -= slideWidth;
        console.log("Left Button clicked");
    }
})