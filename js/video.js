var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");

	video = document.getElementById("player1");
    video.loop = false;
    document.querySelector("#volume").innerHTML  = (video.volume * 100) + "%";
});

document.querySelector("#play").addEventListener("click", function() {
    video.play();
    document.querySelector("#volume").innerHTML  = (video.volume * 100) + "%";
    console.log("Play Video");
 });

document.querySelector("#pause").addEventListener("click", function() {
 	console.log("Pause Video");
	video.pause();
 });

document.querySelector("#slower").addEventListener("click", function() {
    video.playbackRate = video.playbackRate * 0.9;
    console.log("New speed is:", video.playbackRate.toFixed(5));
});

document.querySelector("#faster").addEventListener("click", function() {
    video.playbackRate = video.playbackRate / 0.9;
    console.log("New speed is:", video.playbackRate.toFixed(5));
});

document.querySelector("#skip").addEventListener("click", function() {
    console.log("Original location:", video.currentTime);

    if (video.currentTime + 10 >= video.duration) {
        video.currentTime = 0;
    } else {
        video.currentTime = video.currentTime + 10;
    }

    console.log("New location:", video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
    video.muted = !video.muted;

    if (video.muted) {
        this.innerHTML = "Unmute";
        console.log("Muted");
    } else {
        this.innerHTML = "Mute";
        console.log("Unmuted");
    }
});

document.querySelector("#slider").addEventListener("input", function() {
    video.volume = this.value / 100;
    document.querySelector("#volume").innerHTML = (video.volume * 100) + "%";
    console.log("Volume:", video.volume);
});

document.querySelector("#vintage").addEventListener("click", function() {
    video.classList.add("oldSchool");
    console.log("Turn Old School version on");
});

document.querySelector("#orig").addEventListener("click", function() {
    video.classList.remove("oldSchool");
    console.log("Turn Old School version off");
});