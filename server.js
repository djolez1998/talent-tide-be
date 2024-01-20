const express = require('express')
const cors = require('cors')

const app = express()

// app.user(express.static("public")) -> vraca html iz public foldera

app.use(cors())

// da sredjuje forme
app.use(express.urlencoded({ extended: true }))

app.use(express.json())

// ovako je za sve pozvan
app.use(logger)

// ako dodamo logger kao drugi callback onda ce da se zove samo na ovu rutu
// jer se u njemu poziva ovaj next(), on poziva ovaj (req,res) =>{}
// app.get('/', logger, (req, res)
app.get('/', logger, (req, res) => {
  console.log('Here')
  res.status(500).json({ message: 'ERROR' })
  res.send('Hi')
})

const usersRouter = require('./routes/users')
const loginRouter = require('./routes/login')
const candidatesRouter = require('./routes/candidates')

app.use('/users', usersRouter)
app.use('/login', loginRouter)
app.use('/candidates', candidatesRouter)

// const logger = (req, res, next) => {
//   console.log(req.originalUrl)
//   next()
// }

// middleware
function logger(req, res, next) {
  console.log(req.originalUrl)
  next()
}

app.listen(8000)
