let calendario = document.querySelector(".calendario");
const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];


var btnAlterar = document.querySelector(".modo-calendario")

btnAlterar.addEventListener("click", ()=> {
    document.querySelector("body").classList.toggle("dark");
    document.querySelector("body").classList.toggle("estilo-clean")

})

anoBissexto = (ano) => {
    return (ano % 4 === 0 && ano % 100 !== 0 && ano % 400 !== 0)/**pegando se o ano é multiplo de 4 e não de 100 */ || (ano % 100 === 0 && ano % 400 === 0)
}

gerarFevereiro = (ano) => {
    return anoBissexto(ano) ? 29:28 //caso a condição de anoBissexto seja verdadeira retornará 29, caso seja falsa retorna 28
}