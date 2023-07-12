// pega o button na página
const button = document.querySelector("#button")

// executa toda vez que clico no button
button.addEventListener("click", (e) => {

    // faz a chamanda na api
    fetch("https://api.adviceslip.com/advice")
    .then((response) => {
        response.json().then(data => mostrarConselho(data))
    })
})

// mostra o conselho na pagina
const mostrarConselho = function(dado){
    // console.log(dado.slip.advice)

    //pegar a tag p é coloca um conselho
    const p = document.querySelector('#conselho')
    p.textContent = dado.slip.advice
}