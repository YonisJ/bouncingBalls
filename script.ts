"use strict";

let c = <HTMLCanvasElement>document.getElementById("myCanvas");
let ctx = <CanvasRenderingContext2D>c.getContext("2d");

class Ball{
    x:number
    y:number
    radius:number
    dy:number
    dx:number
    color:string

    constructor(x:number, y:number, radius:number, dy:number, dx:number, color:string) {
        this.x = x
        this.y = y
        this.radius = radius
        this.dy = dy
        this.dx = dx
        this.color = color
    }

    draw(){
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.radius,0, Math.PI * 2)
        ctx.fillStyle = "blue"
        ctx.fill();
        ctx.stroke();
        ctx.closePath()
    }
}

const numBalls=100
const balls:Ball[] = []
for(let i=0;i<numBalls;i++){
    balls.push(new Ball(Math.floor(Math.random() * 100) + 100, Math.floor(Math.random() * 50) + 100, 10, Math.floor(Math.random() * 8), Math.floor(Math.random() * 8), "blue"))
}

function cycle(){
    ctx.clearRect(0, 0, c.width, c.height);

    let i = 0
    while (i < balls.length){

        balls[i].draw()

        balls[i].x += balls[i].dx
        balls[i].y += balls[i].dy

        if (balls[i].x<10 || balls[i].x>c.width-10){
            balls[i].dx=-balls[i].dx
        }
    
        if (balls[i].y<10 || balls[i].y>c.height-10){
            balls[i].dy=-balls[i].dy
        }

        
        i++
    }
    
requestAnimationFrame(cycle);

}

cycle()