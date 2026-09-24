

/**
 * Creamos una clase llamada Niño en donde nos mostrará los datos que ya trae por defecto 
 * la interfaz Persona
 */
import{Persona} from "./Persona";
export class Niño implements Persona{

    rangoEdad:string ="6 - 12 años";
    palabraComun:string ="Chuches";
    
    informacion(): void{
        console.log("Edad: " , this.rangoEdad, "\nPalabra más común: " , this.palabraComun );

    } 
}