window.onload = function(){
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight;

    var p = particle.create(width / 2, height / 2, 5, Math.random() * Math.PI * 2);
        p.radious = 200;
        p.bounce = -0.8;


    update();

    function update(){
        context.clearRect(0, 0, width, height);

        p.update();
        context.beginPath();
        context.arc(p.position.getX(), p.position.getY(), p.radious, 0, Math.PI * 2, false);
        context.fill();

        if(p.position.getX() + p.radious > width){
            p.position.setX(width - p.radious);
            p.velocity.setX(p.velocity.getX() * p.bounce)
        }
        if(p.position.getX() - p.radious < 0){
            p.position.setX(p.radious);
            p.velocity.setX(p.velocity.getX() * p.bounce)
        }
        if(p.position.getY() + p.radious > height){
            p.position.setY(height - p.radious);
            p.velocity.setY(p.velocity.getY() * p.bounce)
        }
        if(p.position.getY() - p.radious < 0){
            p.position.setY(p.radious);
            p.velocity.setY(p.velocity.getY() * p.bounce)
        }

        requestAnimationFrame(update);
    }
}