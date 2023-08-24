let visor = document.querySelector(".visor");
let num = document.querySelectorAll(".num");
let op = document.querySelectorAll('.op');
// Operadores individuais
let mais = document.querySelector('.mais');
let menos = document.querySelector('.menos');
let multiplicar = document.querySelector('.multiplicar');
let dividir = document.querySelector('.dividir');
let igual = document.querySelector('.igual');


let result = ""; //Armazenador da concatenação de string
let result2 = ""; //Armazenador da concatenação de string
let armRes = ""; //Armazenador do primeiro parametro
let armRes2 = ""; //Armazenador do segundo parametro
let operador = false;
let total = "";

// variaveis de verificação para restultado
let verMais = "";
let verMenos = "";
let verMulti = "";
let verDivi = "";




//Atribuição de valores
//visor.placeholder = "2" + "1" + "4" + "5" + "2" + "1" + "4" + "5" + "2" + "1" + "4" + "5";


//pensar em alguma maneira de concatenar os numeros no visor da calculadora, talvez o uso de um looping funcione


//Função que percorre os botões para que haja o efeito de concatenação no visor da calculadora


//Condicional para o visor printar o primeiro parametro e o segundo parametro
  function numeros(e){
      let botoes = e.currentTarget.innerText;
      if(operador === false){
        result += botoes;
        visor.placeholder = result;
        console.log(result);      
      } else if(operador === true){
        result2 += botoes;
        visor.placeholder = result2;
        console.log(result2);
     };
  }
  
num.forEach(e => {
  e.addEventListener("click",numeros);
});

//Funções operacionais

function soma(){
  operador = true;
  verMais = true;
  armRes = parseInt(result);
  console.log(total);
}

mais.addEventListener('click',soma);

function subtracao(){
  operador = true;
  verMenos = true;
  armRes = parseInt(result);
  console.log(total);
}

menos.addEventListener('click',subtracao);

function multiplicacao(){
  operador = true;
  verMulti = true;
  armRes = parseInt(result);
  console.log(total);
}

multiplicar.addEventListener('click',multiplicacao);

function divisao(){
  operador = true;
  verDivi = true;
  armRes = parseInt(result);
  console.log(total);
}

dividir.addEventListener('click',divisao);

//Arvore de verificação de op no resultado
function resultadoIgual(){
  armRes2 = parseInt(result2);
  if(verMais === true){
    total = armRes + armRes2;
    visor.placeholder = total;
  } else if (verMenos === true){
    total = armRes - armRes2;
    visor.placeholder = total;
  } else if (verMulti === true){
    total = armRes * armRes2;
    visor.placeholder = total;
  } else if (verDivi === true){
    total = armRes / armRes2;
    visor.placeholder = total;
  }
}

igual.addEventListener('click',resultadoIgual);


/* Função para converter a concatenação em um número
function converterParaNumero() {
 let numero = parseInt(result); */

 /*para o ponto é necessário fazer um if para verificar se já existe um ponto no visor, caso já exista
 então não é possivel adicionar outro ponto(ou virgula), colocar outro if caso não exista nenhum numero,
 ao clicar na virgula o Zero é adicionado junto com a virgula*/

 /* Para reiniciar a calculadora, após o resultado, colocar um evento onclick para que quando 
 acionar um dos botoes de numero, apagada a operação anterior
 Adicionar uma cadeia condicional para que possa ser feito mais operações 
 */