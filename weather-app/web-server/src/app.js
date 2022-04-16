const express = require('express')
const path = require('path')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.set('view engine', 'hbs')
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
  res.render('index', {
    title: "Title",
    body: "Body"
  })
})

app.get('/weather', (req, res) => {
  res.send({
    forecast: "Sunny",
    location: "Indaiatutba"
  })
})

app.listen(3000, () => {
  console.log('Server is running on port 3000');
})