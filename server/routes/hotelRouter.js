const Router = require('express')
const router = new Router()
const hotelController = require('../controllers/hotelController')


router.post('/', hotelController.create)
router.get('/', hotelController.getAll)
router.get('/:id', hotelController.getOne)
router.put('/', hotelController.update)
router.delete('/:id', hotelController.delete)

module.exports = router