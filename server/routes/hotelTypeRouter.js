const Router = require('express')
const router = new Router()
const hotelTypeController = require('../controllers/hotelTypeController')


router.post('/', hotelTypeController.create)
router.get('/', hotelTypeController.getAll)
router.get('/:id', hotelTypeController.getOne)
router.put('/', hotelTypeController.update)
router.delete('/:id', hotelTypeController.delete)

module.exports = router