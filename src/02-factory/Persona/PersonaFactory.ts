
/**
 * Ahora crearemos la clase Factory en donde podremos llamar a una de las clases hijas segun la
 * eleccion que nosotros hagamos 
 */
import { Persona } from "./Persona";
import { Bebe } from "./Bebe";
import { Niño } from "./Niño";
import { Adolescente } from "./Adolescente";

export class PersonaFactory{
    public static crearPersona(edad: number): Persona{
        if (edad >= 0 && edad <= 5){
            return new Bebe();
        }else if(edad >= 6 && edad <= 12){
            return new Niño();
        }else if(edad >= 13 && edad <= 20){
            return new Adolescente();
        }else {
            throw new Error("Edad no valida");
        }
    }

}