require('dotenv').config()
const express = require('express'),
  app = express(),
  { PORT } = process.env

app.use(express.static(`${__dirname}/../build`))

app.listen(PORT || 4420, () => console.log(`Server Running On ${PORT || 4420}`))
