// Get the element

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = document.querySelector('.progress');
const progress_filled = progress.querySelector('.progress__filled');
const play_button = document.querySelector('.toggle');
const ranges = player.querySelectorAll('.player__slider');
const skips = player.querySelectorAll('[data-skip]');
// console.log(ranges);

// Build the functions

const togglePlay = () => {
  video.paused ? video.play() : video.pause()
}
const updateButton = (e) => {
  const icon = e.currentTarget.paused? '⏸' : '▶️'
  play_button.innerText = icon;
}

const skipping = (e) => {
  // console.log(e.currentTarget.dataset.skip)
  // console.log(video.currentTime)
  video.currentTime += parseFloat(e.currentTarget.dataset.skip)
}
const handleRangeUpdate = (e) => {
  const target = e.currentTarget;
  const targetName = e.currentTarget.name;
  video[targetName] = target.value;
  // video[volume] = e.currentTarget
}
const handleProgress = () => {
  const percent = (video.currentTime / video.duration)*100;
  progress_filled.style.flexBasis = `${percent}%`;
}

const scrub = (e) => {
  // console.log(e)
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}


// EventListerners

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);


play_button.addEventListener('click',  togglePlay);
skips.forEach(skip => skip.addEventListener('click', skipping));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate))
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate))

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);





