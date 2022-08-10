const backBtn = document.getElementById("btn-back")
const forwardBtn = document.getElementById("btn-fd")
const images = document.querySelectorAll(".img-box img")
const imgBox = document.querySelector(".img-box")

let index = 0
let transform_x = 0
let img_width = images[0].clientWidth

backBtn.addEventListener("click", ()=> {
    transform_x += img_width
    imgBox.style.transform = `translateX(-${transform_x}px)`
})

forwardBtn.addEventListener("click", ()=> {
    transform_x -= img_width
    imgBox.style.transform = `translateX(-${transform_x}px)`
})