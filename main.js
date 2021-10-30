function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 414);
    canvas.position(560, 112);

    poseNet = ml5.poseNet(video, modelLoded);
    poseNet.on('pose', gotPoses);
}

function modelLoded(){
    console.log('PoseNet Is Initialized!');
}

function draw(){
    background('#808080');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}

