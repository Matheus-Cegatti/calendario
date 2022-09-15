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

gerarCalendario = (mes, ano) => {
    let diasDoCalendario = document.querySelector(".dias-numero"); //selecionando a div de numero de dias
    let calendarioAno = document.querySelector("#ano"); //selecionando o ano

    let diasDoMes = [31, gerarFevereiro(ano), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; //colocando a quantidade de dias de cada mês e colocando a função que calcula o ano bissexto (dias de fevereiro).

   

    let dataAtual = new Date();
    if(!mes) mes = dataAtual.getMonth();
    if(!ano) ano = dataAtual.getFullYear();
    // console.log(mes);
    // console.log(ano);

    
    calendarioAno.innerHTML = ano;//define e coloca o ano

    let primeiroDia = new Date(ano, mes, 1); //define o dia 1 do mes (ele recebera a data atual no if com dataAtual.getDate())

    for(let contador = 0; contador <=diasDoMes[mes] + primeiroDia.getDay()-1; contador++) {
        let dia = document.createElement("div");
        if(contador>= primeiroDia.getDay()) {
            dia.classList.add('dias-numero-hover')
            dia.innerHTML = contador - primeiroDia.getDay() +1 //define o total de dia de cada mês e retorna o numero
            dia.innerHTML += `<span></span>
            <span></span>
            <span></span>
            <span></span>`

            if(contador - primeiroDia.getDay() +1 === dataAtual.getDate() && ano === dataAtual.getFullYear() && mes === dataAtual.getMonth()){
                dia.classList.add("data-atual")
                // console.log(dataAtual.getMonth());
            } //encontrando o dia corrente e adicionando as propriedades da classe de data-atual
        }
        diasDoCalendario.appendChild(dia)//cria a 'repetição' dos numeros de dias
        // console.log(dia);
        // console.log(contador);//gera a numeração dos dias
        // console.log(diasDoCalendario.appendChild(dia));
        // console.log(diasDoCalendario);
    }
}



let dataAtual = new Date()
let mesAtual = {value: dataAtual.getMonth()}
let anoAtual = {value: dataAtual.getFullYear()}

gerarCalendario(mesAtual.value, anoAtual.value)