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
}*/

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