var btnAlterar = document.querySelector(".modo-calendario")

btnAlterar.addEventListener("click", ()=> {
    document.querySelector("body").classList.toggle("dark");
    document.querySelector("body").classList.toggle("estilo-clean")

})