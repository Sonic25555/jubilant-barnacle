difference=0;
rightWristX=0;
leftWristX=0;
function preload(){

}
function setup(){
    canvas=createCanvas(400,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(400,400);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose", gotPoses);
}
function modelLoaded(){
    console.log("poseNet model has been initialised");
}
function gotPoses(results){
    if (results.length > 0){
        console.log(results);

        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX-rightWristX);
        console.log("leftWristX = "+leftWristX + " rightWristX = "+rightWristX +"difference = " + difference);
    }
}
function draw(){
    textSize(difference);
    fill("#FF1754");
    text('Ayesha',10,10);

}