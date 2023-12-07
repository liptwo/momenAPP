const images = ["0.jpg", "1.jpg", "3.jpg", "4.jpg"];

const chooseImages = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");


bgImage.src = `img/${chooseImages}`;

document.body.appendChild(bgImage);