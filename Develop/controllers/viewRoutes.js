const router = require('express').Router()

router.get('/notes', (req, res) => {
  res.sendFile(join(__dirname, '..', 'public', 'notes.html'))
}) 

router.ge('/*', (req, res) => {
  res.sendFile(join(__dirname, '..', 'public', 'notes.html')) )