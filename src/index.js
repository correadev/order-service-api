import express from 'express'

const app = express()

app.listen(8080, () => {
  console.log(`Server listen on: http://localhost:8080`)
})
