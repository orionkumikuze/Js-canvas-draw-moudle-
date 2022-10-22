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
keys = {
    q: 81, w: 87, e: 69, r: 82, t: 84, y: 89, u: 85, i: 73, o: 79, p: 80,
    a: 65, s: 83, d: 68, f: 70, g: 71, h: 72, j: 74, k: 75, l: 76,
    z: 90, x: 88, c: 67, v: 86, b: 66, n: 78, m: 77,
    space: 32,
    one: 49, two: 50, three: 51, four: 52, five: 53, six: 54, seven: 55, eight: 56, nine: 57, zero: 48
}
