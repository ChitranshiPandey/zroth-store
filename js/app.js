// ZROTH CART SYSTEM

let cart = JSON.parse(localStorage.getItem("zrothCart")) || [];

const buttons = document.querySelectorAll(".card button");

buttons.forEach((button,index)=>{

button.addEventListener("click",()=>{

const card = button.parentElement;

const product = {
name: card.querySelector("h3").innerText,
price: card.querySelector("span").innerText,
image: card.parentElement.querySelector("img").src
};

cart.push(product);

localStorage.setItem("zrothCart",JSON.stringify(cart));

button.innerText = "Added ✓";

setTimeout(()=>{
button.innerText = "Add To Cart";
},1500);

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove",(e)=>{

cursor.style.left = e.clientX + "px";
cursor.style.top = e.clientY + "px";

});

});

});