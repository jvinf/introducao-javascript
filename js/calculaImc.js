var titulo = document.querySelector(".titulo");
titulo.textContent = ("Jon Nutrição");

var pacientes = document.querySelectorAll('.paciente');


for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var altura = paciente.querySelector('.info-altura').textContent;
    var peso = paciente.querySelector('.info-peso').textContent;
   
    var tdImc = paciente.querySelector('.info-imc');


    var validaPeso = true;
    var validaAltura = true;

    if (peso < 0 || peso > 1000) {
        validaPeso = false;
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    }

    if (altura < 0 || altura > 3.00) {
        validaAltura = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }

    if (validaPeso && validaAltura){
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
        
    }

}
