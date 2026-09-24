export class ConexionBaseDatos{

    /* Tenemos que crear una variable donde se va a almacenar la única instancia de la conexión
    con la base de datos */

    private static instancia: ConexionBaseDatos;

    //Ahora una varible boolean para saber si se ha conectado o no 
    private conexion: boolean = false;

    /*El constructor debe de ser privado para evitar que creen varias instancias en distintos archivos de la app */

    private constructor(){

        /*Al crear el objeto se va a mostrar el siguiente mensaje en la consola, y se habilitará la conexión siendo true */
        console.log("Conectando con la base de datos...");
        this.conexion = true;
    }

    public static getInstancia(): ConexionBaseDatos{

        // Esta condición permite verificar si la instancia que fue llamada es null, en caso de serlo, creara un nuevo objeto
        if(!ConexionBaseDatos.instancia) {
            ConexionBaseDatos.instancia = new ConexionBaseDatos();
        }
        return ConexionBaseDatos.instancia; // y lo devolverá
        
    }
}