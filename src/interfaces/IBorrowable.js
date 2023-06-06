class IBorrowable {
  borrow () {
    throw new Error('Method not implemented.')
  }

  return () {
    throw new Error('Method not implemented.')
  }

  // Otros métodos específicos para medios que pueden ser prestados
}

module.exports = IBorrowable
