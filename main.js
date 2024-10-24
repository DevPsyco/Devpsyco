const nav = document.querySelector(".barra")
const svg = document.querySelector(".hamburguesa")
const boton = document.querySelector(".equis")

svg.addEventListener('click', () => {
    nav.classList.toggle('active')
})
boton.addEventListener('click', () => {
    nav.classList.remove('active')
})