const images = [
    "1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg", "6.jpeg", "7.jpeg", "9.jpeg", "10.jpeg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

const bg = document.querySelector("#background-img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);


/*bgImage.backgroundSize = "cover";
bgImage.backgroundPosition = "center";
bgImage.backgroundRepeat = "no-repeat"
bgImage.width = "1400";
bgImage.height = "840"; */



