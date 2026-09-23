# ¿Qué problema intenta resolver Singleton?
El principal problema que intenta resolver es evitar la instancia del mismo objeto duplicado de forma reiterada 
al rededor de toda la app, organizandolo de tal forma que 
la única forma de acceder a esa instancia sea con getInstance(), esto evita que al haber un cambio en el objeto creado, tengas que buscar todas las instancias new creadas y directamente ir a la clase en donde se creo ese getInstance() para modificarlo.

# ¿Por qué suele utilizarse un constructor private?
Para asegurar que se cree una instancia de forma manual con el new .


# ¿Cómo se obtiene una instancia de la clase?
Con el método creado getInstance().

# ¿Qué ocurriría si pudiéramos utilizar new libremente?
Que al realizar una modificacion se tendrá que ir a cada una de las instancias new que hay repartida por la app para modificarlo manualmente una por una.

# Pon un ejemplo real donde utilizarías Singleton.
La conexión con la base de datos, es el ejemplo que más claro veo ya que de esta manera no hay que crear varios new para crear una conexion con la base de datos. Será uno solo y que para acceder a ello tendra que utilizar obligatoriamente getInstance()

# ¿Qué inconveniente puede tener abusar de Singleton?
Uno de los inconveniente más importantes son la dificultad para hacer pruebas unitarias, ya que para que esto funcione depende de la clase en donde se crea el getInstance()
