class Arrow {
    constructor(x=100,y=mouseY){
        this.x = x
        if(y==mouseY)
        this.y = (y<443)*y + (y>=443)*443
        else
        this.y = y
        this.w = 50
        this.h = 1
    }
    show = () =>{
        this.x+=2.2
        this.tip = this.x+25
        noStroke()
        fill(0,255,0)
        rect(this.x,this.y,this.w,this.h)
        stroke(255)
        line(this.tip,this.y,this.tip-3,this.y-3)
        line(this.tip,this.y,this.tip-3,this.y+3)
        stroke(255,0,0)
        line(this.tip-50,this.y,this.tip-53,this.y-3)
        line(this.tip-50,this.y,this.tip-53,this.y+3)
        line(this.tip-53,this.y-3,this.tip-53,this.y+3)
        noStroke()
    }
}

class YellowArrow {
    constructor(){
        this.x = 100
        this.y = (mouseY<443)*mouseY + (mouseY>=443)*443
        this.w = 50
        this.h = 1
    }

    show = () => {
        this.x+=2.2
        this.tip = this.x+25
        noStroke()
        fill(255,255,0)
        rect(this.x,this.y,this.w,this.h)
        stroke(255)
        line(this.tip,this.y,this.tip-3,this.y-4)
        line(this.tip,this.y,this.tip-3,this.y+4)
        line(this.tip-10,this.y,this.tip-3,this.y-4)
        line(this.tip-10,this.y,this.tip-3,this.y+4)
        line(this.tip-10,this.y,this.tip,this.y)
        stroke(255,0,0)
        line(this.tip-50,this.y,this.tip-53,this.y-3)
        line(this.tip-50,this.y,this.tip-53,this.y+3)
        line(this.tip-53,this.y-3,this.tip-53,this.y+3)
        noStroke()
    }

}

function showArrowsLeft(){
    noStroke()
    textSize(25)
    text(`SCORE: ${score}`,200,50)
    text(`LEVEL: ${lvl}`,400,50)
    push()
    noStroke()
    translate(240,460)
    fill(255)
    text(`${arrowLeft}`,40,15)
    rotate(-0.7)
    fill(0,255,0)
    rect(0,0,50,1)
    stroke(255)
    line(25,0,22,-3)
    line(25,0,22,3)
    stroke(255,0,0)
    line(-25,0,-28,-3)
    line(-25,0,-28,3)
    line(-28,-3,-28,3)  
    noStroke()
    pop()
    push()
    noStroke()
    translate(360,460)
    fill(255)
    text(`${yellowArrowsLeft}`,40,15)
    rotate(-0.7)
    fill(255,255,0)
    rect(0,0,50,1)
    stroke(255)
    line(25,0,22,-4)
    line(25,0,22,4)
    line(25,0,15,0)
    line(15,0,22,-4)
    line(15,0,22,4)
    stroke(255,0,0)
    line(-25,0,-28,-3)
    line(-25,0,-28,3)
    line(-28,-3,-28,3)  
    noStroke()
    pop()
}




// function checkArrows() {
    
// }