const url = "https://us-central1-ss-devops.cloudfunctions.net/rand?min=1&max=300/";
let s;
let epa;

async function getNumber() {
  const number = await fetch(url).then(res =>{
   s = res.status
   return res.json()
  }).then(n => {return n.value})
  return [number,s]
}

function log(number,s) { 
  console.log("API: "+ number + " | Status code: "+s);
  if (s !== 200){
       teste()
       percorreInput(s)
       document.getElementById('newGame').style.display = 'inline-block'; 
  }
}

function newGame() {
   document.location.reload(true);
}

// Função que recolhe o valor digitado pelo usuário assim que o botão enviar é acionado.
function palpite() {
   const input = document.getElementById('palpite').value
   document.getElementById('palpite').value = ""
   percorreInput(input);
   exibirNumeros(input);
}

// Função que irá descobrir quantos grids serão necessários para exibir o número
function percorreInput(input){
   console.log("O valor é: "+input)
   if(input < 10){
      document.getElementById('container2').style.display = 'none'; 
      document.getElementById('container3').style.display = 'none'; 
   }else if(input < 100){
      document.getElementById('container2').style.display = 'grid';
      document.getElementById('container3').style.display = 'none'; 
   }else if(input < 1000){   
      document.getElementById('container2').style.display = 'grid';
      document.getElementById('container3').style.display = 'grid';
      if(input >= 400){
         exibirNumeros(input)
      }  
   }
}

function exibirNumeros(input){
      let numeros = input.toString()

      if(numeros[0] == 0){
         let numero = document.querySelectorAll("div.topo1, div.topo1-direita, div.baixo1-esquerda, div.baixo1, div.topo1-esquerda, div.baixo1-direita");
         let cor = document.querySelectorAll("div.meio1-alto, div.meio1-baixo");
         numero.forEach(numero => {
            numero.style.backgroundColor = "#000000"            
         });
         cor.forEach(cor => {
            cor.style.backgroundColor = "#DDDDDD"            
         });
      }
      if(numeros[0] == 1){
         //Numero é o número que será "pintado"
         let numero = document.querySelectorAll("div.topo1-direita, div.baixo1-direita");
         //cor é o restante que será "pintado" de cinza
         let cor = document.querySelectorAll("div.topo1, div.topo1-esquerda, div.baixo1-esquerda, div.baixo1, div.meio1-alto, div.meio1-baixo");
         numero.forEach(numero => {
            numero.style.backgroundColor = "#000000"            
         });
         cor.forEach(cor => {
            cor.style.backgroundColor = "#DDDDDD"            
         });
      }
      if(numeros[0] == 2){
         let numero = document.querySelectorAll("div.topo1, div.topo1-direita, div.meio1-alto, div.meio1-baixo, div.baixo1-esquerda, div.baixo1");
         let cor = document.querySelectorAll("div.topo1-esquerda, div.baixo1-direita");
         numero.forEach(numero => {
            numero.style.backgroundColor = "#000000"            
         });
         cor.forEach(cor => {
            cor.style.backgroundColor = "#DDDDDD"            
         });
      }
      if(numeros[0] == 3){
         let numero = document.querySelectorAll("div.topo1, div.topo1-direita, div.meio1-alto, div.meio1-baixo, div.baixo1-direita, div.baixo1");
         let cor = document.querySelectorAll("div.topo1-esquerda, div.baixo1-esquerda");
         numero.forEach(numero => {
            numero.style.backgroundColor = "#000000"            
         });
         cor.forEach(cor => {
            cor.style.backgroundColor = "#DDDDDD"            
         });
      }
      if(numeros[0] == 4){
         let numero = document.querySelectorAll("div.topo1-esquerda, div.topo1-direita, div.meio1-alto, div.meio1-baixo, div.baixo1-direita");
         let cor = document.querySelectorAll("div.topo1, div.baixo1-esquerda, div.baixo1");
         numero.forEach(numero => {
            numero.style.backgroundColor = "#000000"            
         });
         cor.forEach(cor => {
            cor.style.backgroundColor = "#DDDDDD"            
         });
      }
      if(numeros[0] == 5){
         let numero = document.querySelectorAll("div.topo1, div.topo1-esquerda,  div.meio1-alto, div.meio1-baixo, div.baixo1-direita, div.baixo1");
         let cor = document.querySelectorAll("div.topo1-direita, div.baixo1-esquerda");
         numero.forEach(numero => {
            numero.style.backgroundColor = "#000000"            
         });
         cor.forEach(cor => {
            cor.style.backgroundColor = "#DDDDDD"            
         });
      }
      if(numeros[0] == 6){
         let numero = document.querySelectorAll("div.topo1, div.topo1-esquerda,  div.meio1-alto, div.meio1-baixo, div.baixo1-direita, div.baixo1-esquerda, div.baixo1");
         let cor = document.querySelectorAll("div.topo1-direita");
         numero.forEach(numero => {
            numero.style.backgroundColor = "#000000"            
         });
         cor.forEach(cor => {
            cor.style.backgroundColor = "#DDDDDD"            
         });
      }
      if(numeros[0] == 7){
         let numero = document.querySelectorAll("div.topo1, div.baixo1-direita, div.topo1-direita");
         let cor = document.querySelectorAll("div.meio1-alto, div.meio1-baixo, div.topo1-esquerda, div.baixo1, div.baixo1-esquerda");
         numero.forEach(numero => {
            numero.style.backgroundColor = "#000000"            
         });
         cor.forEach(cor => {
            cor.style.backgroundColor = "#DDDDDD"            
         });
      }
      if(numeros[0] == 8){
         let numero = document.querySelectorAll("div.topo1, div.baixo1-direita, div.topo1-direita,div.meio1-alto, div.meio1-baixo, div.topo1-esquerda, div.baixo1, div.baixo1-esquerda");
         numero.forEach(numero => {
            numero.style.backgroundColor = "#000000"            
         });
      }
      if(numeros[0] == 9){
         let numero = document.querySelectorAll("div.topo1, div.topo1-esquerda, div.topo1-direita, div.meio1-alto, div.meio1-baixo, div.baixo1");
         let cor = document.querySelectorAll("div.baixo1-esquerda");
         numero.forEach(numero => {
            numero.style.backgroundColor = "#000000"            
         });
         cor.forEach(cor => {
            cor.style.backgroundColor = "#DDDDDD"            
         });
      }
      //VERIFICANDO SEGUNDA CASA.
      if(numeros[1] == 0){
         let numero = document.querySelectorAll("div.topo2, div.topo2-direita, div.baixo2-esquerda, div.baixo2, div.topo2-esquerda, div.baixo2-direita");
         let cor = document.querySelectorAll("div.meio2-alto, div.meio2-baixo");
         numero.forEach(numero => {
            numero.style.backgroundColor = "#000000"            
         });
         cor.forEach(cor => {
            cor.style.backgroundColor = "#DDDDDD"            
         });
      }
      if(numeros[1] == 1){
         //Numero é o número que será "pintado"
         let numero = document.querySelectorAll("div.topo2-direita, div.baixo2-direita");
         //cor é o restante que será "pintado" de cinza
         let cor = document.querySelectorAll("div.topo2, div.topo2-esquerda, div.baixo2-esquerda, div.baixo2, div.meio2-alto, div.meio2-baixo");
         numero.forEach(numero => {
            numero.style.backgroundColor = "#000000"            
         });
         cor.forEach(cor => {
            cor.style.backgroundColor = "#DDDDDD"            
         });
      }
      if(numeros[1] == 2){
         let numero = document.querySelectorAll("div.topo2, div.topo2-direita, div.meio2-alto, div.meio2-baixo, div.baixo2-esquerda, div.baixo2");
         let cor = document.querySelectorAll("div.topo2-esquerda, div.baixo2-direita");
         numero.forEach(numero => {
            numero.style.backgroundColor = "#000000"            
         });
         cor.forEach(cor => {
            cor.style.backgroundColor = "#DDDDDD"            
         });
      }
      if(numeros[1] == 3){
         let numero = document.querySelectorAll("div.topo2, div.topo2-direita, div.meio2-alto, div.meio2-baixo, div.baixo2-direita, div.baixo2");
         let cor = document.querySelectorAll("div.topo2-esquerda, div.baixo2-esquerda");
         numero.forEach(numero => {
            numero.style.backgroundColor = "#000000"            
         });
         cor.forEach(cor => {
            cor.style.backgroundColor = "#DDDDDD"            
         });
      }
      if(numeros[1] == 4){
         let numero = document.querySelectorAll("div.topo2-esquerda, div.topo2-direita, div.meio2-alto, div.meio2-baixo, div.baixo2-direita");
         let cor = document.querySelectorAll("div.topo2, div.baixo2-esquerda, div.baixo2");
         numero.forEach(numero => {
            numero.style.backgroundColor = "#000000"            
         });
         cor.forEach(cor => {
            cor.style.backgroundColor = "#DDDDDD"            
         });
      }
      if(numeros[1] == 5){
         let numero = document.querySelectorAll("div.topo2, div.topo2-esquerda,  div.meio2-alto, div.meio2-baixo, div.baixo2-direita, div.baixo2");
         let cor = document.querySelectorAll("div.topo2-direita, div.baixo2-esquerda");
         numero.forEach(numero => {
            numero.style.backgroundColor = "#000000"            
         });
         cor.forEach(cor => {
            cor.style.backgroundColor = "#DDDDDD"            
         });
      }
      if(numeros[1] == 6){
         let numero = document.querySelectorAll("div.topo2, div.topo2-esquerda,  div.meio2-alto, div.meio2-baixo, div.baixo2-direita, div.baixo2-esquerda, div.baixo2");
         let cor = document.querySelectorAll("div.topo2-direita");
         numero.forEach(numero => {
            numero.style.backgroundColor = "#000000"            
         });
         cor.forEach(cor => {
            cor.style.backgroundColor = "#DDDDDD"            
         });
      }
      if(numeros[1] == 7){
         let numero = document.querySelectorAll("div.topo2, div.baixo2-direita, div.topo2-direita");
         let cor = document.querySelectorAll("div.meio2-alto, div.meio2-baixo, div.topo2-esquerda, div.baixo2, div.baixo2-esquerda");
         numero.forEach(numero => {
            numero.style.backgroundColor = "#000000"            
         });
         cor.forEach(cor => {
            cor.style.backgroundColor = "#DDDDDD"            
         });
      }
      if(numeros[1] == 8){
         let numero = document.querySelectorAll("div.topo2, div.baixo2-direita, div.topo2-direita,div.meio2-alto, div.meio2-baixo, div.topo2-esquerda, div.baixo2, div.baixo2-esquerda");
         numero.forEach(numero => {
            numero.style.backgroundColor = "#000000"            
         });
      }
      if(numeros[1] == 9){
         let numero = document.querySelectorAll("div.topo2, div.topo2-esquerda, div.topo2-direita, div.meio2-alto, div.meio2-baixo, div.baixo2");
         let cor = document.querySelectorAll("div.baixo2-esquerda");
         numero.forEach(numero => {
            numero.style.backgroundColor = "#000000"            
         });
         cor.forEach(cor => {
            cor.style.backgroundColor = "#DDDDDD"            
         });
      }
      //VERIFICANDO SEGUNDA CASA.
      if(numeros[2] == 0){
         let numero = document.querySelectorAll("div.topo3, div.topo3-direita, div.baixo3-esquerda, div.baixo3, div.topo3-esquerda, div.baixo3-direita");
         let cor = document.querySelectorAll("div.meio3-alto, div.meio3-baixo");
         numero.forEach(numero => {
            numero.style.backgroundColor = "#000000"            
         });
         cor.forEach(cor => {
            cor.style.backgroundColor = "#DDDDDD"            
         });
      }
      if(numeros[2] == 1){
         //Numero é o número que será "pintado"
         let numero = document.querySelectorAll("div.topo3-direita, div.baixo3-direita");
         //cor é o restante que será "pintado" de cinza
         let cor = document.querySelectorAll("div.topo3, div.topo3-esquerda, div.baixo3-esquerda, div.baixo3, div.meio3-alto, div.meio3-baixo");
         numero.forEach(numero => {
            numero.style.backgroundColor = "#000000"            
         });
         cor.forEach(cor => {
            cor.style.backgroundColor = "#DDDDDD"            
         });
      }
      if(numeros[2] == 2){
         let numero = document.querySelectorAll("div.topo3, div.topo3-direita, div.meio3-alto, div.meio3-baixo, div.baixo3-esquerda, div.baixo3");
         let cor = document.querySelectorAll("div.topo3-esquerda, div.baixo3-direita");
         numero.forEach(numero => {
            numero.style.backgroundColor = "#000000"            
         });
         cor.forEach(cor => {
            cor.style.backgroundColor = "#DDDDDD"            
         });
      }
      if(numeros[2] == 3){
         let numero = document.querySelectorAll("div.topo3, div.topo3-direita, div.meio3-alto, div.meio3-baixo, div.baixo3-direita, div.baixo3");
         let cor = document.querySelectorAll("div.topo3-esquerda, div.baixo3-esquerda");
         numero.forEach(numero => {
            numero.style.backgroundColor = "#000000"            
         });
         cor.forEach(cor => {
            cor.style.backgroundColor = "#DDDDDD"            
         });
      }
      if(numeros[2] == 4){
         let numero = document.querySelectorAll("div.topo3-esquerda, div.topo3-direita, div.meio3-alto, div.meio3-baixo, div.baixo3-direita");
         let cor = document.querySelectorAll("div.topo3, div.baixo3-esquerda, div.baixo3");
         numero.forEach(numero => {
            numero.style.backgroundColor = "#000000"            
         });
         cor.forEach(cor => {
            cor.style.backgroundColor = "#DDDDDD"            
         });
      }
      if(numeros[2] == 5){
         let numero = document.querySelectorAll("div.topo3, div.topo3-esquerda,  div.meio3-alto, div.meio3-baixo, div.baixo3-direita, div.baixo3");
         let cor = document.querySelectorAll("div.topo3-direita, div.baixo3-esquerda");
         numero.forEach(numero => {
            numero.style.backgroundColor = "#000000"            
         });
         cor.forEach(cor => {
            cor.style.backgroundColor = "#DDDDDD"            
         });
      }
      if(numeros[2] == 6){
         let numero = document.querySelectorAll("div.topo3, div.topo3-esquerda,  div.meio3-alto, div.meio3-baixo, div.baixo3-direita, div.baixo3-esquerda, div.baixo3");
         let cor = document.querySelectorAll("div.topo3-direita");
         numero.forEach(numero => {
            numero.style.backgroundColor = "#000000"            
         });
         cor.forEach(cor => {
            cor.style.backgroundColor = "#DDDDDD"            
         });
      }
      if(numeros[2] == 7){
         let numero = document.querySelectorAll("div.topo3, div.baixo3-direita, div.topo3-direita");
         let cor = document.querySelectorAll("div.meio3-alto, div.meio3-baixo, div.topo3-esquerda, div.baixo3, div.baixo3-esquerda");
         numero.forEach(numero => {
            numero.style.backgroundColor = "#000000"            
         });
         cor.forEach(cor => {
            cor.style.backgroundColor = "#DDDDDD"            
         });
      }
      if(numeros[2] == 8){
         let numero = document.querySelectorAll("div.topo3, div.baixo3-direita, div.topo3-direita,div.meio3-alto, div.meio3-baixo, div.topo3-esquerda, div.baixo3, div.baixo3-esquerda");
         numero.forEach(numero => {
            numero.style.backgroundColor = "#000000"            
         });
      }
      if(numeros[2] == 9){
         let numero = document.querySelectorAll("div.topo3, div.topo3-esquerda, div.topo3-direita, div.meio3-alto, div.meio3-baixo, div.baixo3");
         let cor = document.querySelectorAll("div.baixo3-esquerda");
         numero.forEach(numero => {
            numero.style.backgroundColor = "#000000"            
         });
         cor.forEach(cor => {
            cor.style.backgroundColor = "#DDDDDD"            
         });
      }

   }





// Função que verificar o valor digitado, e desabilita o botão caso o valor seja maior do que 300, ou menor do que 0.
// Uma mensagem de alerta é exibido para informar o usuário e posteriormente o campo é limpo, para que o usuário recomece.
function input(input) {
   if(input.value > 300 || input.value < 0) {
      document.getElementById("button").disabled = true;
      alert('Digite um número válido! de 0 à 300')
      window.document.getElementById('palpite').value = ""
   }else{
      document.getElementById("button").disabled = false;
   }
}


//TRATANDO ERRO E EXIBINDO NA API

function exibirErro(p) {
      
     if(error[0] == 0){
        let numero = document.querySelectorAll("div.topo1, div.topo1-direita, div.baixo1-esquerda, div.baixo1, div.topo1-esquerda, div.baixo1-direita");
        let cor = document.querySelectorAll("div.meio1-alto, div.meio1-baixo");
        numero.forEach(numero => {
           numero.style.backgroundColor = "#FF0000"            
        });
        cor.forEach(cor => {
           cor.style.backgroundColor = "#DDDDDD"            
        });
     }
     if(error[0] == 1){
        //Numero é o número que será "pintado"
        let numero = document.querySelectorAll("div.topo1-direita, div.baixo1-direita");
        //cor é o restante que será "pintado" de cinza
        let cor = document.querySelectorAll("div.topo1, div.topo1-esquerda, div.baixo1-esquerda, div.baixo1, div.meio1-alto, div.meio1-baixo");
        numero.forEach(numero => {
           numero.style.backgroundColor = "#FF0000"            
        });
        cor.forEach(cor => {
           cor.style.backgroundColor = "#DDDDDD"            
        });
     }
     if(error[0] == 2){
        let numero = document.querySelectorAll("div.topo1, div.topo1-direita, div.meio1-alto, div.meio1-baixo, div.baixo1-esquerda, div.baixo1");
        let cor = document.querySelectorAll("div.topo1-esquerda, div.baixo1-direita");
        numero.forEach(numero => {
           numero.style.backgroundColor = "#FF0000"            
        });
        cor.forEach(cor => {
           cor.style.backgroundColor = "#DDDDDD"            
        });
     }
     if(error[0] == 3){
        let numero = document.querySelectorAll("div.topo1, div.topo1-direita, div.meio1-alto, div.meio1-baixo, div.baixo1-direita, div.baixo1");
        let cor = document.querySelectorAll("div.topo1-esquerda, div.baixo1-esquerda");
        numero.forEach(numero => {
           numero.style.backgroundColor = "#FF0000"            
        });
        cor.forEach(cor => {
           cor.style.backgroundColor = "#DDDDDD"            
        });
     }
     if(error[0] == 4){
        let numero = document.querySelectorAll("div.topo1-esquerda, div.topo1-direita, div.meio1-alto, div.meio1-baixo, div.baixo1-direita");
        let cor = document.querySelectorAll("div.topo1, div.baixo1-esquerda, div.baixo1");
        numero.forEach(numero => {
           numero.style.backgroundColor = "#FF0000"            
        });
        cor.forEach(cor => {
           cor.style.backgroundColor = "#DDDDDD"            
        });
     }
     if(error[0] == 5){
        let numero = document.querySelectorAll("div.topo1, div.topo1-esquerda,  div.meio1-alto, div.meio1-baixo, div.baixo1-direita, div.baixo1");
        let cor = document.querySelectorAll("div.topo1-direita, div.baixo1-esquerda");
        numero.forEach(numero => {
           numero.style.backgroundColor = "#FF0000"            
        });
        cor.forEach(cor => {
           cor.style.backgroundColor = "#DDDDDD"            
        });
     }
     if(error[0] == 6){
        let numero = document.querySelectorAll("div.topo1, div.topo1-esquerda,  div.meio1-alto, div.meio1-baixo, div.baixo1-direita, div.baixo1-esquerda, div.baixo1");
        let cor = document.querySelectorAll("div.topo1-direita");
        numero.forEach(numero => {
           numero.style.backgroundColor = "#FF0000"            
        });
        cor.forEach(cor => {
           cor.style.backgroundColor = "#DDDDDD"            
        });
     }
     if(error[0] == 7){
        let numero = document.querySelectorAll("div.topo1, div.baixo1-direita, div.topo1-direita");
        let cor = document.querySelectorAll("div.meio1-alto, div.meio1-baixo, div.topo1-esquerda, div.baixo1, div.baixo1-esquerda");
        numero.forEach(numero => {
           numero.style.backgroundColor = "#FF0000"            
        });
        cor.forEach(cor => {
           cor.style.backgroundColor = "#DDDDDD"            
        });
     }
     if(error[0] == 8){
        let numero = document.querySelectorAll("div.topo1, div.baixo1-direita, div.topo1-direita,div.meio1-alto, div.meio1-baixo, div.topo1-esquerda, div.baixo1, div.baixo1-esquerda");
        numero.forEach(numero => {
           numero.style.backgroundColor = "#FF0000"            
        });
     }
     if(error[0] == 9){
        let numero = document.querySelectorAll("div.topo1, div.topo1-esquerda, div.topo1-direita, div.meio1-alto, div.meio1-baixo, div.baixo1");
        let cor = document.querySelectorAll("div.baixo1-esquerda");
        numero.forEach(numero => {
           numero.style.backgroundColor = "#FF0000"            
        });
        cor.forEach(cor => {
           cor.style.backgroundColor = "#DDDDDD"            
        });
     }
     //VERIFICANDO SEGUNDA CASA.
     if(error[1] == 0){
        let numero = document.querySelectorAll("div.topo2, div.topo2-direita, div.baixo2-esquerda, div.baixo2, div.topo2-esquerda, div.baixo2-direita");
        let cor = document.querySelectorAll("div.meio2-alto, div.meio2-baixo");
        numero.forEach(numero => {
           numero.style.backgroundColor = "#FF0000"            
        });
        cor.forEach(cor => {
           cor.style.backgroundColor = "#DDDDDD"            
        });
     }
     if(error[1] == 1){
        //Numero é o número que será "pintado"
        let numero = document.querySelectorAll("div.topo2-direita, div.baixo2-direita");
        //cor é o restante que será "pintado" de cinza
        let cor = document.querySelectorAll("div.topo2, div.topo2-esquerda, div.baixo2-esquerda, div.baixo2, div.meio2-alto, div.meio2-baixo");
        numero.forEach(numero => {
           numero.style.backgroundColor = "#FF0000"            
        });
        cor.forEach(cor => {
           cor.style.backgroundColor = "#DDDDDD"            
        });
     }
     if(error[1] == 2){
        let numero = document.querySelectorAll("div.topo2, div.topo2-direita, div.meio2-alto, div.meio2-baixo, div.baixo2-esquerda, div.baixo2");
        let cor = document.querySelectorAll("div.topo2-esquerda, div.baixo2-direita");
        numero.forEach(numero => {
           numero.style.backgroundColor = "#FF0000"            
        });
        cor.forEach(cor => {
           cor.style.backgroundColor = "#DDDDDD"            
        });
     }
     if(error[1] == 3){
        let numero = document.querySelectorAll("div.topo2, div.topo2-direita, div.meio2-alto, div.meio2-baixo, div.baixo2-direita, div.baixo2");
        let cor = document.querySelectorAll("div.topo2-esquerda, div.baixo2-esquerda");
        numero.forEach(numero => {
           numero.style.backgroundColor = "#FF0000"            
        });
        cor.forEach(cor => {
           cor.style.backgroundColor = "#DDDDDD"            
        });
     }
     if(error[1] == 4){
        let numero = document.querySelectorAll("div.topo2-esquerda, div.topo2-direita, div.meio2-alto, div.meio2-baixo, div.baixo2-direita");
        let cor = document.querySelectorAll("div.topo2, div.baixo2-esquerda, div.baixo2");
        numero.forEach(numero => {
           numero.style.backgroundColor = "#FF0000"            
        });
        cor.forEach(cor => {
           cor.style.backgroundColor = "#DDDDDD"            
        });
     }
     if(error[1] == 5){
        let numero = document.querySelectorAll("div.topo2, div.topo2-esquerda,  div.meio2-alto, div.meio2-baixo, div.baixo2-direita, div.baixo2");
        let cor = document.querySelectorAll("div.topo2-direita, div.baixo2-esquerda");
        numero.forEach(numero => {
           numero.style.backgroundColor = "#FF0000"            
        });
        cor.forEach(cor => {
           cor.style.backgroundColor = "#DDDDDD"            
        });
     }
     if(error[1] == 6){
        let numero = document.querySelectorAll("div.topo2, div.topo2-esquerda,  div.meio2-alto, div.meio2-baixo, div.baixo2-direita, div.baixo2-esquerda, div.baixo2");
        let cor = document.querySelectorAll("div.topo2-direita");
        numero.forEach(numero => {
           numero.style.backgroundColor = "#FF0000"            
        });
        cor.forEach(cor => {
           cor.style.backgroundColor = "#DDDDDD"            
        });
     }
     if(error[1] == 7){
        let numero = document.querySelectorAll("div.topo2, div.baixo2-direita, div.topo2-direita");
        let cor = document.querySelectorAll("div.meio2-alto, div.meio2-baixo, div.topo2-esquerda, div.baixo2, div.baixo2-esquerda");
        numero.forEach(numero => {
           numero.style.backgroundColor = "#FF0000"            
        });
        cor.forEach(cor => {
           cor.style.backgroundColor = "#DDDDDD"            
        });
     }
     if(error[1] == 8){
        let numero = document.querySelectorAll("div.topo2, div.baixo2-direita, div.topo2-direita,div.meio2-alto, div.meio2-baixo, div.topo2-esquerda, div.baixo2, div.baixo2-esquerda");
        numero.forEach(numero => {
           numero.style.backgroundColor = "#FF0000"            
        });
     }
     if(error[1] == 9){
        let numero = document.querySelectorAll("div.topo2, div.topo2-esquerda, div.topo2-direita, div.meio2-alto, div.meio2-baixo, div.baixo2");
        let cor = document.querySelectorAll("div.baixo2-esquerda");
        numero.forEach(numero => {
           numero.style.backgroundColor = "#FF0000"            
        });
        cor.forEach(cor => {
           cor.style.backgroundColor = "#DDDDDD"            
        });
     }
     //VERIFICANDO SEGUNDA CASA.
     if(error[2] == 0){
        let numero = document.querySelectorAll("div.topo3, div.topo3-direita, div.baixo3-esquerda, div.baixo3, div.topo3-esquerda, div.baixo3-direita");
        let cor = document.querySelectorAll("div.meio3-alto, div.meio3-baixo");
        numero.forEach(numero => {
           numero.style.backgroundColor = "#FF0000"            
        });
        cor.forEach(cor => {
           cor.style.backgroundColor = "#DDDDDD"            
        });
     }
     if(error[2] == 1){
        //Numero é o número que será "pintado"
        let numero = document.querySelectorAll("div.topo3-direita, div.baixo3-direita");
        //cor é o restante que será "pintado" de cinza
        let cor = document.querySelectorAll("div.topo3, div.topo3-esquerda, div.baixo3-esquerda, div.baixo3, div.meio3-alto, div.meio3-baixo");
        numero.forEach(numero => {
           numero.style.backgroundColor = "#FF0000"            
        });
        cor.forEach(cor => {
           cor.style.backgroundColor = "#DDDDDD"            
        });
     }
     if(error[2] == 2){
        let numero = document.querySelectorAll("div.topo3, div.topo3-direita, div.meio3-alto, div.meio3-baixo, div.baixo3-esquerda, div.baixo3");
        let cor = document.querySelectorAll("div.topo3-esquerda, div.baixo3-direita");
        numero.forEach(numero => {
           numero.style.backgroundColor = "#FF0000"            
        });
        cor.forEach(cor => {
           cor.style.backgroundColor = "#DDDDDD"            
        });
     }
     if(error[2] == 3){
        let numero = document.querySelectorAll("div.topo3, div.topo3-direita, div.meio3-alto, div.meio3-baixo, div.baixo3-direita, div.baixo3");
        let cor = document.querySelectorAll("div.topo3-esquerda, div.baixo3-esquerda");
        numero.forEach(numero => {
           numero.style.backgroundColor = "#FF0000"            
        });
        cor.forEach(cor => {
           cor.style.backgroundColor = "#DDDDDD"            
        });
     }
     if(error[2] == 4){
        let numero = document.querySelectorAll("div.topo3-esquerda, div.topo3-direita, div.meio3-alto, div.meio3-baixo, div.baixo3-direita");
        let cor = document.querySelectorAll("div.topo3, div.baixo3-esquerda, div.baixo3");
        numero.forEach(numero => {
           numero.style.backgroundColor = "#FF0000"            
        });
        cor.forEach(cor => {
           cor.style.backgroundColor = "#DDDDDD"            
        });
     }
     if(error[2] == 5){
        let numero = document.querySelectorAll("div.topo3, div.topo3-esquerda,  div.meio3-alto, div.meio3-baixo, div.baixo3-direita, div.baixo3");
        let cor = document.querySelectorAll("div.topo3-direita, div.baixo3-esquerda");
        numero.forEach(numero => {
           numero.style.backgroundColor = "#FF0000"            
        });
        cor.forEach(cor => {
           cor.style.backgroundColor = "#DDDDDD"            
        });
     }
     if(error[2] == 6){
        let numero = document.querySelectorAll("div.topo3, div.topo3-esquerda,  div.meio3-alto, div.meio3-baixo, div.baixo3-direita, div.baixo3-esquerda, div.baixo3");
        let cor = document.querySelectorAll("div.topo3-direita");
        numero.forEach(numero => {
           numero.style.backgroundColor = "#FF0000"            
        });
        cor.forEach(cor => {
           cor.style.backgroundColor = "#DDDDDD"            
        });
     }
     if(error[2] == 7){
        let numero = document.querySelectorAll("div.topo3, div.baixo3-direita, div.topo3-direita");
        let cor = document.querySelectorAll("div.meio3-alto, div.meio3-baixo, div.topo3-esquerda, div.baixo3, div.baixo3-esquerda");
        numero.forEach(numero => {
           numero.style.backgroundColor = "#FF0000"            
        });
        cor.forEach(cor => {
           cor.style.backgroundColor = "#DDDDDD"            
        });
     }
     if(error[2] == 8){
        let numero = document.querySelectorAll("div.topo3, div.baixo3-direita, div.topo3-direita,div.meio3-alto, div.meio3-baixo, div.topo3-esquerda, div.baixo3, div.baixo3-esquerda");
        numero.forEach(numero => {
           numero.style.backgroundColor = "#FF0000"            
        });
     }
     if(error[2] == 9){
        let numero = document.querySelectorAll("div.topo3, div.topo3-esquerda, div.topo3-direita, div.meio3-alto, div.meio3-baixo, div.baixo3");
        let cor = document.querySelectorAll("div.baixo3-esquerda");
        numero.forEach(numero => {
           numero.style.backgroundColor = "#FF0000"            
        });
        cor.forEach(cor => {
           cor.style.backgroundColor = "#DDDDDD"            
        });
     }
}
