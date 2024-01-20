const express = require('express')
const router = express.Router()

const data = require('../dummyData')

// mora da se pazi kojim redom idu

// /users
router.get('/', (req, res) => {
  // ovako se hvata querystring
  console.log(req.query.name)
  res.send({ users: data.users })
})

// users/new
router.get('/new', (req, res) => {
  res.send('New user')
})

router.post('/', (req, res) => {
  res.send('create user')
})

router
  .route('/:userId')
  .get((req, res) => {
    const { userId } = req.params
    console.log(req.user)
    res.send(`get user ${userId}`)
  })
  .put((req, res) => {
    const { userId } = req.params
    res.send(`update user ${userId}`)
  })
  .delete((req, res) => {
    const { userId } = req.params
    res.send(`delete user ${userId}`)
  })

// router.get('/:userId', (req, res) => {
//   const { userId } = req.params
//   res.send(`get user ${userId}`)
// })

// router.put('/:userId', (req, res) => {
//   const { userId } = req.params
//   res.send(`update user ${userId}`)
// })

// router.delete('/:userId', (req, res) => {
//   const { userId } = req.params
//   res.send(`delete user ${userId}`)
// })

const users = [{ name: 'Kyle' }, { name: 'Sally' }]

// middleware
// poziva se svaki put kad uhvati userid u paramsu
router.param('userId', (req, res, next, id) => {
  console.log(id)
  req.user = users[id]
  next()
})

module.exports = router
