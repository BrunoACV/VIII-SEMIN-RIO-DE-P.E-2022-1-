const express = require('express')

const app = express()

const PORT = process.env.PORT || 3001

app.use('/', require('./route/bussControllRoutes'))

app.use(express.json)

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})
