
/**
 * Creamos una clase llamada Bebe en donde nos mostrará los datos que ya trae por defecto 
 * la interfaz Persona
 */
import{Persona} from "./Persona";
export class Bebe implements Persona{

    rangoEdad:string ="0 - 5 años";
    palabraComun:string ="GUGUGAGA";
    
    informacion(): void{
        console.log("Edad: " , this.rangoEdad, "\nPalabra más común: " , this.palabraComun );

    } 
}