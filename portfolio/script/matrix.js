// make it rain like matrix
// get dom elements to show matrix on screen
const matrix = document.getElementById('matrix');
const backgroundCanvas = document.getElementById('backgroundCanvas');
const foregroundCanvas = document.getElementById('foregroundCanvas');

// make ctx twice fore and background
const bgCtx = backgroundCanvas.getContext('2d');
const fgCtx = foregroundCanvas.getContext('2d');

backgroundCanvas.width = matrix.clientWidth / 2;
backgroundCanvas.height = matrix.clientHeight;
foregroundCanvas.width = matrix.clientWidth / 2;
foregroundCanvas.height = matrix.clientHeight;

let gradient = bgCtx.createLinearGradient(
  0,
  0,
  backgroundCanvas.width,
  backgroundCanvas.height
);
gradient.addColorStop(0, 'hsl(312, 94%, 49%)');
gradient.addColorStop(0.3, 'hsl(327, 100%, 4%)');
gradient.addColorStop(0.6, 'hsl(300, 92%, 24%)');
gradient.addColorStop(0.9, 'hsl(330, 100%, 80%)');
gradient.addColorStop(0.12, 'hsl(300, 100%, 25%)');

// Your code - Background
class Symbols {
  constructor(x, y, fontSize, canvasHeight) {
    this.characters =
      'reactjavascripthtmlcsssasscanvasXaCidevelopmentfrontend ';
    this.x = x;
    this.y = y;
    this.fontSize = fontSize;
    this.text = '';
    this.canvasHeight = canvasHeight;
  }

  draw(context) {
    this.text = this.characters.charAt(
      Math.floor(Math.random() * this.characters.length)
    );

    context.fillText(this.text, this.x * this.fontSize, this.y * this.fontSize);

    if (this.y * this.fontSize > this.canvasHeight && Math.random() > 0.95) {
      this.y = 0;
    } else {
      this.y += 1;
    }
  }
}

class BackgroundEffect {
  constructor(canvasWidth, canvasHeight) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.fontSize = 16;
    this.columns = this.canvasWidth / this.fontSize;
    this.symbols = [];
    this.initialize();
  }

  initialize() {
    for (let i = 0; i < this.columns; i++) {
      this.symbols[i] = new Symbols(i, 0, this.fontSize, this.canvasHeight);
    }
  }
}

const bgEffect = new BackgroundEffect(
  backgroundCanvas.width,
  backgroundCanvas.height
);

let bgLastTime = 0;
const bgFps = 30;
const bgNextFrame = 1000 / bgFps;
let bgTimer = 0;

function animateBackground(timeStamp) {
  const deltaTime = timeStamp - bgLastTime;
  bgLastTime = timeStamp;

  if (bgTimer > bgNextFrame) {
    bgCtx.fillStyle = 'hsla(0, 0%, 0%, 0.051)';
    bgCtx.fillRect(0, 0, backgroundCanvas.width, backgroundCanvas.height);
    bgCtx.fillStyle = gradient;
    bgCtx.font = bgEffect.fontSize + 'px monospace';
    bgEffect.symbols.forEach((symbol) => symbol.draw(bgCtx));
    bgTimer = 0;
  } else {
    bgTimer += deltaTime;
  }

  requestAnimationFrame(animateBackground);
}

animateBackground(0);

// MatrixText code - Foreground
class MatrixText {
  constructor(canvas, words) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.words = words;
    this.fontSize = 28;
    this.rows = Math.floor(canvas.height / this.fontSize);
    this.drops = [];

    for (let i = 0; i < this.rows; i++) {
      this.drops.push({
        x: Math.floor(Math.random() * canvas.width),
        y: -i * this.fontSize,
        wordIndex: Math.floor(Math.random() * words.length),
        offset: Math.floor(Math.random() * this.fontSize),
        delay: Math.floor(Math.random() * 1000),
      });
    }

    this.draw = this.draw.bind(this);
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = 'hsl(340, 100%, 90%)';
    this.ctx.font = `${this.fontSize}px monospace`;

    for (let i = 0; i < this.rows; i++) {
      const { x, y, wordIndex, offset, delay } = this.drops[i];
      const word = this.words[wordIndex];

      if (delay === 0) {
        this.ctx.save();
        this.ctx.translate(x, y);
        this.ctx.rotate(Math.PI / 2);
        this.ctx.fillText(word, offset, 0);
        this.ctx.restore();

        this.drops[i].y += this.fontSize;

        if (this.drops[i].y >= this.canvas.height) {
          this.drops[i].y = -this.fontSize;
          this.drops[i].wordIndex = Math.floor(
            Math.random() * this.words.length
          );
          this.drops[i].offset = Math.floor(Math.random() * this.fontSize);
          this.drops[i].delay = Math.floor(Math.random() * 1000);
        }
      } else {
        this.drops[i].delay -= 1;
      }
    }
  }
}

const words = [
  'react',
  'javascript',
  'html',
  'css',
  'sass',
  'canvas',
  'XaCi',
  'development',
  'frontend',
  'vue',
  'pinia',
];

const matrixText = new MatrixText(foregroundCanvas, words);

function animateMatrixText() {
  matrixText.draw();
  requestAnimationFrame(animateMatrixText);
}

animateMatrixText();
