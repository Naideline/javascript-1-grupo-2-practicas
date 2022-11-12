/*1. Escribe un programa que invierta una cadena usando recursión. 
Dada la cadena "freeCodeCamp", el programa debería devolver "pmaCedoCeerf".*/

  function invertirCadena(cad) {
    if (cad === "")
      return "";
    else
      return invertirCadena(cad.substr(1)) + cad.charAt(0);
  }
  invertirCadena("freeCodeCamp");
  console.log(invertirCadena("freeCodeCamp")) 


  /* EJER 2 Escribe un programa que devuelva el número de veces que aparece una letra en una cadena. 
Tu programa debería recibir una cadena y la letra.*/



/* EJER 3 Escriba un programa que reciba una frase y este debe de intercambiar las vocales por la ‘i’. 
Ej, “esta es la entrada” → “isti is li intridi”

function intercambiar(cad) {
  if (cad === vocal)
    return "i";
  else
    return intercambiar(cad.substr(1)) + cad.charAt(0);
}
invertirCadena("Hola soy");
console.log(invertirCadena("Hola soy"))*/

/* EJER4 Escriba un programa que reciba una palabra y reordene sus letras en orden alfabético. 
Ej. hola → ahlo
*/