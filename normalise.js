window.onload = function(){

    // creates a graph using the given values
    
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight;

    var values = [1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1],
        min = Math.min.apply(null, values),
        max = Math.max.apply(null, values);
    // returns a value ZERO to ONE representing position in between min and max
    function norm(value, min, max){
        return (value - min) / (max - min);
    }

    context.beginPath();

    for (var i = 0; i < values.length; i++){
        var normValue = norm(values[i], min, max),
            x = width / (values.length - 1) * i,
            y = height - height * normValue;

        if(i == 0){
            context.moveTo(x, y);
        }else{
            context.lineTo(x, y);
        }
    }
    context.stroke();
};