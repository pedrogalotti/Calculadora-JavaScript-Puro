// resetar Visor disativado
var resetarVisor = false;
const divContainer = document.createElement("div");

// receber o conteudo da calculadora
divContainer.classList.add('container');
divContainer.classList.add('bg-secondary');
divContainer.classList.add('col-4');




// Criar titulo
const title = document.createElement('h1');
// Escrever titulo na page
title.innerHTML = "Calculadora";
// Centrar no meio
title.classList.add('text-center');
// Luz do texto (texto claro)
title.classList.add('text-light');
// Adicionar title ao Visor
divContainer.append(title);



// Variavel para mostrar resultado
var divInputResultado = document.createElement("div");
// Criar linha
divInputResultado.classList.add('row');
// Ajustar linha no centro
divInputResultado.classList.add('justify-content-center');



// Variavel para receber os valores da calculadora
var inputResultado = document.createElement("input");
// Pegar valor do visor
inputResultado.id = "visor";
// Sobescrito no visor
inputResultado.placeholder = "0";
//
inputResultado.classList.add('from-control');
// Ativar resultado
inputResultado.disabled = true;
// append adicionar
divInputResultado.append(inputResultado);
// appendChild criar e adcionar
divContainer.appendChild(divInputResultado);




// div que armazenará todos os botões da 1° linha

// Criar div pra 1° linha
var divPrimeiraLinha = document.createElement("div");
// Adicionar linha
divPrimeiraLinha.classList.add('row');
// Centralizar linha ao meio
divPrimeiraLinha.classList.add('justify-content-center');




// Criando Button C
var buttonC = document.createElement('button');
// Aqui usamos a class BTN que é responsável pelo visual do botão
buttonC.classList.add('btn');
// Deixará o elemento do botão na cor escura
buttonC.classList.add('btn-dark');
// Deixará o botão maior (mais largo)
buttonC.classList.add('btn-lg');
// Configura a espessua da fonte dentro do botão
buttonC.classList.add('font-weight-light');
// adiciona o contorno
buttonC.classList.add('border');
// deixará a cor no contorno mais clara
buttonC.classList.add('border-light');
// add ao destino desse elemento
buttonC.classList.add('btn-calc');
// tamanho
buttonC.classList.add('col-6');
buttonC.onclick = function(){
  var visor = document.getElementById('visor');
  visor.value = "";
}
// adicionar texto dentro do botão
buttonC.innerHTML = "C";
// adicionar o botão na nossa 1° linha
divPrimeiraLinha.append(buttonC);




var buttonDivider = document.createElement('button');
// Aqui usamos a class BTN que é responsável pelo visual do botão
buttonDivider.classList.add('btn');
// Deixará o elemento do botão na cor escura
buttonDivider.classList.add('btn-dark');
// Deixará o botão maior (mais largo)
buttonDivider.classList.add('btn-lg');
// Configura a espessua da fonte dentro do botão
buttonDivider.classList.add('font-weight-light');
// adiciona o contorno
buttonDivider.classList.add('border');
// deixará a cor no contorno mais clara
buttonDivider.classList.add('border-light');
// add ao destino desse elemento
buttonDivider.classList.add('btn-calc');
// tamanho
buttonDivider.classList.add('col-3');
buttonDivider.onclick = function(){
  var visor = document.getElementById('visor');

  if(resetarVisor){
    resetarVisor = false;
    visor.value = "";
  }

  if(visor.value == ""){
    return;
  }

  visor.value += "/";
};
// adicionar texto dentro do botão
buttonDivider.innerHTML = "/";
// adicionar o botão na nossa 1° linha
divPrimeiraLinha.append(buttonDivider);




var buttonMulti = document.createElement('button');
// Aqui usamos a class BTN que é responsável pelo visual do botão
buttonMulti.classList.add('btn');
// Deixará o elemento do botão na cor escura
buttonMulti.classList.add('btn-dark');
// Deixará o botão maior (mais largo)
buttonMulti.classList.add('btn-lg');
// Configura a espessua da fonte dentro do botão
buttonMulti.classList.add('font-weight-light');
// adiciona o contorno
buttonMulti.classList.add('border');
// deixará a cor no contorno mais clara
buttonMulti.classList.add('border-light');
// add ao destino desse elemento
buttonMulti.classList.add('btn-calc');
// tamanho
buttonMulti.classList.add('col-3');
buttonMulti.onclick = function(){
  var visor = document.getElementById('visor');

  if(resetarVisor){
    resetarVisor = false;
    visor.value = "";
  }

  if(visor.value == ""){
    return;
  }

  visor.value += "*";
};
// adicionar texto dentro do botão
buttonMulti.innerHTML = "*";
// adicionar o botão na nossa 1° linha
divPrimeiraLinha.append(buttonMulti);


// adicionar o conteúdo da 1° linha no calculadora
divContainer.appendChild(divPrimeiraLinha);



// criar segunda linha
var divSegundaLinha = document.createElement('div');
// adicionar linha
divSegundaLinha.classList.add('row');
// centrar linha no meio
divSegundaLinha.classList.add('justify-content-center');


var button7 = document.createElement('button');
// Aqui usamos a class BTN que é responsável pelo visual do botão
button7.classList.add('btn');
// Deixará o elemento do botão na cor escura
button7.classList.add('btn-dark');
// Deixará o botão maior (mais largo)
button7.classList.add('btn-lg');
// Configura a espessua da fonte dentro do botão
button7.classList.add('font-weight-light');
// adiciona o contorno
button7.classList.add('border');
// deixará a cor no contorno mais clara
button7.classList.add('border-light');
// add ao destino desse elemento
button7.classList.add('btn-calc');
// adicionar texto dentro do botão
button7.innerHTML = "7";
// tamanho
button7.classList.add('col-3');
button7.onclick = function(){
  var visor = document.getElementById('visor');

  if(resetarVisor){
    resetarVisor = false;
    visor.value = "";

  }

  visor.value += "7";
};
// adicionar o botão na nossa 1° linha
divSegundaLinha.append(button7);




var button8 = document.createElement('button');
// Aqui usamos a class BTN que é responsável pelo visual do botão
button8.classList.add('btn');
// Deixará o elemento do botão na cor escura
button8.classList.add('btn-dark');
// Deixará o botão maior (mais largo)
button8.classList.add('btn-lg');
// Configura a espessua da fonte dentro do botão
button8.classList.add('font-weight-light');
// adiciona o contorno
button8.classList.add('border');
// deixará a cor no contorno mais clara
button8.classList.add('border-light');
// add ao destino desse elemento
button8.classList.add('btn-calc');
// adicionar texto dentro do botão
button8.innerHTML = "8";
// tamanho
button8.classList.add('col-3');
button8.onclick = function(){
  var visor = document.getElementById('visor');

  if(resetarVisor){
    resetarVisor = false;
    visor.value = "";

  }

  visor.value += "8";
};
// adicionar o botão na nossa 1° linha
divSegundaLinha.append(button8);




var button9 = document.createElement('button');
// Aqui usamos a class BTN que é responsável pelo visual do botão
button9.classList.add('btn');
// Deixará o elemento do botão na cor escura
button9.classList.add('btn-dark');
// Deixará o botão maior (mais largo)
button9.classList.add('btn-lg');
// Configura a espessua da fonte dentro do botão
button9.classList.add('font-weight-light');
// adiciona o contorno
button9.classList.add('border');
// deixará a cor no contorno mais clara
button9.classList.add('border-light');
// add ao destino desse elemento
button9.classList.add('btn-calc');
// adicionar texto dentro do botão
button9.innerHTML = "9";
// tamanho
button9.classList.add('col-3');
button9.onclick = function(){
  var visor = document.getElementById('visor');

  if(resetarVisor){
    resetarVisor = false;
    visor.value = "";

  }

  visor.value += "9";
};
// adicionar o botão na nossa 1° linha
divSegundaLinha.append(button9);


var buttonMenos = document.createElement('button');
// Aqui usamos a class BTN que é responsável pelo visual do botão
buttonMenos.classList.add('btn');
// Deixará o elemento do botão na cor escura
buttonMenos.classList.add('btn-dark');
// Deixará o botão maior (mais largo)
buttonMenos.classList.add('btn-lg');
// Configura a espessua da fonte dentro do botão
buttonMenos.classList.add('font-weight-light');
// adiciona o contorno
buttonMenos.classList.add('border');
// deixará a cor no contorno mais clara
buttonMenos.classList.add('border-light');
// add ao destino desse elemento
buttonMenos.classList.add('btn-calc');
// tamanho
buttonMenos.classList.add('col-3');
buttonMenos.onclick = function(){
  var visor = document.getElementById('visor');

  if(resetarVisor){
    resetarVisor = false;
    visor.value = "";

  }

  if(visor.value == ""){
    return;
  }

  visor.value += "-";
}
// adicionar texto dentro do botão
buttonMenos.innerHTML = "-";
// adicionar o botão na nossa 1° linha
divSegundaLinha.append(buttonMenos);

// adicionar 2° linha a calculador
divContainer.appendChild(divSegundaLinha);



var button4 = document.createElement('button');
// Aqui usamos a class BTN que é responsável pelo visual do botão
button4.classList.add('btn');
// Deixará o elemento do botão na cor escura
button4.classList.add('btn-dark');
// Deixará o botão maior (mais largo)
button4.classList.add('btn-lg');
// Configura a espessua da fonte dentro do botão
button4.classList.add('font-weight-light');
// adiciona o contorno
button4.classList.add('border');
// deixará a cor no contorno mais clara
button4.classList.add('border-light');
// add ao destino desse elemento
button4.classList.add('btn-calc');
// adicionar texto dentro do botão
button4.innerHTML = "4";
// tamanho
button4.classList.add('col-3');
button4.onclick = function(){
  var visor = document.getElementById('visor');

  if(resetarVisor){
    resetarVisor = false;
    visor.value = "";

  }

  visor.value += "4";
};
// adicionar o botão na nossa 1° linha
divSegundaLinha.append(button4);




var button5 = document.createElement('button');
// Aqui usamos a class BTN que é responsável pelo visual do botão
button5.classList.add('btn');
// Deixará o elemento do botão na cor escura
button5.classList.add('btn-dark');
// Deixará o botão maior (mais largo)
button5.classList.add('btn-lg');
// Configura a espessua da fonte dentro do botão
button5.classList.add('font-weight-light');
// adiciona o contorno
button5.classList.add('border');
// deixará a cor no contorno mais clara
button5.classList.add('border-light');
// add ao destino desse elemento
button5.classList.add('btn-calc');
// adicionar texto dentro do botão
button5.innerHTML = "5";
// tamanho
button5.classList.add('col-3');
button5.onclick = function(){
  var visor = document.getElementById('visor');

  if(resetarVisor){
    resetarVisor = false;
    visor.value = "";

  }

  visor.value += "5";
};
// adicionar o botão na nossa 1° linha
divSegundaLinha.append(button5);




var button6 = document.createElement('button');
// Aqui usamos a class BTN que é responsável pelo visual do botão
button6.classList.add('btn');
// Deixará o elemento do botão na cor escura
button6.classList.add('btn-dark');
// Deixará o botão maior (mais largo)
button6.classList.add('btn-lg');
// Configura a espessua da fonte dentro do botão
button6.classList.add('font-weight-light');
// adiciona o contorno
button6.classList.add('border');
// deixará a cor no contorno mais clara
button6.classList.add('border-light');
// add ao destino desse elemento
button6.classList.add('btn-calc');
// adicionar texto dentro do botão
button6.innerHTML = "6";
// tamanho
button6.classList.add('col-3');
button6.onclick = function(){
  var visor = document.getElementById('visor');

  if(resetarVisor){
    resetarVisor = false;
    visor.value = "";

  }

  visor.value += "6";
};
// adicionar o botão na nossa 1° linha
divSegundaLinha.append(button6);


var buttonMais = document.createElement('button');
// Aqui usamos a class BTN que é responsável pelo visual do botão
buttonMais.classList.add('btn');
// Deixará o elemento do botão na cor escura
buttonMais.classList.add('btn-dark');
// Deixará o botão maior (mais largo)
buttonMais.classList.add('btn-lg');
// Configura a espessua da fonte dentro do botão
buttonMais.classList.add('font-weight-light');
// adiciona o contorno
buttonMais.classList.add('border');
// deixará a cor no contorno mais clara
buttonMais.classList.add('border-light');
// add ao destino desse elemento
buttonMais.classList.add('btn-calc');
// tamanho
buttonMais.classList.add('col-3');
buttonMais.onclick = function() {
  var visor = document.getElementById('visor');

  if(resetarVisor){
    resetarVisor = false;
    visor.value = "";

  }

  if(visor.value == ""){
    return;

  }

  visor.value += "+";
};
// adicionar texto dentro do botão
buttonMais.innerHTML = "+";
// adicionar o botão na nossa 1° linha
divSegundaLinha.append(buttonMais);


// criar 3° linha
var divTerceiraLinha = document.createElement('div');
// criar linha
divTerceiraLinha.classList.add('row');
// centralizar terceira linha ao centro
divTerceiraLinha.classList.add('justify-content-center');


var button1 = document.createElement('button');
// Aqui usamos a class BTN que é responsável pelo visual do botão
button1.classList.add('btn');
// Deixará o elemento do botão na cor escura
button1.classList.add('btn-dark');
// Deixará o botão maior (mais largo)
button1.classList.add('btn-lg');
// Configura a espessua da fonte dentro do botão
button1.classList.add('font-weight-light');
// adiciona o contorno
button1.classList.add('border');
// deixará a cor no contorno mais clara
button1.classList.add('border-light');
// add ao destino desse elemento
button1.classList.add('btn-calc');
// adicionar texto dentro do botão
button1.innerHTML = "1";
// tamanho
button1.classList.add('col-3');
button1.onclick = function(){
  var visor = document.getElementById('visor');

  if(resetarVisor){
    resetarVisor = false;
    visor.value = "";

  }

  visor.value += "1";
};
// adicionar o botão na nossa 1° linha
divTerceiraLinha.append(button1);



var button2 = document.createElement('button');
// Aqui usamos a class BTN que é responsável pelo visual do botão
button2.classList.add('btn');
// Deixará o elemento do botão na cor escura
button2.classList.add('btn-dark');
// Deixará o botão maior (mais largo)
button2.classList.add('btn-lg');
// Configura a espessua da fonte dentro do botão
button2.classList.add('font-weight-light');
// adiciona o contorno
button2.classList.add('border');
// deixará a cor no contorno mais clara
button2.classList.add('border-light');
// add ao destino desse elemento
button2.classList.add('btn-calc');
// adicionar texto dentro do botão
button2.innerHTML = "2";
// tamanho
button2.classList.add('col-3');
button2.onclick = function(){
  var visor = document.getElementById('visor');

  if(resetarVisor){
    resetarVisor = false;
    visor.value = "";

  }

  visor.value += "2";
};
// adicionar o botão na nossa 1° linha
divTerceiraLinha.append(button2);


var button3 = document.createElement('button');
// Aqui usamos a class BTN que é responsável pelo visual do botão
button3.classList.add('btn');
// Deixará o elemento do botão na cor escura
button3.classList.add('btn-dark');
// Deixará o botão maior (mais largo)
button3.classList.add('btn-lg');
// Configura a espessua da fonte dentro do botão
button3.classList.add('font-weight-light');
// adiciona o contorno
button3.classList.add('border');
// deixará a cor no contorno mais clara
button3.classList.add('border-light');
// add ao destino desse elemento
button3.classList.add('btn-calc');
// adicionar texto dentro do botão
button3.innerHTML = "3";
// tamanho
button3.classList.add('col-3');
button3.onclick = function(){
  var visor = document.getElementById('visor');

  if(resetarVisor){
    resetarVisor = false;
    visor.value = "";

  }

  visor.value += "3";
};
// adicionar o botão na nossa 1° linha
divTerceiraLinha.append(button3);


var buttonPonto = document.createElement('button');
// Aqui usamos a class BTN que é responsável pelo visual do botão
buttonPonto.classList.add('btn');
// Deixará o elemento do botão na cor escura
buttonPonto.classList.add('btn-dark');
// Deixará o botão maior (mais largo)
buttonPonto.classList.add('btn-lg');
// Configura a espessua da fonte dentro do botão
buttonPonto.classList.add('font-weight-light');
// adiciona o contorno
buttonPonto.classList.add('border');
// deixará a cor no contorno mais clara
buttonPonto.classList.add('border-light');
// add ao destino desse elemento
buttonPonto.classList.add('btn-calc');
// tamanho
buttonPonto.classList.add('col-3');
buttonPonto.onclick = function() {
  var visor = document.getElementById('visor');

  if(resetarVisor){
    resetarVisor = false;
    visor.value = "";

  }

  if(visor.value == ""){
    return;

  }

  visor.value += ".";
}
// adicionar texto dentro do botão
buttonPonto.innerHTML = ".";
// adicionar o botão na nossa 1° linha
divTerceiraLinha.append(buttonPonto);

// adicionar 3° linha a calculadora
divContainer.appendChild(divTerceiraLinha);


// criar 4° linha
var divQuartaLinha = document.createElement('div');
divQuartaLinha.classList.add('row');
divQuartaLinha.classList.add('justify-content-center');


var button0 = document.createElement('button');
// Aqui usamos a class BTN que é responsável pelo visual do botão
button0.classList.add('btn');
// Deixará o elemento do botão na cor escura
button0.classList.add('btn-dark');
// Deixará o botão maior (mais largo)
button0.classList.add('btn-lg');
// Configura a espessua da fonte dentro do botão
button0.classList.add('font-weight-light');
// adiciona o contorno
button0.classList.add('border');
// deixará a cor no contorno mais clara
button0.classList.add('border-light');
// add ao destino desse elemento
button0.classList.add('btn-calc');
// adicionar texto dentro do botão
button0.innerHTML = "0";
// tamanho
button0.classList.add('col-3');
// adicionar o botão na nossa 1° linha
divQuartaLinha.append(button0);


var buttonIgual = document.createElement('button');
// Aqui usamos a class BTN que é responsável pelo visual do botão
buttonIgual.classList.add('btn');
// Deixará o elemento do botão na cor escura
buttonIgual.classList.add('btn-dark');
// Deixará o botão maior (mais largo)
buttonIgual.classList.add('btn-lg');
// Configura a espessua da fonte dentro do botão
buttonIgual.classList.add('font-weight-light');
// adiciona o contorno
buttonIgual.classList.add('border');
// deixará a cor no contorno mais clara
buttonIgual.classList.add('border-light');
// add ao destino desse elemento
buttonIgual.classList.add('btn-calc');
// adicionar texto dentro do botão
buttonIgual.innerHTML = "=";
buttonIgual.onclick = function(){
  var visor = document.getElementById('visor');

  try{
    var result = eval(visor.value);
    if(isNaN(parseFloat(result)) || !isFinite(result)) {
        visor.value = "Falha na expressão";
    } else {
        visor.value = result;
    }
  } catch(e){
      visor.value = "Falha!";
  }

  resetarVisor = true;
};
// tamanho
buttonIgual.classList.add('col-9');
// adicionar o botão na nossa 1° linha
divQuartaLinha.append(buttonIgual);

// adicionar 4° linha a calculadora
divContainer.appendChild(divQuartaLinha);

// Adicionar na page os elementos criados (linhas, botões e visor)
document.body.append(divContainer);