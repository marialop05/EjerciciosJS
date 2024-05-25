/***************************************
*JS de suma-formulario.html
* Realizado el día 24/5/2024
* Autor : María Lucía López López
*/
function calcular() {
    const numero1 = parseFloat(document.getElementById("numero1").value);
    const numero2 = parseFloat(document.getElementById("numero2").value);
    const operacion = parseInt(document.getElementById("operacion").value);
    let resultado;

    switch (operacion) {
        case 1:
            resultado = numero1 + numero2;
            break;
        case 2:
            resultado = numero1 - numero2;
            break;
        case 3:
            resultado = numero1 * numero2;
            break;
        case 4:
            resultado = numero1 / numero2;
            break;
        default:
            resultado = NaN;
    }

    const resultadoElement = document.getElementById("resultado");

    if (isNaN(resultado)) {
        resultadoElement.innerHTML = "<span class='text-danger'>Error en la introducción de datos.</span>";
    } else {
        resultadoElement.textContent = "El resultado es: " + resultado;
    }

    return false;
}
document.addEventListener('DOMContentLoaded', function() {
    const calculadoraForm = document.getElementById('calculadoraForm');
    const calcularBtn = document.getElementById('calcularBtn');

    calcularBtn.addEventListener('click', function(event) {
        event.preventDefault();
        calcular();
    });
});

function cambiarTema(backgroundColor, textColor, borderColor, buttonColor) {
    document.body.style.backgroundColor = backgroundColor;
    document.body.style.color = textColor;
    let encabezados = document.querySelectorAll("h1, h3");
    let linea = document.querySelector("hr");
    let labels = document.querySelectorAll("label");
    let botones = document.querySelectorAll("button");
    let formulario = document.querySelector("form");

    formulario.setAttribute("class", "border " + borderColor + " p-5 mt-5");
    encabezados.forEach(elemento => {
        elemento.setAttribute("class", "text-center " + textColor);
    });
    linea.setAttribute("class", "text-center " + textColor);
    labels.forEach(label => {
        label.setAttribute("class", "text-center " + textColor);
    });
    botones.forEach(boton => {
        boton.setAttribute("class", "btn " + buttonColor);
    });
}

function Dark() {
    cambiarTema("black", "white", "border-warning", "btn-warning");
}

function Light() {
    cambiarTema("white", "black", "border-primary", "btn-primary");
}
