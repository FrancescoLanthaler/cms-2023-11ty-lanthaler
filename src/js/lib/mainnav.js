export function init() {
}

document.getElementById("hamburger").addEventListener("click", toggleMenu);

function toggleMenu(){
    var x = document.getElementById("hamNav");
    if (x.classList.contains("menuOpened")) {
      x.classList.remove("menuOpened");
    } else {
      x.classList.add("menuOpened");
    }
  }
