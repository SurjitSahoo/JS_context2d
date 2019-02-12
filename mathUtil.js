var utils = {

    // combines norm() and lerp()
    // maps value from one range to another range
    map : function(value, srcMin, srcMax, dstMin, dstMax){
        return lerp(norm(value, srcMin, srcMax), dstMin, dstMax);
    },

    // returns a value ZERO to ONE representing position in between min and max
    norm : function(value, min, max){
        return (value - min) / (max - min);
    },

    // opposite of norm() 
    lerp : function(norm, min, max){
        return (max - min) * norm + min;
    },

    // if the value is below min -> returns min
    // if the value is above max -> returns max
    // else returns value
    clamp : function(value, min, max){
        return Math.min(Math.max(value, min), max);
    },

    randomRange(min, max){
        return min + Math.random() * (max - min);
    },

    distance: function(p0, p1){
        var dx = p1.x - p0.x,
            dy = p1.y - p0.y;
        return Math.sqrt(dx * dx + dy * dy);
    },

    distanceXY: function(x0, y0, x1, y1){
        var dx = x1 - x0,
            dy = y1 - y0;
        return Math.sqrt(dx * dx + dy * dy);
    },

    circleCollision: function(c0, c1){
        return utils.distance(c0, c1) <= c0.radious + c1.radious;
    }

}