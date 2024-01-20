const express = require('express')
const router = express.Router()

const data = require('../dummyData')

router.post('/', (req, res) => {
  const { username, password } = req.body
  const selectedUser = data.users.find((user) => user.username === username)

  if (selectedUser) {
    if (selectedUser.password !== password) {
      res.status(401).json({ message: 'Password is incorrect' })
    }
    res.status(200).json({ message: 'Success' })
  } else {
    res.status(400).json({ message: 'Error' })
  }
})

module.exports = router
