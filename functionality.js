let progressText = document.querySelector('.value');
let progressBar = document.querySelector('.progress');
let pseudoElement = window.getComputedStyle(progressBar, '::before');
let progress = 0;

function updateProgress() {
  if (progress < 100) {
    progress = pseudoElement.getPropertyValue('width');
    progress = progress.slice(0, -2);
    progress = Number(progress) / progressBar.clientWidth;
    progressText.textContent = Math.round(progress * 100) + '%';
    setTimeout(updateProgress, 50);
  }
}

updateProgress();
