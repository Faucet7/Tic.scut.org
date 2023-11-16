function randomColor(){
    this.r = Math.floor(Math.random()*255);
    this.g = Math.floor(Math.random()*255);
    this.b = Math.floor(Math.random()*255);
    this.color = 'rgba('+ this.r +','+ this.g +','+ this.b +',0.8)';
    return color;
}

function setBottonRandomColor(){

    document.getElementById("num2").style.color = randomColor();
}