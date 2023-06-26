const BookRepository = require('../repositories/BookRepository')

class BookController {
  constructor () {
    this.bookRepository = new BookRepository()
  }

  async getIndexPage (req, res) {
    try {
      const books = await this.bookRepository.getAllBooks()
      res.render('index', { books })
    } catch (error) {
      console.error('Error al obtener los libros:', error)
      res.status(500).send('Error al obtener los libros')
    }
  }

  // Controlador para la página de libros ("/books")
  getBooksPage (req, res) {
  // Obtener los libros de la base de datos o cualquier fuente de datos
    const books = [
      { id: 1, title: 'Libro 1', author: 'Autor 1' },
      { id: 2, title: 'Libro 2', author: 'Autor 2' },
      { id: 3, title: 'Libro 3', author: 'Autor 3' }
    ]
    // Renderizar la vista books.ejs y pasar los datos de libros
    res.render('books', { books })
  }

  // Controlador para los detalles de un libro específico ("/books/:id")
  getBookDetails (req, res) {
  // Obtener el ID del libro de los parámetros de la ruta
    const bookId = req.params.id

    // Buscar el libro en la base de datos o cualquier fuente de datos
    const book = { id: bookId, title: 'Libro 1', author: 'Autor 1' }

    // Renderizar la vista bookDetails.ejs y pasar los datos del libro
    res.render('bookDetails', { book })
  }
}

module.exports = BookController
