const button= document.querySelector(".burgerButton")
const navigasi= document.querySelector("nav ul")
const span = document.querySelectorAll(".burgerButton span")
console.log(span)
button.addEventListener("click",function(){
   button.classList.toggle("transformBurger")
   navigasi.classList.toggle("slide")
})


// content 
let nextButton = document.getElementById("next")
let prevButton = document.getElementById("prev")
let nama = document.getElementById("judul")
let image = document.querySelector(".kotak")
let circle= document.querySelectorAll(".kotak span")
let word = document.querySelector(".bestSale .kotak .desc p")
let  index = 0

console.log(word)
setInterval(function(){
   carousel();
}, 4000);

function carousel(){
   index ++
   if (index == slide.length) index = 0
   
   let link = slide[index]["gambar"] 
   image.style.cssText+=`background-image:url(${link})`;
   nama.innerHTML = slide[index]["title"]
  circle.forEach(function(span){
      span.classList.remove("warnaActive")
      if (span.classList.contains(slide[index]["id"])){
         span.classList.toggle("warnaActive")
      }
  })
  word.innerHTML = slide[index]["par"]
}
nextButton.addEventListener("click",function(){
   index ++
   if (index == 3) index = 0
   
   let link = slide[index]["gambar"] 
   image.style.cssText+=`background-image:url(${link})`;
   nama.innerHTML = slide[index]["title"]
  circle.forEach(function(span){
      span.classList.remove("warnaActive")
      if (span.classList.contains(slide[index]["id"])){
         span.classList.toggle("warnaActive")
      }
  })
  word.innerHTML = slide[index]["par"]
})

prevButton.addEventListener("click",function(){
   index --
   if (index == -1) index = 2
   let link = slide[index]["gambar"] 
   image.style.cssText+=`background-image:url(${link})`;
   nama.innerHTML = slide[index]["title"]
   circle.forEach(function(span){
      span.classList.remove("warnaActive")
      if (span.classList.contains(slide[index]["id"])){
         span.classList.toggle("warnaActive")
      }
   })
   word.innerHTML = slide[index]["par"]
})

const slide = [
   {
      id:"satu",
      title: "",
      par:"",
    gambar : "../assets/coffee/BannerMenu.png",
  },
  {
     id: "dua",
     title: "Hazelnut Latte",
     par : " Extra-smooth FArbucks® Espresso and milk—flavoured with hazelnut syrup and then poured over ice.",
     gambar: "../assets/Coffee/hazelnut.jpg"
   },
   {
      id:"tiga",
      par : "A latte begins with the same base a single or double shot of espresso. This espresso is then combined with several ounces of steamed milk to create a rich, creamy beverage that has a more subtle espresso taste",
     title:"Hot Latte",
     gambar:"../assets/Coffee/latte.jpeg",
  }

]
