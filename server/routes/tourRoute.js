const Router = require('express')
const router = new Router()
const tourController = require('../controllers/tourController')


router.post('/', tourController.create)
router.get('/', tourController.getAll)
router.get('/:id', tourController.getOne)
router.put('/', tourController.update)
router.delete('/:id', tourController.delete)

module.exports = router