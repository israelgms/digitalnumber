//url que recebe o link da api, com os params inclusos.
const url =
  "https://us-central1-ss-devops.cloudfunctions.net/rand?min=1&max=300";
//Variável que receberá o statusCode na função getNumber (linha 8)
let statusCode;

//Recebendo número da api e status code.
async function getNumber() {
  const number = await fetch(url)
    .then((res) => {
      statusCode = res.status;
      return res.json();
    })
    .then((n) => {
      return n.value;
    });
  return [number, statusCode];
}
//Imprimindo número da API e status code no console. Caso o status code for diferente de 200, iniciar tratativas.
function log(number, statusCode) {
  console.log("API: " + number + " | Status code: " + statusCode);
  if (statusCode !== 200) {
    erro(statusCode);
  }
}
//Em caso de erro
function erro(statusCode) {
  percorreInput(statusCode);
  desabilita()
  document.getElementById("newGame").style.display = "inline-block";
  document.getElementById("menorMaior").innerHTML = "ERRO";
  document.getElementById("menorMaior").style.color = "#CC3300";
  exibirNumeros(statusCode);
}
//Recolhe o palpite digitado, limpa o campo input e chama funções que continuaram com a lógica.
function palpite() {
  let input = document.getElementById("palpite").value;
  document.getElementById("palpite").value = "";
  input = Number(input); //converte para Number e ignora 0 a esquerda
  percorreInput(input);
  exibirNumeros(input); //função presente no arquivo exibirNumeros.js
}
//Função que irá descobrir quantos grids serão necessários para exibir o input do usuário
function percorreInput(input) {
  if (input < 10) {
    document.getElementById("container2").style.display = "none";
    document.getElementById("container3").style.display = "none";
  } else if (input < 100) {
    document.getElementById("container2").style.display = "grid";
    document.getElementById("container3").style.display = "none";
  } else if (input < 1000) {
    document.getElementById("container2").style.display = "grid";
    document.getElementById("container3").style.display = "grid";
  }
}
//Evento oninput que verifica em tempo real o valor digitado pelo usuário e impede entradas não previstas.
function input(input) {
  if (input.value > 300 || input.value < 1) {
    //desabilita o botão caso o valor seja maior do que 300, ou menor do que 0.
    document.getElementById("submit").disabled = true;
  } else {
    document.getElementById("submit").disabled = false;
  }
}
//Função responsável por desativar o input/botão
function desabilita() {
  document.getElementById("submit").disabled = true;
  document.getElementById("submit").style.background = "linear-gradient(180deg, #CFCFCF 0%, #CFCFCF 100%)";
  document.getElementById("palpite").disabled = true;
  document.getElementById("palpite").style.backgroundColor = "#CFCFCF";
  document.getElementById("newGame").style.display = "inline-block";
}
