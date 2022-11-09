var video;
video = document.querySelector(".video");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false;
	video.loop = false;	
	console.log("Autoplay is set to " + video.autoplay);
	console.log("Loop is set to " + video.loop);

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});



document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow down the video");
	video.playbackRate *= .9;
	console.log(video.playbackRate);
}
);


document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up the video");
	video.playbackRate /= .9;
	console.log(video.playbackRate);
}
);


document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip ahead");
	vid_time = video.currentTime;
	vid_time += 10;
	video.currentTime +=10;

	if (vid_time > video.duration) {
		video.currentTime = 0;
		video.pause();
	}
	console.log("video current time is ")
	console.log(video.currentTime);
}
);


document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted) {
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
		console.log("Unmute");
	}
	else {
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
		console.log("Mute");
	}
}
);




document.querySelector("#slider").addEventListener("change", function() {
	video.volume = this.value / 100;
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
	console.log("The current value is " + video.volume)
}
);



document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Old School");
	video.setAttribute('class', 'oldSchool');
}
);



document.querySelector("#orig").addEventListener("click", function() {
	console.log("Original");
	video.setAttribute('class', 'video');
}
);

