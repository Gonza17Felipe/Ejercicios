// Ejercicio 1
// Muestra los numeros del 1 al 20 divisibles entre 2 y 3. Numeros divisibles

function falgo1(){
    var a=0;
    
    a= parseInt(prompt("Por favor ingrese el valor 1"));

    while(a<=90){
        if (a%2==0 && a%3==0) {
            alert("Los numeros son: " + a);
        }
        a++;
    }
    alert("Gracias");
    var selector = document.getElementById("falgo1");
    selector.classList.toggle("falgo1");
}

//Ejercicio 2
// Digite un dia en la semana y se le indicara si es laborable o no.

function falgo2(){
    var dia=0;
    dia=(prompt("Por favor ingrese un dia de la semana"));
    

    switch (dia) {
        case "lunes":
        case "martes":
        case "miercoles":
        case "jueves":
        case "viernes":
            alert("Es un dia laborable");
            break;
        case "sabado":
        case "domingo":
            alert ("Dia no laborable");
    }
    alert("Gracias");
    var selector = document.getElementById("falgo2");
    selector.classList.toggle("falgo2");

}

//Ejercicio 3
// Calcular cuanto gasto en almuerzos diarios (indicando los días) 
//y sacar el promedio de los gastos

function falgo3(){

    var dia=0;
    var almuerzo=0;
    var total=0;
    var promedio=0;

    alert("Bienvenidos");

    for (int= 0; int <= dia; int++) {
        dia=parseInt(prompt("Digite los dias que almuerza en restaurante"));
        alert("valor" + dia);
        almuerzo=parseInt(prompt("Precios de almuerzos"));
        total=total+almuerzo;
        promedio=total/dia;
    }
      alert ("La suma es: " + total);
      alert("El promedio es: " + promedio);

alert("Gracias");
var selector = document.getElementById("falgo3");
    selector.classList.toggle("falgo3");
} 

//Ejercicio 4
// Digite una contraseña de 4 digitos, el 3 intento es el que acierta.

function falgo4(){

    var contraseña=1234;
    var intentos=3;
    var acierto=0;
    
    alert("Bienvenido (a)");
    

    for (int= 0; int < intentos; int++) {
        contraseña=parseInt(prompt("Por favor digite la contraseña de cuatro (4) digitos"));  
    }
    if (contraseña) {
        alert("Felicitaciones, acertaste la contraseña");
        acierto=true;
    }
    else{
        intentos=false;
        alert("La contraseña esta incorrecta, intente nuevamente");
    } 
    alert("Gracias");
    var selector = document.getElementById("falgo4");
    selector.classList.toggle("falgo4");
}

//Ejercicio 5
// Ventas

function falgo5(){
    var numVentas=0;
    var sumaVentas=0;
    var ventas=0;

    numVentas=parseInt(prompt("Por favor ingresar cuantas ventas se hizo en el dia"));
    ventas=parseInt(prompt("Por favor introducir los precios de las ventas"));
    
    for (numVentas = 0; numVentas <= ventas; numVentas++) {
        sumaVentas= numVentas * ventas;

    }
    alert("La suma de las ventas son: " + sumaVentas);
    alert("Gracias");
    var selector = document.getElementById("falgo5");
    selector.classList.toggle("falgo5");
}

//Ejercicio 6
// Heladeria

function falgo6(){
    var helado=0;
    var cantidad=0;
    var precio=3000;
    var precioFinal=0;

    alert("Bienvenido a la heladeria");
    helado=prompt("Por favor digite el helado que desee");
    cantidad=parseInt(prompt("Cuantos helados desea"));
    precioFinal= cantidad * precio;

    switch (helado) {
        case "ron con pasas":
            break;
        case "chicle":
            break;
        case "brownie":
            break;
        case "arequipe":
            break;
        default:
            alert("Ese helado no lo tenemos");
    }
    
    alert("El precio es:"+ precioFinal);
    alert("Muchas gracias por su compra, vuelva pronto");
    alert("Gracias");
    var selector = document.getElementById("falgo6");
    selector.classList.toggle("falgo6");
}

//Ejercicio 7
// Preguntar si el usuario es culpable o no

function falgo7(){
    var culpable = prompt("¿eres culpable?");

	if(culpable=="si"){
		alert("irás a la cárcel");
	}else if(culpable=="no"){
		alert("irás a casa");
	}else{
		alert("la documentación por favor");
	}
    alert("Gracias");
    var selector = document.getElementById("falgo7");
    selector.classList.toggle("falgo7");
}


//Ejercicio 8 
// Semestres del año

function falgo8(){
    var dia;
    var mes;
    var año;
        dia = parseInt(prompt('Ingrese día:'));
        mes = parseInt(prompt('Ingrese mes:'));
        año = parseInt(prompt('Ingrese año:'));
        if (mes == 1 || mes == 2 || mes == 3) {
            alert('corresponde al primer trimestre del año.');
        }
        if (mes == 4 || mes == 5 || mes == 6) {
            alert('corresponde al segundo trimestre del año.');
        }
        if (mes == 7 || mes == 8 || mes == 9) {
            alert('corresponde al tercer trimestre del año.');
        }
        if (mes == 10 || mes == 11 || mes == 12) {
            alert('corresponde al cuarto trimestre del año.');
        }
        alert("Gracias");
    var selector = document.getElementById("falgo8");
    selector.classList.toggle("falgo8");

}






