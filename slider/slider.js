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
      // current knob offset, relative to track
      var offset = e.movementY - trackLeft - knobOffset;
      if(offset < 0) {
        var offset = 0;
      } else if(offset > maxRight) {
        var offset = maxRight;
      }
        
      slider.style.transform = `transformY${offset}px`
  }
});
const toggleMoveSlider = (e) => {
  let yShift = instanceOfMouseEvent.movementY;
  sliderElement.addEventListener('onmousedown', function (event) {
  moveSlider(yShift);
   console.log('message from click')
});
};
const moveSlider = (yPos) => {
  sliderElement.style.transform = "translateY("yPos"px)";
};

// sliderButton.onmousedown = toggleMoveSlider;
// sliderButton.onmousemove = moveSlider;
// sliderButton.onmouseup = toggleMoveSlider;
