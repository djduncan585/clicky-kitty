const NUMBER_OF_CATS = 14;
let namearray = [
  "Vanessa",
  "Sabrina",
  "Christina",
  "Aaliyah",
  "Holly",
  "Molly",
  "Anna",
  "Hannah",
  "Chloe",
  "Zoe",
  "Lizzy",
  "Izzi",
  "Naomi",
  "Hermione"
];
let masterContainer = document.getElementsByClassName("master-container")[0];
let catContainer = [];
let blackletter = [];
let cat = [];
let ledBox = [];
let counter = [];

/*<div class="cat-container">
    <div class="blackletter">Clicky Kitty</div>
    <img class="cat" src="images/cat-0.jpg" alt="A photograph of a cat named Vanessa.">
    <div class="led">0</div>
  </div>
  let kitty = document.getElementsByClassName("cat")[0];
  let counter = 0;
  let led = document.getElementsByClassName("led")[0];
  kitty.addEventListener("mousedown", function() {
  counter++;
  led.innerHTML = counter.toString();
});*/

for (let i = 0; i < 14; i++) {
  //Create container element to hold text elements and image
  catContainer[i] = document.createElement("div");
  catContainer[i].classList.add("cat-container");
  catContainer[i].style.margin = "0 0.5em 2em";
  masterContainer.appendChild(catContainer[i]);
  //Create element for cat name
  blackletter[i] = document.createElement("div");
  blackletter[i].innerHTML = namearray[i].toString();
  blackletter[i].classList.add("blackletter");
  blackletter[i].style.backgroundColor = `hsl(${i *
    (360 / NUMBER_OF_CATS)}, 100%, 50%)`;
  catContainer[i].appendChild(blackletter[i]);
  //Create image element
  cat[i] = document.createElement("img");
  cat[i].src = `images/cat-${i}.jpg`;
  cat[i].alt = `A photograph of a cat named ${namearray[i]}.`;
  cat[i].classList.add("cat");
  catContainer[i].appendChild(cat[i]);
  //Create counter element
  ledBox[i] = document.createElement("div");
  ledBox[i].classList.add("led");
  ledBox[i].innerHTML = "0";
  catContainer[i].appendChild(ledBox[i]);
  //Add event listener for the img
  counter[i] = 0;
  cat[i].addEventListener("mousedown", function() {
    counter[i]++;
    ledBox[i].innerHTML = counter[i].toString();
  });
}
