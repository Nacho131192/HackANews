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
## Añadir entrada
El usuario debe estar registrado y haber hecho login, su token deberá ir como authorization en el header.
POST http://localhost:3000/entries/
Content-Type: application/json
En el body deberán ir los siguientes datos:
{
    "new_title":
    "new_entrance":
    "new_text": 
    "new_theme":
}

## Eliminar una noticia
El usuario debe estar registrado y haber hecho login, su token deberá ir como authorization en el header.
DELETE http://localhost:3000/entries/delete/:entryId

## Ver todas las noticias
GET http://localhost:3000/entries/allentries

## Actualizar o editar una noticia
El usuario debe estar registrado y haber hecho login, su token deberá ir como authorization en el header.
POST http://localhost:3000/users/update/:entryId
Content-Type: application/json
En el body deberán ir los siguientes datos:
{
    "new_title":
    "new_entrance": 
    "new_text": 
    "new_theme": 
}

## Dar like o eliminarlo a una noticia
POSThttp://localhost:3000/entries/likeEntry
## Ver las entradas de un usuario
GET http://localhost:3000/entries/view/:news_id

## Añadir un usuario
POST http://localhost:3000/users
Content-Type: application/json
En el body deberán ir los siguientes datos:
{
    "user_name" :
    "user_email": 
    "user_password": 
}

## Eliminar un usuario
El usuario debe estar registrado y haber hecho login, su token deberá ir como authorization en el header.
DELETE http://localhost:3000/users/delete/:uderDeleteId


## Acceder a todos los usuarios
El usuario debe estar registrado y haber hecho login, su token deberá ir como authorization en el header.
GET http://localhost:3000/users/getAllUsers/

## Acceder a un usuario
El usuario debe estar registrado y haber hecho login, su token deberá ir como authorization en el header.
GET http://localhost:3000/users/getUser/:userId


## Hacer login
POST http://localhost:3000/users/login
Content-Type: application/json
En el body deberán ir los siguientes datos:
{
    "email": 
    "password":
}

## Actualizar o editar la información de un usuario
El usuario debe estar registrado y haber hecho login, su token deberá ir como authorization en el header.
POST http://localhost:3000/users/update/:userId
Content-Type: application/json
En el body deberán ir los siguientes datos:
{
    "user_email": 
    "user_password": 
}  

****
### ¡Esperamos que os guste HACK A NEWS!

