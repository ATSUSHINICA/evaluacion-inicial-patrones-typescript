import { UserDAO } from "./User/UserDAO";// importamos la clase UserDAO

console.log(" PRUEBA DAO ");
const dao = new UserDAO();

dao.selectAll();
dao.insert({ id: 3, nombre: "Alberto" });
dao.selectById(3);
dao.update(3, "Alberto AKKARI");
dao.delete(1);