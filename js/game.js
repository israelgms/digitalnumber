/**
 * @function newGame
 * Função responsável por reiniciar o jogo.
 */
function newGame() {
    document.location.reload(true);
}

/**
 * @function game
 * @param {number} number 
 * @param {number} statusCode 
 * Função responsável pela lógica "É maior, ou menor?" com base nos valores recebidos da API/Input
 */
function game(number, statusCode){
    let input = document.getElementById('palpite').value
    document.getElementById('palpite').value = ""
    input = Number(input) //converte para Number e ignora 0 a esquerda
    percorreInput(input);

    if(input > number){
        document.getElementById('menorMaior').innerHTML = "É menor"
        exibirNumeros(input);
    }else if(input < number){
        document.getElementById('menorMaior').innerHTML = "É maior"
        exibirNumeros(input);
    }else if(input === number){
        document.getElementById('menorMaior').innerHTML = "Você acertou!!!"
        document.getElementById('menorMaior').style.color = "#32BF00"
        exibirNumeros(input);
        desabilita()
    }
}