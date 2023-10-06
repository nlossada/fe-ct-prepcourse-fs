/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   return Object.entries(objeto);
}

// console.log(deObjetoAarray({ D: 1, B: 2, C: 3 }));

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:

   //natalia  [n, a, t, a, l, i, a] 

   const objString = {};
   const arrString = string.split("").sort();
   let repetido = 0
   for (i = 0; i < arrString.length; i++) {
      let keyObj = arrString[i];
      for (j = 0; j < arrString.length; j++) {
         if (arrString[i] === arrString[j]) {
            repetido++
         }
      }
      objString[keyObj] = repetido
      repetido = 0
   }
   return objString
}

// console.log(numberOfCharacters("natalia"));

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   // NO FUNCIONA con mismo retorno si paso string a array, sort a array, reverse y devuelvo string. ysoYRNHE
   // TAMPOCO DA MISMO RETORNO SI hago push a las minusculas y unshift a las mayusculas 
   let mayusculas = "";
   let minusculas = "";
   let array = string.split("")
   for (let i = 0; i < array.length; i++) {
      if (array[i] === array[i].toUpperCase()) {
         mayusculas += array[i];
      } else {
         minusculas += array[i];
      }
   }
   return mayusculas + minusculas
}
// console.log(capToFront("soyHENRY"));

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   let arrayPalabras = frase.split(" ");
   let newArray = [];
   for (palabra of arrayPalabras) {
      let arrayCadaPalabra = palabra.split("").reverse().join("")
      newArray.push(arrayCadaPalabra)
   }
   return newArray.join(" ")
}
// console.log(asAmirror("The Henry Challenge is close!"))


function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   let str = numero.toString();
   let strReverse = str.split("").reverse().join("");
   if (str === strReverse) {
      return "Es capicua"
   } else {
      return "No es capicua"
   }
}



function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // || arr[i] !== "b" || arr[i] !== "c"
   // Tu código:
   let newArray = [];
   let arr = string.split("");
   for (let i = 0; i < arr.length; i++) {
      if (arr[i].toLowerCase() !== "a" && arr[i].toLowerCase() !== "b" && arr[i].toLowerCase() !== "c") {
         newArray.push(arr[i]);
      }
   }
   return newArray.join("")
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   // // let newArray = [];
   // // for (let i = 0; i < arrayOfStrings.length; i++) {
   // //    for (let j = 0; j < arrayOfStrings; i++) {
   // //       if (arrayOfStrings[i].length > arrayOfStrings[j].length) {
   // //          newArray.unshift(array[j])
   // //       }
   // //    }
   // // } return newArray
   const orden = arrayOfStrings.sort((a, b) => {
      return a.length - b.length
   })
   return orden
}


// console.log(sortArray(["You", "caballo", "are", "beautiful", "looking"]));

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   let repetidosArr = [];
   for (let elem1 of array1) {
      for (let elem2 of array2) {
         if (elem1 === elem2) {
            repetidosArr.unshift(elem1)
         }
      }
   }
   if (repetidosArr.length > 0) {
      return repetidosArr
   } else {
      let arrVacio = []
      return arrVacio
   }
}
console.log(buscoInterseccion([4, 2, 3], [1, 2, 3]));

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
