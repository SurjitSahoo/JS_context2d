window.onload = function(){
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight;

    var particles = [];
    for(var i = 0; i < 100; i++){
        particles.push(particle.create(width / 2, height / 2, Math.random() * 2, Math.random() * Math.PI * 2));
    }

    update();

    function update(){
        context.clearRect(0, 0, width, height);
        
        for(var i = 0; i < 100; i++){
            particles[i].update();
            context.beginPath();
            context.arc(particles[i].position.getX(), particles[i].position.getY(), 2, 0, Math.PI * 2, false);
            context.fill();
        }

        requestAnimationFrame(update);
    }
};