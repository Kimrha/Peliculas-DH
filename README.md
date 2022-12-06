# ¿Que es este proyecto?

Este proyecto es una entrega en forma de repaso de la mayoria de conceptos vistos en Digital House.
Contiene JavaScript, Node.js, Express, MySQL, middlewares, CRUD, vistas ejs, y muchas cosas más. 
Esta orientado al backend, no al frontend, asi que pido disculpas si se vé muy pobre o basico, de todos
modos queda pendiente una actualización en algun momento que será para que el mismo se vea mejor.

## De que se trata este proyecto:

Este proyecto es una pagina web que almacena informacion de diversas peliculas. Los usuarios normales del sitio web
tendran acceso a dichas peliculas y podran verlas. Los usuarios administradores ademas de ver el listado de las mismas
tambien podran crear nuevas y editar las viejas (ademas de eliminar cualquiera de las mismas). Tambien se puede crear
cuentas, logear y desloguear. 

### Instalacion del proyecto

Pasos:
1-Clonar el repositorio de github en el ordenador.

2-Abrir la consola, e ir dentro de la carpeta del proyecto.

3- Una vez en la carpeta del proyecto correr el comando "npm install", esto instalará las dependencias
necesarias para correr el proyecto(claro, estamos hablando de todas las dependencias encontradas en el archivo
llamado "package.json").

4-Abrir el programa XAMPP, buscar donde dice mysql y donde dice actions presionar "start". Esto iniciará MySQL.

5-Abrir el archivo que se encuentra en la carpeta db con el programa "MySQL Workbench" y correr la base 
de datos(osea ejecutar ese archivo).

6-Abrir un archivo vacio y correr el siguiente codigo copiado y pegado tal cual:
USE movies_db;
ALTER TABLE movies
ADD deletedAt DATE
Esto es porque para una funcionalidad del proyecto, una de las tablas de la base de datos necesita un campo extra.

7-Abrir la consola en la carpeta del proyecto y escribir npm start.

¡¡Listo!! El proyecto deberia funcionar correctamente. Para ver el proyecto funcionando presionar en el siguiente enlace:
http://localhost:3000/home

¡Que lo disfrutes! :) <3

