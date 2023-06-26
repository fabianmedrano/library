const express = require('express')

const router = express.Router()

// const db = require('../db/db')
const BookController = require('../controllers/bookController')
const bookControllerInstance = new BookController() // Crear una instancia de BookController

// Rutas para los libros
router.get('/', bookControllerInstance.getIndexPage.bind(bookControllerInstance))
router.get('/books', bookControllerInstance.getBooksPage.bind(bookControllerInstance))
router.get('/books/:id', bookControllerInstance.getBookDetails.bind(bookControllerInstance))

module.exports = router
