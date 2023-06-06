const express = require('express')
const router = express.Router()
// const db = require('../db/db')
const bookController = require('./controllers/bookController')

express.set('view engine', 'ejs')
express.set('views', './views')

// Ruta para el inicio de sesión
// Define las rutas y los controladores correspondientes
router.get('/', bookController.getIndexPage)
router.get('/books', bookController.getBooksPage)
router.get('/books/:id', bookController.getBookDetails)

module.exports = router
