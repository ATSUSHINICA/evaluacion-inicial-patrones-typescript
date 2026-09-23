/*Importamos la clase PersonaFactory y la ruta de donde proviene */

import { PersonaFactory } from "./Persona/PersonaFactory";

console.log("PRUEBA FACTORY PERSONAS");

// Pedimos un bebé y para que aparezca colocamos la edad, en este caso 3
const persona1 = PersonaFactory.crearPersona(3);
// Ejecutamos el método informacion para que nos muestre por pantalla 
persona1.informacion();

console.log("-------------------");

// Repetimos el mismo proceso, para verificar que funciona 
const persona2 = PersonaFactory.crearPersona(15);
persona2.informacion();