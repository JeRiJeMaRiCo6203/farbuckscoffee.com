const button= document.querySelector(".burgerButton")
const navigasi= document.querySelector("nav ul")
const span = document.querySelectorAll(".burgerButton span")
button.addEventListener("click",function(){
   button.classList.toggle("transformBurger")
   navigasi.classList.toggle("slide")
})


const overlay = [
   {
     id:"satu",
     date: "Date: 29 Mei 2022",
     judul: "Event I",
     gambar : "../assets/event/EVENTI.png",
   },
   {
      id: "dua",
      judul: "Event II",
      date: "Date: 30 Mei 2022",
      gambar: "../assets/event/EVENTII.png"
   },
   {
      id:"tiga",
      judul: "Event III",
      date: "Date: 31 Mei 2022",
      gambar:"../assets/event/EVENTIII.png",
   },
   {
      id:"empat",
      judul: "Event IV",
      date: "Date: 01 June 2022",
      gambar:"../assets/event/EVENTIV.png",
   },
   {
      id:"lima",
      judul: "Event V",
      date: "Date: 02 June 2022",
      gambar:"../assets/event/EVENTV.png",
   },
   {
      id:"enam",
      judul: "Event V60 Mini Class",
      date: "Date: 03 June 2022",
      gambar:"../assets/event/EVENTV60MiniClass.png",
   },
   {
      id:"tujuh",
      judul: "Event VII",
      date: "Date: 04 June 2022",
      gambar:"../assets/event/EVENTVII.png",
   }
 
 ]

let index = 0;
let openOverlay = document.getElementById("overlay")
// console.log(openOverlay.childNodes)
let image = document.querySelector('.image')
let next = document.querySelector('.next')
let prev = document.querySelector('.prev')
let close = document.querySelector('.close')
let judul = document.querySelector('.judul')
let date = document.querySelector('.date')
let container =   document.querySelector(".container")
let semuaGambar =document.querySelectorAll(".gambar")
console.log(image)
container.addEventListener("click",function(e){
   let listEvent = e.target
   if (listEvent.classList.contains("gambar")){
      semuaGambar.forEach(function(gambar){
         if (gambar == listEvent){
            overlay.forEach(function(element,nomor){
               if(listEvent.classList.contains(element["id"])){
                  let link = element["gambar"]
                  openOverlay.style.display="flex"
                  image.style.backgroundImage ="url("+link+")"
                  judul.innerHTML = element["judul"]
                  date.innerHTML = element["date"]
                  index = nomor
               }
            })
         }
      })  
   }
   
})

openOverlay.addEventListener("click",function(e){
   // console.log(e.target)
   if (e.target.classList.contains("close")){
      openOverlay.style.display="none"
   }
})

prev.addEventListener("click",function(){
   index --;
   if (index === -1) index = 6
   image.style.backgroundImage ="url("+overlay[index]["gambar"]+")"
   judul.innerHTML = overlay[index]["judul"]
   date.innerHTML = overlay[index]["date"]
   
})

next.addEventListener("click",function(){
   index ++;
   if (index === 7) index = 0
   image.style.backgroundImage ="url("+overlay[index]["gambar"]+")"
   judul.innerHTML = overlay[index]["judul"]
   date.innerHTML = overlay[index]["date"]
   
})

