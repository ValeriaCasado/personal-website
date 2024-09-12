
const WIDTH = 1000;
const HEIGHT = WIDTH;
const MAX_ITERATIONS = 200; 

window.addEventListener("load",function(event) {
    console.log('loaded');

    const canvas = document.getElementById("canvas");
        
    const ctx = canvas.getContext("2d");

    canvas.width = WIDTH;
    canvas.height = HEIGHT;


    function mandelbrot(x, y) {
        let zx = 0;
        let zy = 0;

        for (let i = 0; i < MAX_ITERATIONS; i++) {
            const newZx = zx * zx - zy * zy + x;
            const newZy = 2 * zx * zy + y;

            if (newZx * newZx + newZy * newZy > 4) {
            return i;
            }

            zx = newZx;
            zy = newZy;
        }

    return MAX_ITERATIONS;
    }

    function drawMandelbrot() {
    let currentRow = 0;

    function drawNextRow() {
        for (let px = 0; px < WIDTH; px++) {
            const x = (px - WIDTH / 2) * 4 / WIDTH;
            const y = (currentRow - HEIGHT / 2) * 4 / HEIGHT;

            const iteration = mandelbrot(x, y);

            const hue = (360 * iteration) / MAX_ITERATIONS;
            const saturation = 100;
            const lightness = iteration < MAX_ITERATIONS ? 50 : 0;

            const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;

            ctx.fillStyle = color;
            ctx.fillRect(px, currentRow, 1, 1);
            
        }
        console.log(currentRow);
        currentRow++;

        if (currentRow < HEIGHT) {
        setTimeout(drawNextRow, 0.1); // Adjust the delay here (in milliseconds)
        }
    }

    drawNextRow();
    }

    drawMandelbrot();


},false);