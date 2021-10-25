let video = document.querySelector("#video");
let playPauseBtn = document.querySelector(".play-pause");
let volumeRange = document.querySelector("#volume");
let volumeBtn = document.querySelector(".volume-container button");
let playbackBtn = document.querySelectorAll(".playback button");
let fullscreenBtn = document.querySelector("#fullscreen");
let videoContainer = document.querySelector(".container");
let progress = document.querySelector(".progress");
let progressElapsed = document.querySelector(".progress-elapsed");
let settings = document.querySelector(".settings");
let playback = document.querySelector(".playback");

//play-pause function
function playPause() {
	if (video.paused) {
		video.play();
		playPauseBtn.innerHTML = "<i class='far fa-pause-circle'></i>";
	} else {
		video.pause();
		playPauseBtn.innerHTML = "<i class='far fa-play-circle'></i>";
	}
}

//volume function
function videoVolume() {
	video.volume = this.value;
	if (video.volume == 0) {
		volumeBtn.innerHTML = "<i class='fas fa-volume-mute'>";
	} else {
		volumeBtn.innerHTML = "<i class='fas fa-volume-up'>";
	}
}

//mute function
function videoMute() {
	if (video.volume != 0) {
		volumeBtn.innerHTML = "<i class='fas fa-volume-mute'>";
		volumeRange.value = 0;
		video.volume = 0;
	} else {
		volumeBtn.innerHTML = "<i class='fas fa-volume-up'>";
		volumeRange.value = 0.5;
		video.volume = 0.5;
	}
}

//video speed function
function playbackRate() {
	video.playbackRate = this.value;
}

//fullscreen mode function
function fullscreenMode() {
	if (!document.fullscreenElement) {
		videoContainer.requestFullscreen();
	} else {
		document.exitFullscreen();
	}
}

//video elapsed time function
function progressBar() {
	let timeElapsed = (video.currentTime / video.duration) * 100;
	progressElapsed.style.flexBasis = `${timeElapsed}%`;
}

//play the exact second of video
function scrub(e) {
	const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
	video.currentTime = scrubTime;
}

video.addEventListener("click", playPause);
playPauseBtn.addEventListener("click", playPause);
volumeRange.addEventListener("change", videoVolume);
volumeBtn.addEventListener("click", videoMute);
playbackBtn.forEach((btn) => btn.addEventListener("click", playbackRate));
fullscreenBtn.addEventListener("click", fullscreenMode);
video.addEventListener("timeupdate", progressBar);
progress.addEventListener("click", scrub);
video.addEventListener("ended", () => {
	playPauseBtn.innerHTML = "<i class='far fa-play-circle'></i>";
});
settings.addEventListener("click", () => {
	playback.classList.toggle("show-hide");
});
