const express = require('express'); //Se importa Express 
const router = express.Router(); //Se guarda la funcionalidad de Router en la variable.
const mainController = require('../../controllers/api/main'); //Se importa el controlador de MainController




router.get('/books', mainController.listBooks); //Listado de libros
router.get('/books/:id', mainController.showBook); //Detalle del libro por id
router.get('/users', mainController.listUsers); //Listado de usuarios
router.get('/users/:id', mainController.showUser); //Detalle de usuarios por id
router.get('/categories', mainController.listCategories); //Listado de categorias
router.get('/authors', mainController.listAuthors); //Listado de autores




module.exports = router;
