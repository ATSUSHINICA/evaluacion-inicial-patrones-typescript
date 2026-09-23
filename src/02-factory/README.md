# ¿Qué problema resuelve Factory?
Resuelve el problema de tener repartida la creación de objetos por toda la app, juntando todo en una sola clase para que el resto del código no tenga que saber cómo se crea cada uno.

# ¿Qué ventaja tiene respecto a utilizar new directamente por toda la aplicación?
Que si mañana cambia la forma de crear un objeto o sus parámetros, no tienes que ir modificando todos los new del proyecto uno por uno, solo cambias la línea en la Factory y ya

# ¿Qué tendría que ocurrir si mañana añadimos WhatsAppNotification?
Simplemente creas la nueva clase WhatsAppNotification con la interfaz y pones un else if más dentro de la Factory, el resto del código de la app ni se entera del cambio

# ¿Quién tiene la responsabilidad de crear los objetos?
La responsabilidad la tiene únicamente la clase Factory, quitándole ese trabajo al resto de la aplicación

# ¿Qué ventaja proporciona Factory respecto al acoplamiento?
Reduce el acoplamiento porque las clases de la app ya no dependen de los new de cada objeto concreto, sino que dependen de una interfaz común y de la Factory, haciendo el código más facil de mantener.