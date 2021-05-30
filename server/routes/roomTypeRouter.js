const Router = require('express')
const router = new Router()
const roomTypeController = require('../controllers/roomTypeController')


router.post('/', roomTypeController.create)
router.get('/', roomTypeController.getAll)
router.get('/:id', roomTypeController.getOne)
router.put('/', roomTypeController.update)
router.delete('/:id', roomTypeController.delete)

module.exports = router