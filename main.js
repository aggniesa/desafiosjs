/*let numero1 = parseInt(prompt('Numero 1'));

let numero2 = parseInt(prompt('Numero 2'));

alert(numero1 + numero2);

let numero = parseInt(prompt('Ingresá un número'));

if (numero < 100 ) {
    console.log('El número es menor a 100');
}
else if  (numero == 100 ) {
    console.log('El número es 100');
}
else {
    alert('El número es mayor a 100');
}

// Desafío 3 
let number;
let option;
let i = 0

let user = 'Ines'
let password = '1234'

let enterUser = prompt('Ingresa tu usuario');
let enterPassword = prompt('Ingresa tu contraseña');

    while(user != enterUser || password != enterPassword){
        alert('Tu usuario o contraseña es incorrecto');
        enterUser = prompt('Ingresa tu usuario');
        enterPassword = prompt('Ingresa tu contraseña');
    }

    if(user == enterUser && password == enterPassword) {
        alert('¡Hola ' + user +'!');

            option = parseInt(prompt('Elegí la opcion: \n 1. Multiplicar \n 2. Dividir \n 3. SALIR'));

            while(option != 1 && option != 2 && option != 3) {
                alert('La opción ingresada es incorrecta');
                option = parseInt(prompt('Elegí la opcion: \n 1. Multiplicar \n 2. Dividir \n 3. SALIR')); }

            switch(option) {

                case 1:
                    number = prompt('Ingresa un numero para multiplicar');
                    for ( i ; i <= 10 ; i++ ){
                    console.log(number + ' x ' + i + ' = ' + number*i + '\n');
                    } break;

                case 2:
                    number = prompt('Ingresa un numero para dividir');
                    for ( i ; i <= 10 ; i++ ){
                    console.log(number + ' / ' + i + ' = ' + number/i + '\n');
                    } break;

                default: 
                    alert ('¿Estás seguro de que deseas salir?');
                    break;
            }    
    }
    

    // Desafío 4
    let precio = parseFloat(prompt('Ingresá el precio del producto'));
    let cuotas = parseInt(prompt('Ingresá la cantidad de cuotas (Hasta 12)'));
    let valorFinal = 0;
    
    
    //función para cacular precio con interés
    function precioInteres(precioProd , porcentaje) {

    valorFinal = precioProd + (precioProd * porcentaje);
    return valorFinal;
    }
    
    // función para calcular valor de las cuotas
    const valorCuotas = (precioFinal, cuotasIngresadas) => precioFinal / cuotasIngresadas ;

    //Función para agregar descuento
    const descuento = (precioProd) => precioProd - (precioProd * 0.1);
       
    
    // volver a datos mal ingresados
    while (isNaN(precio) || cuotas ==0 && cuotas > 12) {
        alert('Alguno de los valores ingresados es incorrecto. Intentá de nuevo');
        precio = parseFloat(prompt('Ingresá el precio del producto'));
        cuotas = parseInt(prompt('Ingresá la cantidad de cuotas (Hasta 12)'));
    }
    
    // definir % interés según cantidad de cuotas y devolver precio final 
    if (cuotas >1 && cuotas <=3){
            precioInteres(precio, 0.05);}
        
    else if (cuotas >3 && cuotas <= 6){
        precioInteres(precio, 0.1);}           
        
    else if (cuotas >6 && cuotas <= 12) {
            precioInteres(precio, 0.15);}

    else {
            precioInteres (precio, 0);
    }
        
    alert(precioInteres(descuento(precio),); */

//Desafío 4 + 4 Complementario
let precio1 = parseFloat(prompt('Ingrese el precio del primer producto'));
let precio2 = parseFloat(prompt('Ingrese el precio del segundo producto'));
let precio3 = parseFloat(prompt('Ingrese el precio del tercer producto'));
let numCuotas = parseInt(prompt('Ingrese la cantidad de cuotas'));

const suma = (a,b,c) => a + b + c ;

const descuento = (total) => {
    return total - (total * 15 / 100);
}

const cuotas = (totalConDescuento, numCuotas) => totalConDescuento / numCuotas ;

while(isNaN(precio1) || isNaN(precio2) || isNaN(precio3) || isNaN(numCuotas)){
    alert('Alguno de los valores ingresados son incorrectos. Intente de nuevo');
    precio1 = parseFloat(prompt('Ingrese el precio del primer producto'));
    precio2 = parseFloat(prompt('Ingrese el precio del segundo producto'));
    precio3 = parseFloat(prompt('Ingrese el precio del tercer producto'));
    numCuotas = parseInt(prompt('Ingrese la cantidad de cuotas'));
}

console.log("Pagás " + numCuotas + " cuotas de " + parseFloat(cuotas(descuento(suma(precio1, precio2, precio3)), numCuotas)).toFixed(2));
