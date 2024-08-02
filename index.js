const progressBarElement = document.querySelector(".progress-bar");
let count = 0;
const dynamicProgressBar = setInterval(() => {
  if (count < 100) {
    count++;
    progressBarElement.style.width = `${count}%`;
  } else {
    clearInterval(dynamicProgressBar);
  }
  console.log(count);
}, 50);
