const express = require('express')
const router = express.Router()

const data = require('../dummyData')

// /users
router.get('/', (req, res) => {
  res.status(200).send({ candidates: data.users })
})

router.get('/:id', (req, res) => {
  const { id } = req.params

  const candidate = data.users.find((item) => item.id === Number(id))
  res.status(200).send({ candidate })
})

module.exports = router
