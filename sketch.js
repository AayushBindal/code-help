var cRect;
var inputWidth, submitWidth;
var widthCal;
var heightcal;
var inputHeight, submitHeight;
var form;
var color_picker;
var colorT;
var keyCal;
var bgk;

function setup(){
    createCanvas(windowWidth-5, windowHeight-5);
    form = new Form();
}

function draw(){
    background("cyan");
    coords(152, 124, 52);
    keyCodeTeller(windowWidth/14.851063829787234, windowHeight/3.1906976744186046);    
    form.display();
    drawSprites();
}
