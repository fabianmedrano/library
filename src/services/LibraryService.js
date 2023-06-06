class LibraryService {
  constructor (bookRepository, dvdRepository) {
    this.bookRepository = bookRepository
    this.dvdRepository = dvdRepository
  }

  addBook (title, author, isbn) {
    // Crear una instancia de Book
    const book = new Book(title, author, isbn)

    // Lógica para agregar el libro utilizando el repositorio
    this.bookRepository.addBook(book)
  }

  deleteBook (bookId) {
    // Lógica para eliminar un libro utilizando el repositorio
    this.bookRepository.deleteBook(bookId)
  }

  findBookById (bookId) {
    // Lógica para buscar un libro por su ID utilizando el repositorio
    return this.bookRepository.findBookById(bookId)
  }

  // Otros métodos relacionados con la gestión de la biblioteca
}

module.exports = LibraryService
