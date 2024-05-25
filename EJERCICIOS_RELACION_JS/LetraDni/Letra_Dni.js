/* 

* JS de letradni.html.
* Realizado el día 24/5/2024
* Autor: María Lucia Lopez Lopez

*/

function calculoLetra (){

    const LETRA = "TRWAGMYFPDXBNJZSQVHLCKE";
    const RESTO = 23;

    let dni = parseInt(document.getElementById("dni").value);
    let resto = dni % RESTO;

    document.getElementById("resultado").innerHTML = "La letra es: " + LETRA[resto];

    return false;

}
