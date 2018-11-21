// console.log(typeof 4.5);

// console.log(typeof 'x');

// console.log(-(10 - 2));

// console.log(8 > 11);

// console.log('patricia' < 'joel');

// console.log('Joel' != 'joel');

// console.log(NaN == NaN);

// console.log(true && false);

// console.log(true && true);

// console.log(false || true);

// console.log(false || false);

// console.log(1 + 1 == 2 && 10 * 10 > 50);

// console.log(true ? 1 : 2);

// console.log(false ? 1 : 2);

// console.log(Math.PI > 4 ? "Sip" : "Nop");

// console.log(8 * null)

// console.log("5" - 1)

// console.log("5" + 1)

// console.log("five" * 2)

// console.log(false == 0)

// console.log(null == undefined)

// console.log(null == 0)

// console.log(1 !== '1');

// console.log(null || "usuarios");

// console.log('acnes' || 'usuario');

/* ========================================== 
Estructura del Programa
=========================================== */

// let diez = 10;

// console.log(diez * diez);

// let estado = 'Luz';

// console.log(estado);

// estado = 'Oscuridad';

// console.log(estado);

// let killPepe = 140;
// killPepe = killPepe - 100;

// console.log(killPepe);

// let uno = 1,
//   dos = 2;

// console.log(uno + dos);

// var name = 'RaGa';
// const saludo = 'Hola';

// console.log(name + ', ' + saludo);

// prompt('Ingresar código de acceso');

// let x = 30;
// console.log('El valor de x es', x);

// console.log(Math.min(2, 4) + 100);

// console.log(Math.max(2, 4) + 100);

// let theNumber = Number(prompt('Ingresa un número'));

// console.log(
//   'La raíz cuadrada del número ingresado es: ' + theNumber * theNumber
// );

// if (1 + 1 == 4) {
//   console.log('Es cierto');
// } else {
//   console.log('No es cierto');
// }

// let theNumber = Number(prompt('Ingresa un número'));
// if (!Number.isNaN(theNumber)) {
//   console.log(
//     'La raíz cuadrada del número ingresado es: ' + theNumber * theNumber
//   );
// } else {
//   console.log('Hey tienes que ingresar un número');
// }

// let Num = Number(prompt('Ingresa un número'));
// if (Num < 10) {
//   console.log('Pequeño');
// } else if (Num < 100) {
//   console.log('Mediano');
// } else {
//   console.log('Grande');
// }

// let Num = 0;
// while (Num <= 12) {
//   console.log(Num);
//   Num = Num + 2;
// }

// let resultado = 1;
// let contador = 0;

// while (contador < 10) {
//   resultado = resultado * 2;
//   contador = contador + 1;
// }
// console.log(resultado);

// let yourName;
// do {
//   yourName = prompt('¿Quien eres?');
// } while (!yourName);
// console.log(yourName);

// if (false != true) {
//   console.log('Esto tiene sentido');
//   if (1 < 2) {
//     console.log('No hay sorpresa allí');
//   }
// }

// for (let actual = 10; ; actual = actual + 1) {
//   if (actual % 7 == 0) {
//     console.log(actual);
//     break;
//     // continue; -> También se puede usar en vez de break :)
//   }
// }

// switch(prompt("¿Que tiempo hace?")){
// 	case "Lluvioso":
// 		console.log("Recuerda traer paraguas.");
// 		break;
// 	case "Soleado":
// 		console.log("Vístase ligeramente.");
// 		break;
// 	case "Nublado":
// 		console.log("Salir afuera.");
// 		break;
// 	default:
// 		console.log("Tipo de clima desconocido!.");
// 		break;
// }

/*||||||||||||||||||||||||||||||||||||||||||||*/

// Ejercicio N° 01
// let num = "#";

// while(num.length <= 7){
// 	console.log(num);
// 	num += '#';
// }

/*||||||||||||||||||||||||||||||||||||||||||||*/

// Ejercicio N° 02

// for (let i = 1; i <= 100; i++) {
// 	let update = "";
// 	if (i % 3 == 0) {
// 		update += "Fizz";
// 	};
// 	if (i % 5 == 0) {
// 		update += "Buzz";;
// 	};
// 	console.log(update || i);
// }

// Ejercicio N° 03

let longitud = 8;
let tablero = '';

for (let y = 0; y < longitud; y++) {
  for (let x = 0; x < longitud; x++) {
    if ((x + y) % 2 == 0) {
      tablero += ' ';
    } else {
      tablero += '#';
    }
  }
  tablero += '\n';
}

console.log(tablero);