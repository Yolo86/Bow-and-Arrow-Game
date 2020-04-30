let balloons = [],bal,n=1,lvl=1;
let arrows = [],arr,arch = [],c=0,k=1,yellowArrows = [];
let score=0,arrowLeft=15,yellowArrowsLeft=1,fire=0,counter=0;
let yel,blah=0,ny=40,rectDir='down';



balloons = level(n)

function preload(){
    arch[0] = loadImage('arch6.png')
    arch[1] = loadImage('arch8.png')
}



function fireIt(){
    if(!fire||!yellowArrowsLeft)
    return
    yel = new YellowArrow()
    yellowArrows.push(yel)
    yellowArrowsLeft--
    // console.log('done',yellowArrows)
    
    fire = 0
}

function setup(){
    canvas = createCanvas(950,500)
    rectMode(CENTER)
    imageMode(CENTER)
}

function keyPressed(){            
    c=1
    setTimeout(() => c=0,200)
    if(keyCode === ENTER&&yellowArrowsLeft){
    fire = 1
    fireIt()
    }
}

function mousePressed(){
    if(arrowLeft){
    arr = new Arrow()
    arrows.push(arr)
    arrowLeft--;
    }
    c=1
    setTimeout(() => c=0,200)
}
// c=0;

function chooseImage() {
    let blh = (mouseY+6>450)*450 + (mouseY+6<=450)*(mouseY+6)
    if(c==0)
    image(arch[0],80,blh,120,90)
    else if(c==1)
    image(arch[1],80,blh,120,90)
}
function gameOver() {
    fill(0,255,0)
    textSize(50)
    text('GAME OVER',250,150)
}
function addFourArrows(x,y){    
    arrows.push(new Arrow(x-60,y-60))
    arrows.push(new Arrow(x-30,y-30))
    arrows.push(new Arrow(x-30,y+30))
    arrows.push(new Arrow(x-60,y+60))
}

function showRect(){
    noStroke()
    rect(515,ny,5,80)

    if(ny===460)
    rectDir='up'

    if(ny===40)
    rectDir='down'

    if(rectDir==='down')
    ny++
    else
    ny--
}

function draw(){
    background(0)
    chooseImage();

    if(yellowArrowsLeft==0&&balloons.length&&!arrows.length&&!yellowArrows.length&&arrowLeft==0)
    gameOver();

    for(let balloon of balloons)
    balloon.show();

    for(let arrow of arrows)
    arrow.show();

    for(let arrow of yellowArrows)
    arrow.show();
    
    if(yellowArrows.length){
        if((yellowArrows[0].tip>=470&&yellowArrows[0].tip<=471)&&!blah){
            addFourArrows(yellowArrows[0].x,yellowArrows[0].y);
            blah=1;
        }



        if(yellowArrows[0].x>=1100){
            yellowArrows.splice(0,1);
        }

        for(let i=0;i<balloons.length;i++){
            if(!yellowArrows.length)
            continue;
            if(!colDetector(yellowArrows[0].tip,yellowArrows[0].y,balloons[i]))
            continue;
            
            score+=100;
            balloons.splice(i,1);
            i--;
        }
    }

    for(let j=0;j<arrows.length;j++){
        if(arrows[j].x>=1100){
        arrows.splice(j,1);
        k=0;
        }

        if(arrows[j]&&n==3&&(arrows[j].tip<=513.5&&arrows[j].tip>=511.5)){
            // if(!arrows[j])
            // break;
            if(Math.abs(arrows[j].y-ny)<=30){
                arrows.splice(j,1);
                k=0;
            }

        }

        for(let i=0;i<balloons.length;i++){
            if(!arrows[j])
            continue;
            if(!arrows.length)
            continue;
            if(!colDetector(arrows?arrows[j].tip:null,arrows[j].y,balloons[i]))
            continue;
            score+=100;
            balloons.splice(i,1)
            i--;
        }

        if(!k){
            j--;
            k=1;
        }
    }
    
    fill(0,255,0)
    textSize(50)
    if(!balloons.length){
        if(n==4)
        text(`GAME COMPLETED`,250,250);

        else{
        n++
        if(n!=counter&&n<4){
            console.log('done');
            lvl++;
            arrowLeft+=(n==2)*20 + (n==3)*30;
            balloons = level(n);
            yellowArrowsLeft=1;
            blah=0;
            counter=n;
        }
    }
    }

    if(n==3)
    showRect()

    showArrowsLeft()
}