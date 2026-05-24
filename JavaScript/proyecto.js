const abrir = document.getElementById("#abrir");
const nav = document.getElementById("#nav");

abrir.addEventListener("click", () =>{
    nav.classList.add("visible");

    abrir.classList.add("hidden");
})