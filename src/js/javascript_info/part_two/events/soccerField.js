document.addEventListener("click", () => {
    field.onclick = (event) => {
        // alert(event.clientX + " : " + event.clientY)
        // ball.event.clientX = event.clientX;
        // ball.event.clientY = event.clientY;

        let x_pos = event.clientX;
        let y_pos = event.clientY;

        let ball = document.getElementById("ball");

        ball.style.position = "absolute";
        ball.style.left = x_pos+'px';
        ball.style.top = y_pos+'px';
        console.log("Clicked")
    }
})