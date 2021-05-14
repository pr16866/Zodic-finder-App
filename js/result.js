import trait_data from './trait.js';
const zodic_date=sessionStorage.getItem("zodic_date");
const zodic_sign=sessionStorage.getItem("zodic_sign");
const count=sessionStorage.getItem("count");
let result_wrapper=document.querySelector(".result-wrapper");
let character=document.querySelector(".character");
let p=document.querySelector("p");
let h3=document.querySelector("h3");
const img=document.querySelectorAll("img");
const h1=document.querySelector("h1");
const h2=document.querySelector("h2");
let button=document.querySelectorAll("button");
if(!zodic_sign){
    location.href="./index.html";
}
let zodic_lowercase=zodic_sign.toLowerCase().trim();
document.title=`Your Zodic - ${zodic_sign}`;
img[0].src=`./icons/${zodic_lowercase}.svg`;
img[0].alt=zodic_sign;
h1.innerText=zodic_sign;
h2.innerText=zodic_date;
button[0].addEventListener("click",()=>{
    location.href="./index.html";
});
button[1].addEventListener("click",()=>{
result_wrapper.style.display="none";
character.style.display="flex";
p.innerText=trait_data[count];
h3.innerText=zodic_sign;
img[1].src=`./icons/${zodic_lowercase}.svg`;
img[1].alt=zodic_sign;

});

button[2].addEventListener("click",()=>{
    location.href="./index.html";
});
