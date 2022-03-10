const express = require('express')
const app = express()

const PORT = 3000

// LISTEN
app.listen(PORT, () =>
{
  console.log('Server running at port ' + PORT)
})
