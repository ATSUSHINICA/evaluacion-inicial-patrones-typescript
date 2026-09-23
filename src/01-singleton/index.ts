//Conectamos con la clase creada anteriormente
import {ConexionBaseDatos} from "./ConexionBaseDatos";

//Creamos dos variables las cuales poseen las instacias nuevas creadas provenientes de ConexionBaseDatos
const c1 = ConexionBaseDatos.getInstancia();
const c2 = ConexionBaseDatos.getInstancia();

/* Realizamos esta comprobación ya que de esta manera veremos que es el mismo objeto que ocupa un espacio en la memoria, que luego podra instanciarse 
desde cualquier parte de la app*/
console.log("Los dos objetos creados son iguales en memoria? " , c1===c2);
