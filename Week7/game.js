var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");

var timer = setInterval(main, 1000/60);

var x = 100;
var y = 100;
var w = 100;
var h = 100; 
var vx = 5;
var vy = 5;

var s = new GameObject();

function main()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "red";
    ctx.fillRect(x, y, w, h);
    x += vx;
    y += vy;

    if(x >= canvas.width-w)
    {
        vx = -vx;
    }
    if(x <= 0)
    {
         vx = -vx;
    }
    if(y >= canvas.height-h)
    {
        vy = -vy;
    }
    if(y <= 0)
    {
        vy = -vy;
    }

    s.drawRect();
    s.move();
}

