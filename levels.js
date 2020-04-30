level = (n) => {

    let balArray = [],bal
    if(n==1){
        for(let x=550;x<=910;x+=30){
            bal = new Balloon(x,540,15)
            balArray.push(bal)
        }
        return balArray
    }

    if(n==2){
        for(let i=0;i<32;i++){
            bal = new Balloon(random(570,850)+random(-50,50),random(750,1350)+random(-50,50),15)
            balArray.push(bal)
        }
        return balArray
    }

    if(n==3){
        for(let x=550;x<=900;x+=30){
            bal = new Balloon(x,720,15)
            balArray.push(bal)
        }
        for(let i=0;i<20;i++){
            bal = new Balloon(random(570,850)+random(-50,50),random(750,1350),15)
            balArray.push(bal)
        }
        return balArray
    }

}