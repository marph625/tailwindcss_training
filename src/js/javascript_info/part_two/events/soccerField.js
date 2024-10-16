document.addEventListener("click", () => {
    field.onclick = (event) => {
        // size of the ball-image in pixels
        let ballSize = 40;

        // min-max range for x and y coordinates
        let xMin = 32;
        let xMax = 232;
        let yMin = 72;
        let yMax = 208;

        // store the mouse position in variables
        let ballImgX = event.clientX;
        let ballImgY = event.clientY;

        // I want the center of the image move to the coordinates, not the upper-left edge
        let x_pos = ballImgX - ballSize/2;
        let y_pos = ballImgY - ballSize/2;

        // get the div and store it so I can use it
        let ball = document.getElementById("ball");

        ball.style.position = "absolute";


        // boundary logic
        if (x_pos > xMax) {
            ball.style.left = xMax+'px';
        } else if (x_pos < xMin) {
            ball.style.left = xMin+'px';
        } else {
            ball.style.left = x_pos+'px';
        }

        if (y_pos > yMax) {
            ball.style.top = yMax+'px';
        } else if (y_pos < yMin) {
            ball.style.top = yMin+'px';
        } else {
            ball.style.top = y_pos+'px';
        }

        ball.style.transition = 1000 +'ms';

        // Console output for debugging
        console.log("Coordinates Cursor X: " + event.clientX + " | Y: " + event.clientY);
        console.log("Coordinates Ball Center X: " + ballImgX + " | Y: " + ballImgY);
        console.log("---------------------------");
    }
})