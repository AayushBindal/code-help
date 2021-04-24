class Form{
    constructor(){
        inputWidth = createInput('', "number").attribute("placeholder", "x-axis");
        submitWidth = createButton('→');
        widthCal = createElement('h1');
        widthCal.html("window width calculator");
        widthCal.position(windowWidth/2-180, windowHeight/8);
        heightcal = createElement('h1');
        heightcal.html("window height calculator");
        heightcal.position(windowWidth/2-180, windowHeight/2.5);
        inputHeight = createInput('', "number").attribute("placeholder", "y-axis");
        submitHeight = createButton('→');   
        color_picker = createColorPicker("green");
        colorT = createElement('h1');
        colorT.html("color picker");
        colorT.position(windowWidth/1.2925925925925925, windowHeight/8);
        keyCal = createElement('h1');
        keyCal.html("key code calculator");
        keyCal.position(windowWidth/15.86363636363636, windowHeight/8);
    }
    display(){
        inputWidth.position(windowWidth/2-100, windowHeight/4);
        submitWidth.position(inputWidth.x+150, windowHeight/4);
        inputHeight.position(windowWidth/2-100, windowHeight/2+30);
        submitHeight.position(inputWidth.x+150, windowHeight/2+30);
        color_picker.position(windowWidth/1.29+50, windowHeight/8+80);
        submitWidth.mousePressed(() => {
            background("cyan");
            var widthValue = inputWidth.value();
            var acc = windowWidth/widthValue;
            var answer = createElement('h2');
            answer.html("windowWidth/"+acc);
            answer.position(submitWidth.x+60, windowHeight/4-20);
        })
        submitHeight.mousePressed(() => {
            var heightValue = inputHeight.value();
            var acc = windowHeight/heightValue;
            var answer = createElement('h2');
            answer.html("windowHeight/"+acc, acc);
            answer.position(submitHeight.x+60, windowHeight/2+30);
        })
    }    
}