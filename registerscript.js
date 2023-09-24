const button= document.querySelector(".burgerButton")
const navigasi= document.querySelector("nav ul")
const span = document.querySelectorAll(".burgerButton span")
button.addEventListener("click",function(){
   button.classList.toggle("transformBurger")
   navigasi.classList.toggle("slide")
})

let nama = document.querySelector('input[name="name"]')
let alamat = document.querySelector('input[name="address"]')
let email = document.querySelector('input[name="email"]')
let pass = document.querySelector('input[name="pass"]')
let checkbox = document.querySelector('#terms')
let submit = document.querySelector('input[type ="submit')

console.log(submit)

let checkedbox = 0
let validatePassword = 0
let validateEmail = 0

let par1 = document.getElementById("satu")
let par2 = document.getElementById("dua")
let par3 = document.getElementById("tiga")
let par4 = document.getElementById("empat")
let par5 = document.getElementById("lima")
function validateEmpty(docs,paragraph){
    if (docs.value.length === 0){
        console.log(docs.value)
        paragraph.innerHTML ="*Must contain value"
        docs.style.outlineColor ="red"
        docs.style.borderColor ="red"
        return 0
    }
    else{
        paragraph.innerHTML =""
        docs.style.outlineColor ="lightgreen"
        docs.style.borderColor ="lightgreen"
        return true     
    }
}

nama.addEventListener("input",function(){
    validateEmpty(nama,par1)
})

address.addEventListener("input",function(){
    validateEmpty(address,par2)
})

checkbox.addEventListener("input",function(){
    if (checkbox.checked == true){
        checkedbox = 1
        par5.innerHTML=""
    }
    else{
        par5.innerHTML="*Must agree terms and condition"
        checkedbox = 0
    }
    
})

email.addEventListener("input",function(){
    let isi = email.value
    var index = isi.indexOf("@");
    console.log(index)
    if(index === -1){
        validateEmail = 0
        par3.innerHTML ="Email must contain '@'"
        email.style.borderColor ="red"
        email.style.oulineColor ="red"
    }
    else{
        validateEmail = 1
        par3.innerHTML =""
        email.style.outlineColor ="lightgreen"    
        email.style.borderColor ="lightgreen"    
    }
    

})
pass.addEventListener("input",function(e){
    let passLength = pass.value.length
    if (passLength < 6 || passLength > 20){
        par4.innerHTML = "*Password must contain 6 to 20 characters"
        validatePassword = 0
        pass.style.borderColor ="red"
        pass.style.outlineColor ="red"
    }
    else{
        par4.innerHTML = "" 
        validatePassword = 1
        pass.style.borderColor ="lightgreen"
        pass.style.outlineColor ="lightgreen"
    }
})

function registrasi(){
    if (checkedbox ==0 ||validatePassword ==0 ||validateEmail == 0){
        alert("Register Failed, please check the data's requirement once again");
        return false
    }
    alert ("Succesfully Registered")
    return true;
}

// submit.addEventListener("submit",function(e){
//     if (checkedbox == 0 || validatePassword ==0){
//         console.log(validatePassword)
//         console.log(checkedbox)
//         alert("registrasi gagal")
//         e.preventDefault()
//     }
//     else{
//         alert("Registrasi Berhasil")
//     }
// })