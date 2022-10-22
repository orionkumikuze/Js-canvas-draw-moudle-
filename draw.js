function setupCanvas(width,height,id) {
    canvas = document.getElementById(id)
    ctx = canvas.getContext('2d');
    canvas.width = width
    canvas.height = height
}
function fill(x,y,width,height,color) {
    ctx.beginPath();
    ctx.rect(x, y, width, height);
    ctx.fillStyle = color;
    ctx.fill();
}
function drawSprite(x,y,image) {
    let img = new Image();
    img.onload = function() {
        ctx.drawImage(img, x, y);
    };
    img.src = image;
}
function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}