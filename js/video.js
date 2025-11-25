var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");

	video = document.getElementById("player1");
    video.loop = false;
    document.querySelector("#volume").textContent = (video.volume * 100) + "%";
});

document.querySelector("#play").addEventListener("click", function() {
 	console.log("Play Video");
	video.play();
 });
 
document.querySelector("#pause").addEventListener("click", function() {
 	console.log("Pause Video");
	video.pause();
 });

document.querySelector("#slower").addEventListener("click", function() {
    video.playbackRate *= 0.9;
    console.log("New speed is:", video.playbackRate.toFixed(5));
});
