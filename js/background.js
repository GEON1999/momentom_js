const images = [
    "1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg", "6.jpeg", "7.jpeg","8.jpeg", "9.jpeg", "10.jpeg", "11.jpeg", "12.jpeg","13.jpeg","14.jpeg","15.jpeg","16.jpeg","17.jpeg", "18.jpeg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

const bg = document.querySelector("#background-img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);


let userName = "jenny";

function sayHello(){
  let userName = "maria";
  callYourName();
}

function callYourName(){
  console.log(`Hello ${userName});
}

sayHello();


/*bgImage.backgroundSize = "cover";
bgImage.backgroundPosition = "center";
bgImage.backgroundRepeat = "no-repeat"
bgImage.width = "1400";
bgImage.height = "840"; */



