document.addEventListener("click", () => {
    field.onclick = (event) => {
        // alert(event.clientX + " : " + event.clientY)
        // ball.event.clientX = event.clientX;
        // ball.event.clientY = event.clientY;

        let ballSize = 40;

        let x_pos = event.clientX - ballSize/2;
        let y_pos = event.clientY - ballSize/2;

        let ball = document.getElementById("ball");

        ball.style.position = "absolute";
        ball.style.left = x_pos+'px';
        ball.style.top = y_pos+'px';
        ball.style.transition = 1000 +'ms';
        console.log("Coordinates Cursor: " + event.clientX + " : " + event.clientY);
        console.log("Coordinates Ball: " + ball.style.left + " : " + ball.style.top);
        console.log("---------------------------");
    }
})