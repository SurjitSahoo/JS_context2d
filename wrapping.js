window.onload = function(){
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight;

    var p = particle.create(width / 2, height / 2, 3, Math.random() * Math.PI * 2);
        p.radious = 200;
    update();

    function update(){
        context.clearRect(0, 0, width, height);

        p.update();
        context.beginPath();
        context.arc(p.position.getX(), p.position.getY(), p.radious, 0, Math.PI * 2, false);
        context.fill();

        if(p.position.getX() - p.radious > width){
            p.position.setX(-p.radious);
        }
        if(p.position.getX() + p.radious < 0){
            p.position.setX(width + p.radious);
        }
        if(p.position.getY() -p.radious > height){
            p.position.setY(-p.radious);
        }
        if(p.position.getY() + p.radious < 0){
            p.position.setY(height + p.radious);
        }

        requestAnimationFrame(update);
    }
}