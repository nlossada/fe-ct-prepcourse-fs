/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

class Persona {
   // Crea el constructor de la clase "Persona".
   // Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio".
   // Debe tener un método llamado "detalle" que nos devuelva un objeto con las propiedades de la persona y
   // sus valores.
   constructor(nombre, apellido, edad, domicilio) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.edad = edad;
      this.domicilio = domicilio;
   }
   detalle() {
      // `{nombre: ${this.nombre}, apellido: ${this.apellido}, edad: ${this.edad}, domicilio: ${this.domicilio}}`;
      const objDetalle = {}
      objDetalle.nombre = this.nombre;
      objDetalle.apellido = this.apellido;
      objDetalle.edad = this.edad;
      objDetalle.domicilio = this.domicilio;
      return objDetalle;
   }
}
// let nati = new Persona("natalia", "loss", 31, "pje");
// console.log(nati.detalle());


function crearInstanciaPersona(nombre, apellido, edad, domicilio) {
   // En este ejercicio debes crear una instancia de la clase construida en el ejercicio anterior.
   // Recibirás las propiedades por parámetro.
   // Retornar la instancia creada.
   // Tu código:
   let personaUno = new Persona(nombre, apellido, edad, domicilio);
   return personaUno;
}
// Para controlar function, como devuelve el objeto...solo corro la funcion madre
// console.log(crearInstanciaPersona("natalia", "loss", 31, "pje"))


function agregarMetodo() {
   // La función agrega un método "datos" a la clase "Persona".
   // Este método toma la propiedad "nombre" y "edad", y devuelve el string:
   // Ejemplo: "Juan, 22 años".
   // Tu código:
   Persona.prototype.datos = function () {
      return `${this.nombre}, ${this.edad} años`
   }
}

// PARA CORROBAR FUNCION QUE GENERA METODO 
// -primero correr funcion, dsp definir entidad en la clase y ultimo, correr metodo de la entidad-clase
// agregarMetodo();
// let nati = new Persona("natalia", "loss", 31, "pje");
// console.log(nati.datos());


/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   crearInstanciaPersona,
   agregarMetodo,
   Persona,
};
