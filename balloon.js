class Balloon {
    constructor(x,y,r){
        this.r = r
        this.x = x
        this.y = y
    }
    show = () => {
        this.y-=0.75
        if(this.y<-40)
        this.y = 540
        stroke(0)
        fill(255,0,0)
        stroke(0,0,255)
        strokeWeight(3)
        ellipse(this.x,this.y,this.r*2)
        line(this.x,this.y+this.r,this.x,this.y+this.r+20)
    }
    
}

function colDetector(x,y,balloon){
    if(x==null)
    return;
    const {r} = balloon
    if(x>=balloon.x)
    return false;

    if(dist(x,y,balloon.x,balloon.y)>r)
    return false;

    return true;

}




// function checkArrows(arrows,balloons,n,k,score){


//     for(let j=0;j<arrows.length;j++){
//         if(arrows[j].x>=1100){
//         arrows.splice(j,1);
//         k=0;
//         }

//         if(arrows[j]&&n==3&&(arrows[j].tip<=513.5&&arrows[j].tip>=511.5)){
//             // if(!arrows[j])
//             // break;
//             if(Math.abs(arrows[j].y-ny)<=30){
//                 arrows.splice(j,1);
//                 k=0;
//             }

//         }

//         for(let i=0;i<balloons.length;i++){
//             if(!arrows[j] || !arrows.length)
//             continue;
//             if(!colDetector(arrows?arrows[j].tip:null,arrows[j].y,balloons[i]))
//             continue;
//             score+=100;
//             balloons.splice(i,1)
//             i--;
//         }

//         if(!k){
//             j--;
//             k=1;
//         }
        
//     }
//     return score;
// }