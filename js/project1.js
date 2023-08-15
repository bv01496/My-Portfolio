const video1 = document.getElementsByClassName("proto-video1")[0]
const video2 = document.getElementsByClassName("proto-video2")[0]
const video3 = document.getElementsByClassName("proto-video3")[0]

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= -250 &&
    rect.left >= 0 &&
    rect.bottom <= ((window.innerHeight+200) || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
document.addEventListener('scroll', function () {
    isInViewport(video1) ? video1.play() : video1.pause();
    isInViewport(video2) ? video2.play() : video2.pause();
    isInViewport(video3) ? video3.play() : video3.pause();
        
}, {
    passive: true
});


const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const images = document.querySelector(".images");
let counter = 0;

prevBtn.addEventListener("click", () => {
  images.style.transform = `translateX(${0}px)`
  prevBtn.style.backgroundColor = "rgb(255, 255, 255)"
  nextBtn.style.backgroundColor = "rgb(232, 232, 232)"
});

nextBtn.addEventListener("click", () => {
  images.style.transform = `translateX(${-1000}px)`
  prevBtn.style.backgroundColor = "rgb(232, 232, 232)"
  nextBtn.style.backgroundColor = "rgb(255, 255, 255)"
  });

