
const circleElements = document.querySelectorAll(".circle");

circleElements.forEach((circleElement) => {
  const dataAnimValue = circleElement.getAttribute('data-anim');
  if (dataAnimValue) {
    circleElement.classList.add(dataAnimValue);
  }
});
