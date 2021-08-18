var cont = document.createElement('div');
cont.innerText = "Look at this lmao canvas bruh:"

document.body.appendChild(cont)

var canvas = document.createElement('canvas');
canvas.width = 600;
canvas.height = 400;

document.body.appendChild(canvas);
var ctx = canvas.getContext("2d");

var n = 1;
var i;

function draw() {
    if (n === 20) n = 1;
    i = 0;

    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, 599, 399);

    while (i < n*2) {
        ctx.fillStyle = "#FFFFFF";
        ctx.beginPath();
        ctx.arc(300, 200, n * 20 - i*10, 0, 2 * Math.PI);
        ctx.fill();

        ctx.fillStyle = "#000000";
        ctx.beginPath();
        ctx.arc(300, 200, n * 20 - (i+1)*10, 0, 2 * Math.PI);
        ctx.fill();

        i+=2;
    }

    n++;
}

setInterval(() => {
    draw()
}, 100)