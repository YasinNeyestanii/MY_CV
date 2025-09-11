const imagePaths = [
  "../image/album4.jpg",
  "../image/album1.jpg",
  "../image/album.jpg",
  "../image/album2.jpg",
  "../image/album3.jpg"
];

let currentIndex = 0;
const imageElement = document.getElementById("album-image");

function changeImage() {
  currentIndex = (currentIndex + 1) % imagePaths.length;
  imageElement.src = imagePaths[currentIndex];
}

setInterval(changeImage, 4000); // هر 40 ثانیه یک‌بار
