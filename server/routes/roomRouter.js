const Router = require('express')
const router = new Router()
const roomController = require('../controllers/roomController')


router.post('/', roomController.create)
router.get('/', roomController.getAll)
router.get('/:id', roomController.getOne)
router.put('/', roomController.update)
router.delete('/:id', roomController.delete)

module.exports = router