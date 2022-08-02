
let count = 0;
const bgButton = document.querySelector("#bg-button");
const bodyBg = document.querySelector("body");
let colors = ['radial-gradient(farthest-corner at 10% -100px, rgb(34, 160, 243) -10%, rgb(29, 64, 139) 60%, rgb(9, 40, 105) 90%)', 'linear-gradient( #022d37 25%, #24424d 50%, #242526 80%)'];
function changeBg() {
  bodyBg.style.background = colors[count];
  if (count < colors.length - 1) {
    count++;
  } else {
    count = 0;
  }
}