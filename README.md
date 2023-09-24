# HACK A NEWS

## Autores
* Leona Rodríguez - [GitHub/LeoERP](https://github.com/LeoERP)
* Pablo Ferreño - [GitLab/@pabloferreno](https://gitlab.com/pabloferreno)
* Lucía Aguirre - [GitLab/@guerrolucia](https://gitlab.com/guerrolucia)
* Ignacio Cortés - [GitLab/@nachocortesosuna](https://gitlab.com/nachocortesosuna)

 
****


## Descripción de Hack a News
****
El proyecto consiste en una API que permite gestionar noticias colaborativas, donde los usuarios pueden registrarse y publicar una noticia en una serie de categorías temáticas fijas sobre el mundo del cine.

## Funcionalidades según el tipo de usuario:

### Usuarios Anónimos
****
Funcionalidades para los usuarios anónimos:
* Visualizar la lista de últimas noticias (listado con título, tema, entradilla y foto)
* Visualizar una única noticia completa
* Login (Email y Password)
* Registro:
  * Nombre
  * Email
  * Password

### Usuarios Registrados
****
Los usuarios registrados, además de las mismas posibilidades que los usuarios anónimos, podrán:
* Publicar una nueva noticia:
  * Título
  * Foto
  * Entradilla
  * Texto de la noticia
  * Categoria
* Editar una noticia publicada por el mismo usuario
* Borrar una noticia publicada por el usuario
* Gestión del perfil de usuario (nombre, email ...)
* Dar like o retirarlo a otras noticias
****

## ¿Cómo arrancar el proyecto?
****
Para arrancar la API, necesitarás instalar las siguientes dependencias instalando por consola el `package.json` escribiendo en la terminal el comando `npm i `.
### Dependencias
***
`bcrypt`
`dotenv`
`express`
`express-fileupload`
`joi`
`jsonwebtoken`
`mysql2 `
`nanoid`
`nodemon`
`random-id`
`router`
`sharp`
***

****
### Endpoints API
****
## Add Entry
POST http://localhost:3000/entries/
Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJfbmFtZSI6Ikp1YW4iLCJpYXQiOjE2OTUzNzMxNzQsImV4cCI6MTY5NTQ1OTU3NH0.bPUSELVFU4iG3UMoM7crdrcFOXVmuIjSQjqOY4HUf-M
Content-Type: application/json

{
    "new_title": "Fast and Furious 28",
    "new_entrance": "Estreno de la nueva peli de moda",
    "new_text": "Una pelicula completamente nueva en el sector de carreras, en esta ocasion con carreras mortales en sillas de ruedas desde el asilo donde nuestro protagonista volvera a defender a la familia de una nueva amenaza",
    "new_theme": 3
}

## Eliminar una noticia
DELETE http://localhost:3000/entries/:entryId
Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJfbmFtZSI6Ikp1YW4iLCJpYXQiOjE2OTUzNzMxNzQsImV4cCI6MTY5NTQ1OTU3NH0.bPUSELVFU4iG3UMoM7crdrcFOXVmuIjSQjqOY4HUf-M 

## Ver todas las noticias
GET http://localhost:3000/entries/allentries

## Actualizar o editar una noticia
POST http://localhost:3000/users/update/:entryId
Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJfbmFtZSI6Ikp1YW4iLCJpYXQiOjE2OTUzNzMxNzQsImV4cCI6MTY5NTQ1OTU3NH0.bPUSELVFU4iG3UMoM7crdrcFOXVmuIjSQjqOY4HUf-M
Content-Type: application/json

{
    "new_title": "Mulan 13",
    "new_entrance": "Estreno de la nueva pelila de moda",
    "new_text": "Una pelicula completamente nueva en el sector de aventuras, en esta ocasion con carreras mortales en sillas de ruedas desde el asilo donde nuestro protagonista volvera a defender a la familia de una nueva amenaza",
    "new_theme": 2
}

## Ver las entradas de un usuario
GET http://localhost:3000/entries/view/:news_id

## Añadir un usuario
POST http://localhost:3000/users
Content-Type: application/json

{
    "user_name" : "Juaiton",
    "user_email": "juanitoreshulon_85@hotmail.com",
    "user_password": "1234AbCd"
}

## Eliminar un usuario
DELETE http://localhost:3000/users/delete/:uderDeleteId
Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJfbmFtZSI6Ikp1YW4iLCJpYXQiOjE2OTUzNzMxNzQsImV4cCI6MTY5NTQ1OTU3NH0.bPUSELVFU4iG3UMoM7crdrcFOXVmuIjSQjqOY4HUf-M

## Acceder a todos los usuarios
GET http://localhost:3000/users/getAllUsers/
Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJfbmFtZSI6Ikp1YW4iLCJpYXQiOjE2OTUzNzMxNzQsImV4cCI6MTY5NTQ1OTU3NH0.bPUSELVFU4iG3UMoM7crdrcFOXVmuIjSQjqOY4HUf-M

## Acceder a un usuario
GET http://localhost:3000/users/getUser/:userId
Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJfbmFtZSI6Ikp1YW4iLCJpYXQiOjE2OTUzNzMxNzQsImV4cCI6MTY5NTQ1OTU3NH0.bPUSELVFU4iG3UMoM7crdrcFOXVmuIjSQjqOY4HUf-M

## Hacer login
POST http://localhost:3000/users/login
Content-Type: application/json

{
    "email": "juanitoreshulon_85@hotmail.com",
    "password": "1234AbCd"
}

## Actualizar o editar la información de un usuario
POST http://localhost:3000/users/update/:userId
Content-Type: application/json
Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJfbmFtZSI6Ikp1YW4iLCJpYXQiOjE2OTUzNzMxNzQsImV4cCI6MTY5NTQ1OTU3NH0.bPUSELVFU4iG3UMoM7crdrcFOXVmuIjSQjqOY4HUf-M

{
    "user_email": "juanitoreshulon_85@hotmail.com",
    "user_password": "1234AbCd"
}  

****
### ¡Esperamos que os guste HACK A NEWS!

