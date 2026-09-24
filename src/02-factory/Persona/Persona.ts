/*Crearemos una interfaz en donde se muestre la estructura que debe de tener cada 
tipo de persona */
export interface Persona{
    //estas son las variables para identificar que tipo de persona es 
    rangoEdad: string;
    palabraComun: string;

    //este método nos mostrará en consola 
    informacion(): void;

}