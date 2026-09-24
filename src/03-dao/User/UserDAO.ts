// Creamos una Clase llamada UserDao que simulará las operaciones que se nos menciona en ejercicio como si fuera una base de datos

import{User} from "./User"; // immportamos la interfaz User

export class UserDAO {
    // Simulamos la base de datos con un array para almacenar objetos con información 
    private users: User[] = [
        { id: 1, nombre: "Juan" },
        { id: 2, nombre: "Maria" }
    ];

    // Este metodo devolverá todos los usuarios de la base de datos 
    selectAll(): User[] {
        console.log("SELECT * FROM users;");
        return this.users;
    }

    // En este otro método devolveremos todos los datos de el usuario según el id que nos introduzcan, puede existir o no , lo que hace es verificarlo
    selectById(id: number): User | undefined {
        console.log(`SELECT * FROM users WHERE id = ${id};`);

        return this.users.find(user => user.id === id);
    }

    // Este método introduce nuevos objetos dentro de el array
    insert(user: User): void {

        console.log(`INSERT INTO users (id, nombre) VALUES (${user.id}, '${user.nombre}');`);

        this.users.push(user);
    }

    // Este metodo actualiza los datos de usuarios que ya estan creados en el array
    update(id: number, nuevoNombre: string): void {

        console.log(`UPDATE users SET nombre = '${nuevoNombre}' WHERE id = ${id};`);
        const user = this.selectById(id);
        
        // El if reutiliza el método selectById creado anteriormente para saber si existe y de esta forma poder modificar el nombre de forma correspondiente
        if (user) {
            user.nombre = nuevoNombre;
        }
    }

    // Este método lo que hace es eliminar a el usuario que se señale mediante su id 
    delete(id: number): void {

        console.log(`DELETE FROM users WHERE id = ${id};`);

        this.users = this.users.filter(user => user.id !== id);
    }
}