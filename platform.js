class Map {
    constructor() {
        this.plot = [];
        this.canvas = document.getElementById('ui');
        this.draw();
    }

    draw() {
        var ctx = this.canvas.getContext('2d');
        ctx.strokeStyle = 'grey';
        var y = 350;
        var i = 0;

        ctx.beginPath();
        ctx.moveTo(0, y);
        while (i < 30) {
            this.plot.push(y);
            i++;
            y = randomFactor(y, 0.01 * i);
            ctx.lineTo(50 * i, y);
            ctx.stroke();
        }
        alert(this.plot)
    }
}

function randomY()  //redundant
{
    return ((Math.random() * 200) + 300); // 400 is the height currently
}

function randomFactor(a, f) // outputs [a - a*f, a + a*f]
{
    return (a + a * f * ((Math.random() * 2) - 1));
}

function createMap() {
    var newMap = new Map;
}