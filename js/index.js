console.dir(document);

const h1 = document.getElementById("mainHeader");
const [thirdH2, firstH2, secondH2] = document.getElementsByTagName("h2");
const queryH1 = document.querySelector("#mainHeader");
const spans = document.querySelectorAll("span");

h1.addEventListener("click", () => {
  alert("clicked on h1");
});

const botton1 = document.querySelector(".button");

function enterListener() {
  alert("НЕ ВЕСИ НАД ДУШОЙ!");
}

function leaveListener() {
  alert("Спасибо!");
}

botton1.addEventListener("mouseenter", enterListener);
botton1.addEventListener("mouseleave", leaveListener);

botton1.removeEventListener("mouseleave", leaveListener);


const btn = document.getElementById('btn');
let counter = 0;

const counterSpan = document.querySelector('#counterSpan');

const clickHandler=()=>{
  
  counterSpan.innerText = ++counter;
};

const clickNull=()=>{
  counter = 0;
  counterSpan.innerText = counter;
};


btn.addEventListener('click', clickHandler);


const btn2 = document.getElementById('btn2');
btn2.addEventListener('click', clickNull);