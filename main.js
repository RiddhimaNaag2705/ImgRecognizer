Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});
camera=document.getElementById("webcam");
Webcam.attach(camera);

function Capture(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="output" src="'+data_uri+'">';
    })
}
console.log("ml5 ver. ", ml5.version);
Classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/GTcZzoDPi/model.json",modelLoaded);

function modelLoaded(){
    console.log("model Loaded");
}

function checking(){
   img=document.getElementById("output");

   Classifier.classify(img, getResult);
}
 
function getResult(error, results){
    if (error) {
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("object").innerHTML= results[0].label;
        document.getElementById("accuracy").innerHTML=results[0].confidence.toFixed(3);
    }
}