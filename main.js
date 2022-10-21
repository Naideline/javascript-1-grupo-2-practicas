/*Cree un programa que reciba como parámetro un array de números, y
verifique la lista de manera que retorne el número mayor.*/

    /*const numeros=[9, 32, 2, 180, 27, 44, 66, 153 ];
		// Asumir que el mayor es el primero
		let mayor = numeros[0];
		// Recorrer arreglo y ver si no es así
		// (comenzar desde el 1 porque el 0 ya lo tenemos arriba)
		for (let x = 1; x < numeros.length; x++) {
			if (numeros[x] > mayor) {
				mayor = numeros[x];
			}
		}
		console.log("El mayor es: " + mayor);  */

//EJER 2
/*Cree un programa que reciba como parámetro una palabra y verifique si
dicha palabra es palíndromo, es decir, la palabra se lee igual de izquierda a
derecha o de derecha a izquierda, o no. Para la resolución de dicho problema
debe utilizar ciclo for.*/

//Esta más fácil volver a nacer que hacer ese problema de arriba

//EJER3
/*Dada la siguiente matriz [ [1,0,0], [0,1,1], [0,1,0] ], haga un programa que
cuente e imprima la cantidad de ceros totales en dicha matriz. Debe utilizar
ciclos for*/
	
/*
const array = [
  [1, 0, 0],
  [0, 1, 1],
  [0, 1, 0],
]

let repetidos = {}
{
array.forEach(function(arrayContenido) {
    arrayContenido.forEach(function(valor) {
      repetidos[valor] = (repetidos[valor] || 0) + 1;
    });
});}

console.log(repetidos);

//EJER4
/*Cree un programa que reciba un array de números, verifique cuáles números
están repetidos y retorne un array con dichos números (los que estan
duplicados), si no hay números repetidos en el array debe retornar el
siguiente mensaje: “No se encontraron números repetidos en la lista de
números recibida”. Debe usar un ciclo for.*/

/*const numeros  = [18, 3, 77, 18, 3, 2, 9, 9];
let duplicados = [];
 
const tempArray = [...numeros].sort();
 
for (let i = 0; i < tempArray.length; i++) {
  if (tempArray[i + 1] === tempArray[i]) {
    duplicados.push(tempArray[i]);
  } 
}
console.log (duplicados); 


//EJER5
/*Haga un programa que reciba un parámetro numérico x, el cual debe ser
mayor o igual a 5, y que imprima un patrón, que simule un triángulo de
asteriscos, como el siguiente. Debe utilizar ciclos for para la solución del
problema.*/

for(let i = 1; i<= 10; ++i) {
  let resultado = '';

  for(let x = 1; x <= i; ++x){
    resultado += '*  ' ;
  }
  console.log(resultado)
}
  
  