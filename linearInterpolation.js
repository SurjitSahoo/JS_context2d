window.onload = function(){
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight;

    var minX = 50,
        maxX = width - 50,
        minY = 100,
        maxY = height - 100,
        minAlpha = 0,
        maxAlpha = 1,
        minRadious = 10,
        maxRadious = 400,
        t = 0;

    // linear Interpolation function    
    function lerp(norm, min, max){
        return (max - min) * norm + min;
    }
 
    update();
    
    function update(){
        context.clearRect(0, 0, width, height);

        context.globalAlpha = lerp(t, maxAlpha, minAlpha);
        context.beginPath();
        context.arc(lerp(t, minX, maxX),
                    lerp(t, minY, maxY),
                    lerp(t, minRadious, maxRadious),
                    0, Math.PI * 2, false);
        context.fill();

        t += .005;
        if(t > 1){
            t = 0;
        }

        requestAnimationFrame(update);
    }
}