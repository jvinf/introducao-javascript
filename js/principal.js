var titulo = document.querySelector(".titulo");
titulo.textContent = ("Jon Nutrição");
 
var Paciente = document.querySelector('#primeiro-paciente');

var altura = Paciente.querySelector('.info-altura').textContent;
var peso = Paciente.querySelector('.info-peso').textContent;

var imc = peso / (altura * 2) 

var tdImc = Paciente.querySelector('.info-imc');
tdImc.textContent = imc;

var validaPeso = true;
var validaAltura = true;

if (peso < 0 || peso > 1000){
    validaPeso = false;
    tdImc.textContent = "Peso inválido";
    console.log("Peso inválido");
}

if (altura < 0 || altura > 3.00){
    console.log("Altura inválida");
}

console.log(altura);
console.log(peso);
console.log(imc);
console.log(tdImc);