const express = require('express')
const users=require('./users.json')
// cors middleware install for accees from website
var cors = require('cors')
var app = express()
app.use(cors())
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World! min')
})
app.get('/users', (req, res) => {
  res.send(users)
})

// serch user speacific id 
app.get('/users/:ID', (req, res) => {
  const id= parseInt(req.params.ID);
  const user= users.find(user=>user.id===id)
  res.send(user)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})