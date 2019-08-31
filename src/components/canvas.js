var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');
c.font = '48px serif';
    c.fillText('Hello world', 10, 50);

// for (var i = 0; i < 5; i++) {
//   var x = Math.random() * window.innerWidth;
//   var y = Math.random() * window.innerHeight;
//   c.beginPath();
//   c.arc(x, y, 30, 0, Math.PI * 2, false);
//   c.stroke();
// }
var mouse = {
  x: undefined,
  y: undefined
}

var maxRadius = 55;
// var minRadius = 20;

var colorArray = [
  '#F4C2B7',
  '#B2C8EA',
  '#FF5335',
  '#06D6A0'
];

var strokeArray = [
  '#F4C2B7',
  '#B2C8EA',
  '#1C1D8C',
  '#FF5335',
  '#06D6A0'
];

window.addEventListener('mousemove', function(event) {
  mouse.x = event.x;
  mouse.y = event.y;
})

window.addEventListener('resize', function() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  init()
})

function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.minRadius = radius;
  this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
  this.stroke = '#1C1D8C';

  this.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
    c.lineWidth = 3;
    c.strokeStyle = this.stroke;
    c.stroke();
  }

  this.update = function() {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
    this.dx = -this.dx;
  }

    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
    this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;

    //interactivity
    if (mouse.x - this.x < 150 && mouse.x - this.x > -150 && mouse.y - this.y < 150 && mouse.y - this.y > -150) {
      if (this.radius < maxRadius) {
        this.radius += 2;
      }
    } else if (this.radius > this.minRadius) {
      this.radius -= 10;
    }


    this.draw();
  }
}

// var circleArray = [];

// for (var i = 0; i < 650; i++) {
//   var x = Math.random() * (innerWidth - radius * 2) + radius;
//   var y = Math.random() * (innerHeight - radius * 2) + radius;
//   var dx = (Math.random() - 0.5) * 7;
//   var dy = (Math.random() - 0.5) * 7;
//   var radius = Math.random() * 3 + 10;
//   circleArray.push(new Circle(x, y, dx, dy, radius));
// }

var circleArray = [];

function init() {

  circleArray = [];
  for (var i = 0; i < 300; i++) {
  var x = Math.random() * (innerWidth - radius * 2) + radius;
  var y = Math.random() * (innerHeight - radius * 2) + radius;
  var dx = (Math.random() - 0.5) * 7;
  var dy = (Math.random() - 0.5) * 7;
  var radius = Math.random() * 3 + 10;
  circleArray.push(new Circle(x, y, dx, dy, radius));
}

}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  for (var i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
  c.textAlign = 'center';
  c.font = 'small-caps 800 120px serif';
  c.shadowColor = 'black';
  c.shadowBlur = 2;
  c.lineWidth = 40;
  c.strokeText('Adam Sinning', (innerWidth / 2), (innerHeight / 2), 600);
  c.shadowBlur = 0;
  c.fillStyle = 'whitesmoke';
  c.fillText('Adam Sinning', (innerWidth / 2), (innerHeight / 2), 600);
}


init();
animate();
