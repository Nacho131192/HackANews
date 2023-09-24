# Proyecto Final - Hack A Boss - jsb24rt

## Autors
* Leona Rodríguez - [GitHub/LeoERP](https://github.com/LeoERP)
* Pablo Ferreño - [GitLab/@pabloferreno](https://gitlab.com/pabloferreno)
* Lucía Aguirre - [GitLab/@guerrolucia](https://gitlab.com/guerrolucia)
* Ignacio Cortés - [GitLab/@nachocortesosuna](https://gitlab.com/nachocortesosuna)


### Título 
****
Web de noticias colaborativas enfocadas al mundo del cine.

### Descripción
****
El proyecto consiste en una API que permite gestionar noticias colaborativas, donde los usuarios pueden registrarse y publicar una noticia en una serie de categorías temáticas fijas.

### Usuarios Anónimos
****
* Visualizar la lista de últimas noticias (listado con título, tema, entradilla y foto)
* Visualizar ima única noticia completa
* Login (Email y Password)
* Registro:
  * Nombre
  * Email
  * Password

### Usuarios Registrados
****
* _Lo mismo que los anónimos_
* Publicar una nueva noticia:
  * Título
  * Foto
  * Entradilla
  * Tecto de la noticia
  * Categoria
* Editar una noticia publicada por el mismo usuario
* Borrar una noticia publicada por el usuario
* Opcional:
  * Gestión del perfil de usuario (Nombre, Email, Biografía, Foto, ...)
  * Votar positivamente o negativamente otras noticias

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

## Delete Entry
DELETE http://localhost:3000/entries/:entryId
Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJfbmFtZSI6Ikp1YW4iLCJpYXQiOjE2OTUzNzMxNzQsImV4cCI6MTY5NTQ1OTU3NH0.bPUSELVFU4iG3UMoM7crdrcFOXVmuIjSQjqOY4HUf-M 

## Get ALL Entries
GET http://localhost:3000/entries/allentries

## Update Entry
POST http://localhost:3000/users/update/:entryId
Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJfbmFtZSI6Ikp1YW4iLCJpYXQiOjE2OTUzNzMxNzQsImV4cCI6MTY5NTQ1OTU3NH0.bPUSELVFU4iG3UMoM7crdrcFOXVmuIjSQjqOY4HUf-M
Content-Type: application/json

{
    "new_title": "Mulan 13",
    "new_entrance": "Estreno de la nueva pelila de moda",
    "new_text": "Una pelicula completamente nueva en el sector de aventuras, en esta ocasion con carreras mortales en sillas de ruedas desde el asilo donde nuestro protagonista volvera a defender a la familia de una nueva amenaza",
    "new_theme": 2
}

## View Entry One User
GET http://localhost:3000/entries/view/:news_id

## Add User
POST http://localhost:3000/users
Content-Type: application/json

{
    "user_name" : "Juaiton",
    "user_email": "juanitoreshulon_85@hotmail.com",
    "user_password": "1234AbCd"
}

## Delete User
DELETE http://localhost:3000/users/delete/:uderDeleteId
Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJfbmFtZSI6Ikp1YW4iLCJpYXQiOjE2OTUzNzMxNzQsImV4cCI6MTY5NTQ1OTU3NH0.bPUSELVFU4iG3UMoM7crdrcFOXVmuIjSQjqOY4HUf-M

## Get All User
GET http://localhost:3000/users/getAllUsers/
Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJfbmFtZSI6Ikp1YW4iLCJpYXQiOjE2OTUzNzMxNzQsImV4cCI6MTY5NTQ1OTU3NH0.bPUSELVFU4iG3UMoM7crdrcFOXVmuIjSQjqOY4HUf-M

## Get One User
GET http://localhost:3000/users/getUser/:userId
Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJfbmFtZSI6Ikp1YW4iLCJpYXQiOjE2OTUzNzMxNzQsImV4cCI6MTY5NTQ1OTU3NH0.bPUSELVFU4iG3UMoM7crdrcFOXVmuIjSQjqOY4HUf-M

## Login User
POST http://localhost:3000/users/login
Content-Type: application/json

{
    "email": "juanitoreshulon_85@hotmail.com",
    "password": "1234AbCd"
}

## Update User
POST http://localhost:3000/users/update/:userId
Content-Type: application/json
Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJfbmFtZSI6Ikp1YW4iLCJpYXQiOjE2OTUzNzMxNzQsImV4cCI6MTY5NTQ1OTU3NH0.bPUSELVFU4iG3UMoM7crdrcFOXVmuIjSQjqOY4HUf-M

{
    "user_email": "juanitoreshulon_85@hotmail.com",
    "user_password": "1234AbCd"
}  

****
** ¡Esperamos quue os guste nuestra aplicación!

