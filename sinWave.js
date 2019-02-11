context.translate(0, height/2);
var x = 0;
for(var angle = 0; angle < Math.PI * 2; angle+= .01){
    var x = angle * 200;
    var y = Math.sin(angle) * 200;

    context.fillRect(x,y, 5,5);
}