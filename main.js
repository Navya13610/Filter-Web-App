noseX = 0
noseY = 0
function setup()
{
    canvas = createCanvas(300,300)
    canvas.center()
    video = createCapture()
    video.size(300,300)
    video.hide()
}

function preload()
{
    mustache = loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png')
}

function draw()
{
    image(video, 0, 0, 300, 300);
    image(mustache, noseX, noseY, 20, 20);
}