//change circle radious depending upon mouse position in Y axis
window.onload = function(){
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight;

    // combines norm() and lerp()
    // maps value from one range to another range
    function map(value, srcMin, srcMax, dstMin, dstMax){
        return lerp(norm(value, srcMin, srcMax), dstMin, dstMax);
    }

    // returns a value ZERO to ONE representing position in between min and max
    function norm(value, min, max){
        return (value - min) / (max - min);
    }

    // opposite of norm() 
    function lerp(norm, min, max){
        return (max - min) * norm + min;
    }

    document.body.addEventListener("mousemove", function(event){
        var radious = map(event.clientY, 0, height, 20, 340);

        context.clearRect(0, 0, width, height);
        context.beginPath();
        context.arc(width / 2, height / 2, radious, 0, Math.PI * 2, false);
        context.fill();
    });

}