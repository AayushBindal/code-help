/*/! faction.js v1.0April 24, 2021 */
function keyCodeTeller(x_axis, y_axis){                      /* to define x and y*/
    text("keyPressed: "+key, x_axis, y_axis-15); 
    text("keyCode: "+keyCode, x_axis, y_axis+10);
    if(keyCode === 16){
        text("shiftKey: true", x_axis, y_axis+35);  
    }
    else{
        text("shiftKey: false", x_axis, y_axis+35);
    }
    if(keyCode === 18){
        text("shiftKey: true", x_axis, y_axis+60);
    }
    else{
        text("altKey: false", x_axis, y_axis+60);
    }
    if(keyCode === 17){
        text("ctrltKey: true", x_axis, y_axis+85);
    }
    else{
        text("ctrltKey: false", x_axis, y_axis+85);
    }
    if(keyCode === 91){
        text("metaKey: true", x_axis, y_axis+110);
    }
    else{
        text("metaKey: false", x_axis, y_axis+110);
    }
}
 
function coords(colorR, colorG, colorB){
    strokeWeight(1);
    stroke(rgb(colorR, colorG, colorB));
    textSize(15);
    noFill();
    text("X: "+mouseX+", Y: "+mouseY, mouseX+20, mouseY+40);
    if(mouseY>649){
        text("X: "+mouseX+", Y: "+mouseY, mouseX+20, mouseY);
    }
    else if(mouseX>1380){
        text("X: "+mouseX+", Y: "+mouseY, mouseX-80, mouseY+40);
    }
}

function countDown(time, x_axis, y_axis){
    let timer = time;
    textAlign(CENTER, CENTER);
  textSize(100);
  text(timer, x_axis, y_axis);
  
  if (frameCount % 60 === 0 && timer > 0) {
    timer -= 1;
  }
  if (timer === 0) {
    textSize(10);
    text("GAME OVER", x_axis, y_axis*0.7);
  }
}