// const Book = require('../models/Book')

// Controlador para la página principal ("/")
function getIndexPage (req, res) {
  // Obtener los libros de la base de datos o cualquier fuente de datos
  const books = [
    { title: 'Libro 1', author: 'Autor 1' },
    { title: 'Libro 2', author: 'Autor 2' },
    { title: 'Libro 3', author: 'Autor 3' }
  ]

  // Renderizar la vista index.ejs y pasar los datos de libros
  res.render('index', { books })
}

// Controlador para la página de libros ("/books")
function getBooksPage (req, res) {
  // Obtener los libros de la base de datos o cualquier fuente de datos
  const books = [
    { title: 'Libro 1', author: 'Autor 1' },
    { title: 'Libro 2', author: 'Autor 2' },
    { title: 'Libro 3', author: 'Autor 3' }
  ]

  // Renderizar la vista books.ejs y pasar los datos de libros
  res.render('books', { books })
}

// Controlador para los detalles de un libro específico ("/books/:id")
function getBookDetails (req, res) {
  // Obtener el ID del libro de los parámetros de la ruta
  const bookId = req.params.id

  // Buscar el libro en la base de datos o cualquier fuente de datos
  const book = { id: bookId, title: 'Libro 1', author: 'Autor 1' }

  // Renderizar la vista bookDetails.ejs y pasar los datos del libro
  res.render('bookDetails', { book })
}

module.exports = {
  getIndexPage,
  getBooksPage,
  getBookDetails
}
