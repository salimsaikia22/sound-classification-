// The video
let video;
// For displaying the label
let label = "waiting...";
// The classifier
let classifier;
let modelURL = "https://teachablemachine.withgoogle.com/models/GYW9Xuob/";

// STEP 1: Load the model!
function preload() {
  classifier = ml5.soundClassifier(modelURL + "model.json");
}

function setup() {
  createCanvas(640, 520);

  // STEP 2: Start classifying
  classifyAudio();
}

// STEP 2 classify the audio!
function classifyAudio() {
  classifier.classify(gotResults);
}

function draw() {
  background(0);

  // STEP 4: Draw the label
  textSize(32);
  textAlign(CENTER, CENTER);
  fill(255);
  text(label, width / 2, height / 2);
}

// STEP 3: Get the classification!
function gotResults(error, results) {
  // Something went wrong!
  if (error) {
    console.error(error);
    return;
  }
  console.log(label);
  // Store the label and classify again!
  label = results[0].label;
  confidence = results[0].confidence.toFixed(2);
  if (confidence < 0.6) {
    label = "Standby";
  }
}
