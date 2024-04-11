Webcam.set(
    {
        width:350,
        height:350,
        image_format:'png',
        png_quality:90
    }
)
camera=document.getElementById("camera");
WEbcam.attach(camera);
function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById('result').innerHTML='<img id="captured_image" src="'+data_uri+'">';
    });
}
console.log('ml5 version',ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/1juB4Yn9J/model.json",modelLoaded);
function modelLoaded()
{
    console.log('Model loaded');
}