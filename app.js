// Requiring module
const express = require('express')
const routes = require('./src/routes/routes')
// Creating express object
const app = express()

app.use(express.json())
// Rutas

app.use('/', routes)

// Port Number
const PORT = process.env.PORT || 5000

// Server Setup
app.listen(PORT, console.log(
`Server started on port ${PORT}`))
