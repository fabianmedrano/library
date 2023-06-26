const { queryAsync } = require('../db/db')
class BookRepository {
  constructor () {
    this.queryAsync = queryAsync
  }

  async addBook (book) {
    try {
      const query = 'INSERT INTO books (title, author) VALUES (?, ?)'
      const values = [book.title, book.author]
      await this.queryAsync(query, values)
    } catch (error) {
      console.error('Error al agregar el libro:', error)
      throw error
    }
  }

  async deleteBook (bookId) {
    try {
      const query = 'DELETE FROM books WHERE id = ?'
      await this.queryAsync(query, [bookId])
    } catch (error) {
      console.error('Error al eliminar el libro:', error)
      throw error
    }
  }

  async findBookById (bookId) {
    try {
      const query = 'SELECT * FROM books WHERE id = ?'
      const result = await this.queryAsync(query, [bookId])
      return result[0]
    } catch (error) {
      console.error('Error al buscar el libro por ID:', error)
      throw error
    }
  }

  async getAllBooks () {
    try {
      const query = 'SELECT * FROM books'
      const books = await this.queryAsync(query)
      return books
    } catch (error) {
      console.error('Error al obtener los libros:', error)
      throw error
    }
  // Otros métodos relacionados con la manipulación de libros en la base de datos
  }
}
module.exports = BookRepository
