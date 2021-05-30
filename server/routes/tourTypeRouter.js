const Router = require('express')
const router = new Router()
const tourTypeController = require('../controllers/tourTypeController')


router.post('/', tourTypeController.create)
router.get('/', tourTypeController.getAll)
router.get('/:id', tourTypeController.getOne)
router.put('/', tourTypeController.update)
router.delete('/:id', tourTypeController.delete)

module.exports = router