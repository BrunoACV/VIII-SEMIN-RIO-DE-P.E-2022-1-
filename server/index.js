const express = require('express')

const app = express()

const PORT = process.env.PORT || 3001

app.use('/', require('./route/cobradorRoutes'))
app.use('/', require('./route/onibusRoutes'))
app.use('/', require('./route/motoristaRoutes'))

app.use(express.json)

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})
