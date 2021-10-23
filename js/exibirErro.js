export default function exibirErro(input) {
    alert('opa')

      if(numeros[0] == 0){
         let numero = document.querySelectorAll("div.topo1, div.topo1-direita, div.baixo1-esquerda, div.baixo1, div.topo1-esquerda, div.baixo1-direita");
         let cor = document.querySelectorAll("div.meio1-alto, div.meio1-baixo");
         numero.forEach(numero => {
            numero.style.backgroundColor = "#FF0000"            
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
            numero.style.backgroundColor = "#FF0000"            
         });
         cor.forEach(cor => {
            cor.style.backgroundColor = "#DDDDDD"            
         });
      }
      if(numeros[0] == 2){
         let numero = document.querySelectorAll("div.topo1, div.topo1-direita, div.meio1-alto, div.meio1-baixo, div.baixo1-esquerda, div.baixo1");
         let cor = document.querySelectorAll("div.topo1-esquerda, div.baixo1-direita");
         numero.forEach(numero => {
            numero.style.backgroundColor = "#FF0000"            
         });
         cor.forEach(cor => {
            cor.style.backgroundColor = "#DDDDDD"            
         });
      }
      if(numeros[0] == 3){
         let numero = document.querySelectorAll("div.topo1, div.topo1-direita, div.meio1-alto, div.meio1-baixo, div.baixo1-direita, div.baixo1");
         let cor = document.querySelectorAll("div.topo1-esquerda, div.baixo1-esquerda");
         numero.forEach(numero => {
            numero.style.backgroundColor = "#FF0000"            
         });
         cor.forEach(cor => {
            cor.style.backgroundColor = "#DDDDDD"            
         });
      }
      if(numeros[0] == 4){
         let numero = document.querySelectorAll("div.topo1-esquerda, div.topo1-direita, div.meio1-alto, div.meio1-baixo, div.baixo1-direita");
         let cor = document.querySelectorAll("div.topo1, div.baixo1-esquerda, div.baixo1");
         numero.forEach(numero => {
            numero.style.backgroundColor = "#FF0000"            
         });
         cor.forEach(cor => {
            cor.style.backgroundColor = "#DDDDDD"            
         });
      }
      if(numeros[0] == 5){
         let numero = document.querySelectorAll("div.topo1, div.topo1-esquerda,  div.meio1-alto, div.meio1-baixo, div.baixo1-direita, div.baixo1");
         let cor = document.querySelectorAll("div.topo1-direita, div.baixo1-esquerda");
         numero.forEach(numero => {
            numero.style.backgroundColor = "#FF0000"            
         });
         cor.forEach(cor => {
            cor.style.backgroundColor = "#DDDDDD"            
         });
      }
      if(numeros[0] == 6){
         let numero = document.querySelectorAll("div.topo1, div.topo1-esquerda,  div.meio1-alto, div.meio1-baixo, div.baixo1-direita, div.baixo1-esquerda, div.baixo1");
         let cor = document.querySelectorAll("div.topo1-direita");
         numero.forEach(numero => {
            numero.style.backgroundColor = "#FF0000"            
         });
         cor.forEach(cor => {
            cor.style.backgroundColor = "#DDDDDD"            
         });
      }
      if(numeros[0] == 7){
         let numero = document.querySelectorAll("div.topo1, div.baixo1-direita, div.topo1-direita");
         let cor = document.querySelectorAll("div.meio1-alto, div.meio1-baixo, div.topo1-esquerda, div.baixo1, div.baixo1-esquerda");
         numero.forEach(numero => {
            numero.style.backgroundColor = "#FF0000"            
         });
         cor.forEach(cor => {
            cor.style.backgroundColor = "#DDDDDD"            
         });
      }
      if(numeros[0] == 8){
         let numero = document.querySelectorAll("div.topo1, div.baixo1-direita, div.topo1-direita,div.meio1-alto, div.meio1-baixo, div.topo1-esquerda, div.baixo1, div.baixo1-esquerda");
         numero.forEach(numero => {
            numero.style.backgroundColor = "#FF0000"            
         });
      }
      if(numeros[0] == 9){
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
      if(numeros[1] == 0){
         let numero = document.querySelectorAll("div.topo2, div.topo2-direita, div.baixo2-esquerda, div.baixo2, div.topo2-esquerda, div.baixo2-direita");
         let cor = document.querySelectorAll("div.meio2-alto, div.meio2-baixo");
         numero.forEach(numero => {
            numero.style.backgroundColor = "#FF0000"            
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
            numero.style.backgroundColor = "#FF0000"            
         });
         cor.forEach(cor => {
            cor.style.backgroundColor = "#DDDDDD"            
         });
      }
      if(numeros[1] == 2){
         let numero = document.querySelectorAll("div.topo2, div.topo2-direita, div.meio2-alto, div.meio2-baixo, div.baixo2-esquerda, div.baixo2");
         let cor = document.querySelectorAll("div.topo2-esquerda, div.baixo2-direita");
         numero.forEach(numero => {
            numero.style.backgroundColor = "#FF0000"            
         });
         cor.forEach(cor => {
            cor.style.backgroundColor = "#DDDDDD"            
         });
      }
      if(numeros[1] == 3){
         let numero = document.querySelectorAll("div.topo2, div.topo2-direita, div.meio2-alto, div.meio2-baixo, div.baixo2-direita, div.baixo2");
         let cor = document.querySelectorAll("div.topo2-esquerda, div.baixo2-esquerda");
         numero.forEach(numero => {
            numero.style.backgroundColor = "#FF0000"            
         });
         cor.forEach(cor => {
            cor.style.backgroundColor = "#DDDDDD"            
         });
      }
      if(numeros[1] == 4){
         let numero = document.querySelectorAll("div.topo2-esquerda, div.topo2-direita, div.meio2-alto, div.meio2-baixo, div.baixo2-direita");
         let cor = document.querySelectorAll("div.topo2, div.baixo2-esquerda, div.baixo2");
         numero.forEach(numero => {
            numero.style.backgroundColor = "#FF0000"            
         });
         cor.forEach(cor => {
            cor.style.backgroundColor = "#DDDDDD"            
         });
      }
      if(numeros[1] == 5){
         let numero = document.querySelectorAll("div.topo2, div.topo2-esquerda,  div.meio2-alto, div.meio2-baixo, div.baixo2-direita, div.baixo2");
         let cor = document.querySelectorAll("div.topo2-direita, div.baixo2-esquerda");
         numero.forEach(numero => {
            numero.style.backgroundColor = "#FF0000"            
         });
         cor.forEach(cor => {
            cor.style.backgroundColor = "#DDDDDD"            
         });
      }
      if(numeros[1] == 6){
         let numero = document.querySelectorAll("div.topo2, div.topo2-esquerda,  div.meio2-alto, div.meio2-baixo, div.baixo2-direita, div.baixo2-esquerda, div.baixo2");
         let cor = document.querySelectorAll("div.topo2-direita");
         numero.forEach(numero => {
            numero.style.backgroundColor = "#FF0000"            
         });
         cor.forEach(cor => {
            cor.style.backgroundColor = "#DDDDDD"            
         });
      }
      if(numeros[1] == 7){
         let numero = document.querySelectorAll("div.topo2, div.baixo2-direita, div.topo2-direita");
         let cor = document.querySelectorAll("div.meio2-alto, div.meio2-baixo, div.topo2-esquerda, div.baixo2, div.baixo2-esquerda");
         numero.forEach(numero => {
            numero.style.backgroundColor = "#FF0000"            
         });
         cor.forEach(cor => {
            cor.style.backgroundColor = "#DDDDDD"            
         });
      }
      if(numeros[1] == 8){
         let numero = document.querySelectorAll("div.topo2, div.baixo2-direita, div.topo2-direita,div.meio2-alto, div.meio2-baixo, div.topo2-esquerda, div.baixo2, div.baixo2-esquerda");
         numero.forEach(numero => {
            numero.style.backgroundColor = "#FF0000"            
         });
      }
      if(numeros[1] == 9){
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
      if(numeros[2] == 0){
         let numero = document.querySelectorAll("div.topo3, div.topo3-direita, div.baixo3-esquerda, div.baixo3, div.topo3-esquerda, div.baixo3-direita");
         let cor = document.querySelectorAll("div.meio3-alto, div.meio3-baixo");
         numero.forEach(numero => {
            numero.style.backgroundColor = "#FF0000"            
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
            numero.style.backgroundColor = "#FF0000"            
         });
         cor.forEach(cor => {
            cor.style.backgroundColor = "#DDDDDD"            
         });
      }
      if(numeros[2] == 2){
         let numero = document.querySelectorAll("div.topo3, div.topo3-direita, div.meio3-alto, div.meio3-baixo, div.baixo3-esquerda, div.baixo3");
         let cor = document.querySelectorAll("div.topo3-esquerda, div.baixo3-direita");
         numero.forEach(numero => {
            numero.style.backgroundColor = "#FF0000"            
         });
         cor.forEach(cor => {
            cor.style.backgroundColor = "#DDDDDD"            
         });
      }
      if(numeros[2] == 3){
         let numero = document.querySelectorAll("div.topo3, div.topo3-direita, div.meio3-alto, div.meio3-baixo, div.baixo3-direita, div.baixo3");
         let cor = document.querySelectorAll("div.topo3-esquerda, div.baixo3-esquerda");
         numero.forEach(numero => {
            numero.style.backgroundColor = "#FF0000"            
         });
         cor.forEach(cor => {
            cor.style.backgroundColor = "#DDDDDD"            
         });
      }
      if(numeros[2] == 4){
         let numero = document.querySelectorAll("div.topo3-esquerda, div.topo3-direita, div.meio3-alto, div.meio3-baixo, div.baixo3-direita");
         let cor = document.querySelectorAll("div.topo3, div.baixo3-esquerda, div.baixo3");
         numero.forEach(numero => {
            numero.style.backgroundColor = "#FF0000"            
         });
         cor.forEach(cor => {
            cor.style.backgroundColor = "#DDDDDD"            
         });
      }
      if(numeros[2] == 5){
         let numero = document.querySelectorAll("div.topo3, div.topo3-esquerda,  div.meio3-alto, div.meio3-baixo, div.baixo3-direita, div.baixo3");
         let cor = document.querySelectorAll("div.topo3-direita, div.baixo3-esquerda");
         numero.forEach(numero => {
            numero.style.backgroundColor = "#FF0000"            
         });
         cor.forEach(cor => {
            cor.style.backgroundColor = "#DDDDDD"            
         });
      }
      if(numeros[2] == 6){
         let numero = document.querySelectorAll("div.topo3, div.topo3-esquerda,  div.meio3-alto, div.meio3-baixo, div.baixo3-direita, div.baixo3-esquerda, div.baixo3");
         let cor = document.querySelectorAll("div.topo3-direita");
         numero.forEach(numero => {
            numero.style.backgroundColor = "#FF0000"            
         });
         cor.forEach(cor => {
            cor.style.backgroundColor = "#DDDDDD"            
         });
      }
      if(numeros[2] == 7){
         let numero = document.querySelectorAll("div.topo3, div.baixo3-direita, div.topo3-direita");
         let cor = document.querySelectorAll("div.meio3-alto, div.meio3-baixo, div.topo3-esquerda, div.baixo3, div.baixo3-esquerda");
         numero.forEach(numero => {
            numero.style.backgroundColor = "#FF0000"            
         });
         cor.forEach(cor => {
            cor.style.backgroundColor = "#DDDDDD"            
         });
      }
      if(numeros[2] == 8){
         let numero = document.querySelectorAll("div.topo3, div.baixo3-direita, div.topo3-direita,div.meio3-alto, div.meio3-baixo, div.topo3-esquerda, div.baixo3, div.baixo3-esquerda");
         numero.forEach(numero => {
            numero.style.backgroundColor = "#FF0000"            
         });
      }
      if(numeros[2] == 9){
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