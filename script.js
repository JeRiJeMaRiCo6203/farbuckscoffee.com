const button= document.querySelector(".burgerButton")
const navigasi= document.querySelector("nav ul")
const span = document.querySelectorAll(".burgerButton span")
console.log(span)
button.addEventListener("click",function(){
   button.classList.toggle("transformBurger")
   navigasi.classList.toggle("slide")
})