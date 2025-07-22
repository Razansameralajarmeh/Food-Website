console.log("hello")

let burger = document.querySelector(".hum-burger")
let menu2 = document.querySelector(".menu2")
let line1 = document.querySelector(".line1")
let line2 = document.querySelector(".line2")
let line3 = document.querySelector(".line3")

burger.addEventListener("click", ()=>{
    menu2.classList.toggle("add-active-menu")
    line1.classList.toggle("add-line1")
    line2.classList.toggle("add-line2")
    line3.classList.toggle("add-line3")
})
