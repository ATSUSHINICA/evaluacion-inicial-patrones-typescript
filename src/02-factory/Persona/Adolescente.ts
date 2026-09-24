/**
 * Creamos una clase llamada Adolescente en donde nos mostrará los datos que ya trae por defecto 
 * la interfaz Persona
 */
import{Persona} from "./Persona";
export class Adolescente implements Persona{

    rangoEdad:string ="13 - 20 años";
    palabraComun:string ="Playstation";
    
    informacion(): void{
        console.log("Edad: " , this.rangoEdad, "\nPalabra más común: " , this.palabraComun );

    } 
}
