let dragging = false;
let sliderOffset = 0;
const sliderElement = document.getElementsById('slider');
const trackElement = document.getElementsById('slideTrack');

slider.addEventListener('mousedown', function(e) {
    dragging = true;
});
slider.addEventListener('mouseup', function(e) {
    dragging = false;
});
window.addEventListener('mousemove', function(e) {
  if (dragging) {
      let offset = e.movementY
      slider.style.transform = `transformY${offset}px`
  }
});