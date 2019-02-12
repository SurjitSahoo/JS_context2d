window.onload = function(){    
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight;

    var gun = {
        x : 100,
        y : height,
        angle : Math.PI / 4
    };
    ball = particle.create(gun.x, gun.y, 15, gun.angle, 0.2);
    ball.radious = 7;
    var canShoot = true;

    draw();

    document.body.addEventListener("mousedown", onMouseDown);
    function onMouseDown(event){
        document.body.addEventListener("mousemove", onMouseMove);
        document.body.addEventListener("mouseup", onMouseUp);
        aimGun(event.clientX, event.clientY);
    }
    
    function onMouseMove(event){
        aimGun(event.clientX, event.clientY);
    }
    
    function onMouseUp(event){
        document.body.removeEventListener("mousemove", onMouseMove);
        document.body.removeEventListener("mouseup", onMouseUp);
        aimGun(event.clientX, event.clientY);
    }

    function aimGun(mouseX, mouseY){
        gun.angle = utils.clamp(Math.atan2(mouseY - gun.y, mouseX - gun.x), -Math.PI / 2, -0.3);
        draw();
    }

    document.body.addEventListener("keyup", function(event){
        switch(event.keyCode){
            case 32: //space
                if(canShoot){
                    shoot();
                }
                break;
        }
    });

    function shoot(){
        ball.position.setX(gun.x + Math.cos(gun.angle) * 40);
        ball.position.setY(gun.y + Math.sin(gun.angle) * 40);
        ball.velocity.setLength(15);
        ball.velocity.setAngle(gun.angle);

        canShoot = false;
        update();
    }

    function update(){
        ball.update();
        draw();

        if(ball.position.getY() > height){
            canShoot = true;
        }
        else{
            requestAnimationFrame(update);
        }
    }

    function draw(){
        context.clearRect(0, 0, width, height);
        context.beginPath();
        //base of the gun
        context.arc(gun.x, gun.y, 25, 0, Math.PI * 2, false);
        context.fill();

        //nosle of the gun
        context.save();
        context.translate(gun.x, gun.y);
        context.rotate(gun.angle);
        context.fillRect(0, -8, 40, 16);
        context.restore();

        context.beginPath();
        context.arc(ball.position.getX(), ball.position.getY(), ball.radious, 0, Math.PI * 2, false);
        context.fill();
    }
}