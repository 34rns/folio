const imgM = document.getElementById("imgCng");
const cngBtn = document.getElementById("cngBtn");
let index = 0;
let typingEffect = new Typed(".multi-text", {
  strings: ["programmer", "gamer", "video editor", "3d model developer"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 1500,
});

cngBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (index > 1) {
    index = 0;
  }
  if (index === 0) {
    imgM.setAttribute("src", "zoro.png");
  } else if (index === 1) {
    imgM.setAttribute("src", "luffy.png");
  }
  index++;
});
