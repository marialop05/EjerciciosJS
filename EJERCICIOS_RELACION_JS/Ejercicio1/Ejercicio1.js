/***************************************
*JS de Ejercicio1.html
* Realizado el día 24/5/2024
* Autor : María Lucía López López
****************************************/
        
function mostrarMensaje() {
            
    console.log("Hola mundo");

    
    alert("Hola mundo");

    
    document.getElementById("mensaje").innerHTML = "Hola mundo";
}


document.getElementById("triggerButton").onclick = mostrarMensaje;