model_status = "";
object_tobe_detected = "";

function setup() {
    canvas = createCanvas(430, 330);
    canvas.position(450, 120);

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 430, 330);
}

function start() {
    objectDetector = ml5.objectDetector('cocssd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects...";
    object_tobe_detected = document.getElementById("object_name").value;
}

function modelLoaded() {

    console.log("cocossd model is Initiated!");
    model_status = true;
}