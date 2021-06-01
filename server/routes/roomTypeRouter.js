const Router = require('express')
const router = new Router()
const roomTypeController = require('../controllers/roomTypeController')
const checkRole = require('../middleware/roleMiddleware')

router.post('/', checkRole('ADMIN'),roomTypeController.create)
router.get('/', roomTypeController.getAll)
router.get('/:id',roomTypeController.getOne)
router.put('/', checkRole('ADMIN'),roomTypeController.update)
router.delete('/:id', checkRole('ADMIN'),roomTypeController.delete)

module.exports = router