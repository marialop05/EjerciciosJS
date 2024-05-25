/***************************************
*JS de Ejercicio5.html
* Realizado el día 24/5/2024
* Autor : María Lucía López López
****************************************/

function verificarCadena(cadena) {
    if (cadena === cadena.toUpperCase() && /[a-zA-Z]/.test(cadena)) {
        return "La cadena está en mayúsculas.";
    } else if (cadena === cadena.toLowerCase() && /[a-zA-Z]/.test(cadena)) {
        return "La cadena está en minúsculas.";
    } else if (/[a-zA-Z]/.test(cadena)) {
        return "La cadena contiene una mezcla de mayúsculas y minúsculas.";
    } else {
        return "La cadena no contiene letras.";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('cadenaForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const cadena = document.getElementById('cadena').value.trim();

        if (!/[a-zA-Z]/.test(cadena)) {
            alert("Por favor, introduce una cadena con al menos una letra.");
            return;
        }

        const resultado = verificarCadena(cadena);
        document.getElementById('resultado').textContent = resultado;
    });
});