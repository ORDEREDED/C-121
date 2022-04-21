var cam=document.getElementById("camera");
Webcam.set({
    width:360, 
    height:250, 
    image_format : 'jpeg', 
    jpeg_quality:90
});
Webcam.attach("#camera");
function capture(){
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML='<img id="myselfie" src="'+data_uri+'">';
});
}