const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const x = 50;
const y = 60;
const width = 100;
const height = 75;
const color = 'blue';

// Add your code here
function draw(x,y,width,height,color){
    //clear the cavas with white
    ctx.fillStyle= 'white';
    ctx.fillRect(0,0,canvas.width,canvas.height);

    //draw the rectangle
    ctx.beginPath();
    ctx.strokeStyle = "blue";
    ctx.moveTo(x, y);
    ctx.lineTo(x+width, y);
    ctx.lineTo(x+width, y+width);
    ctx.lineTo(x, y+width);
    ctx.lineTo(x, y);
    ctx.stroke();
    
}

draw(x,y,width,height,color);

