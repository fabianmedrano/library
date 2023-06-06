class DVD {
  constructor (title, director, duration) {
    this.title = title
    this.director = director
    this.duration = duration
  }

  getTitle () {
    return this.title
  }

  getDirector () {
    return this.director
  }

  getDuration () {
    return this.duration
  }

  // Otros métodos relacionados con DVDs
}

module.exports = DVD
