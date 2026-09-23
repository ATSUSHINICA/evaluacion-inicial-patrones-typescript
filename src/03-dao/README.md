# 1. ¿Qué significa DAO?
Significa Data Access Object (Objeto de Acceso a Datos)

# 2. ¿Cuál es su responsabilidad principal?
Su responsabilidad principal es encargarse de todo el acceso a los datos, leer, guardar, modificar y borrar, para que el resto de la aplicación no tenga que saber cómo se hacen las consultas a la base de datos

# 3. ¿Qué relación tiene DAO con una base de datos?
Es el intermediario es la única clase que se conecta a la base de datos y lanza las consultas para traer o guardar la información que pide la app

# 4. ¿Qué operaciones aparecen habitualmente en un DAO?
Aparecen las operaciones CRUD básicas:
- selectAll() obtener todos los registros
- selectById() buscar uno por su ID
- insert() crear o insertar un registro
- update() actualizar los datos
- delete() borrar un registro

# 5. ¿Qué diferencia existe entre DAO y Repository?
La diferencia principal es el nivel en el que trabajan cada una por ejemplo:
- DAO: Se preocupa del como acceder a los datos. Está pensado a bajo nivel y se enfoca en las operaciones directas contra las tablas de la base de datos 
- Repository: Se preocupa del que datos necesita la aplicación ocultando totalmente las tablas y la base de datos para tratar los datos como si fueran una colección de objetos