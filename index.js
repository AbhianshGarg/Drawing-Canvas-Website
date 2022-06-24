const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
var pixelSize = document.getElementById('pixel-size');

ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);

const canvasOffsetX = canvas.offsetLeft;
const canvasOffsetY = canvas.offsetTop;

//canvas.width = window.innerWidth - canvasOffsetX;
//canvas.height = window.innerHeight - canvasOffsetY;

let isPainting = false;
let line_Width = 2;

let startX;
let startY;

const draw = (e) => {
    if (!isPainting) {
        return;
    }

    ctx.lineWidth = line_Width;
    ctx.lineCap = 'round';

    ctx.lineTo(e.clientX - canvasOffsetX, e.clientY);
    ctx.stroke();
}

pixelSize.oninput = function() {
    line_Width = pixelSize.value;
}

canvas.addEventListener('mousedown', (e) => {
    isPainting = true;
    startX = e.clientX;
    startY = e.clientY;
});

canvas.addEventListener('mouseup', (e) => {
    isPainting = false;
    ctx.stroke();
    ctx.beginPath();
});

function colorGreen() {
    ctx.strokeStyle = "rgb(8, 100, 39)";
  }

function colorBrown() {
    ctx.strokeStyle = "rgb(82, 41, 0)";
}

function colorBlue() {
    ctx.strokeStyle = "rgb(102, 178, 255)";
  }

function colorPurple() {
    ctx.strokeStyle = "rgb(178, 102, 255)";
  }

function colorDark() {
    ctx.strokeStyle = "rgb(64, 64, 64)";
  }

function colorGrey() {
    ctx.strokeStyle = "rgb(160, 160, 160)";
  }

function colorWhite() {
    ctx.strokeStyle = "rgb(255, 255, 255)";
  }

function canvasDownload() {
    const a = document.createElement('a');

    document.body.appendChild(a);
    a.href = canvas.toDataURL();
    a.download = 'canvas-image.png'
    a.click();
    document.body.removeChild(a);
  }



canvas.addEventListener('mousemove', draw);