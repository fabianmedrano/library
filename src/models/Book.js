class Book {
  constructor (title, author, isbn) {
    this.title = title
    this.author = author
    this.isbn = isbn
  }

  getTitle () {
    return this.title
  }

  getAuthor () {
    return this.author
  }

  getISBN () {
    return this.isbn
  }

  // Otros métodos relacionados con libros
}

module.exports = Book
