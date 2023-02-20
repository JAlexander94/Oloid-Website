var container = document.querySelector("#quarterly-row");
var scrollSpeed = 1; // Change this value to adjust the scrolling speed
var cardWidth = document.querySelector(".quarterly-card").offsetWidth; // Get the width of a single card
var numCards = document.querySelectorAll(".quarterly-card").length; // Get the total number of cards
var containerWidth = cardWidth * numCards; // Calculate the total width of the container
container.style.width = containerWidth + "px"; // Set the width of the container to fit all the cards
var IntervalId

function startScrolling(){
  intervalId = setInterval(function() {
  var currentPosition = parseInt(container.style.left);
  if (isNaN(currentPosition)) {
    currentPosition = 0;
  }
  var newPosition = currentPosition - scrollSpeed;
  if (newPosition < -cardWidth) {
    newPosition += cardWidth;
    container.appendChild(container.firstElementChild); // Move the first card to the end of the container
  }
  container.style.left = newPosition + "px";
}, 30); // Increase the interval speed to make the animation smoother
}

startScrolling();

container.addEventListener("mouseout", function() {
  scrollSpeed = 1;
  startScrolling();
});

container.addEventListener("mouseover", function(event) {
  clearInterval(intervalId);
});