// image arrays that have 3 images in it. the first image is what is also added to src as default
let images = [
  "https://images.pexels.com/photos/30847375/pexels-photo-30847375/free-photo-of-stylish-man-walking-along-brick-wall-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/30704111/pexels-photo-30704111/free-photo-of-crowds-enjoy-festival-at-vienna-city-hall.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.unsplash.com/photo-1740672426138-6646e5bf9e0b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
];

// index is set to 0
let index = 0;

// getting the image tag
const image = document.getElementById("sliderImage");

const nextImage = () => {
  // set the image scr to image.scr = images[1]. remember that index is at 0 now so it is already image.scr = images[0]
  // explanation: index is set to the remainder e.g index = (0 + 1) % 3 = 1 cos 1 can go into 3 one time. so images[1] is the second image that is shown
  // this method will make the image slider to be in loop. example: index = (2 + 1) % 3 = 0 cos 0 can go into 3 one time. so images[0] is the first image that is shown which bring us back to the first image

  index = (index + 1) % images.length;
  image.src = images[index];
};

// [imag1,imag2,imag3]
//   0      1     2

// next func example
// index = 0
// example: 0 + 1 % 3 = 1
// index = 1
// example: 1 + 1 % 3 = 2
// index = 2
// example: 2 + 1 % 3 = 0

const prevImage = () => {
  // set the image scr to image.scr = images[1]. remember that index is at 0 now so it is already image.scr = images[0]
  // explanation: index is set to the remainder e.g index = (0 - 1 + 3) % 3 = 2 cos 2 can go into 3 one time. so images[2] is the third image that is shown
  // don't get confused e.g index = (0 - 1 + 3) % 3 = 2 cos bodmas doesn't apply in javascript. BODMAS isn’t violated because + and - are at the same precedence level and execute left to right.

  index = (index - 1 + images.length) % images.length;
  image.src = images[index];
};

// [imag1,imag2,imag3]
//   0      1     2

// prev func example
// index = 0
// Example: 0 - 1 + 3 % 3 = 2
// index = 2
// Example: 2 - 1 + 3 % 3 = 1
// index = 1
// Example: 1 - 1 + 3 % 3 = 0
