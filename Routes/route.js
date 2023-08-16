const express = require('express')
const controller = require('../controller/controller')
const router = express.Router()

router.post('/add-todo', controller.postAddtodo )
router.get('/get-todo', controller.getAlltodo )
router.get('/toggle-todo/:id', controller.toggletodo )
router.delete('/delete-todo/:id', controller.deletetodo )

module.exports = router;