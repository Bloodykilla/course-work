const Router = require('express')
const router = new Router()

const CountryRouter = require('./countryRouter')
const CityRouter = require('./cityRouter')
const TourTypeRouter = require('./tourTypeRouter')
const TourRouter = require('./tourRoute')
const HotelRouter = require('./hotelRouter')
const HotelTypeRouter = require('./hotelTypeRouter')
const RoomTypeRouter = require('./roomTypeRouter')
const RoomRouter = require('./roomRouter')


router.use('/country', CountryRouter)
router.use('/city', CityRouter)
router.use('/tour-type',TourTypeRouter)
router.use('/tour', TourRouter)
router.use('/hotel', HotelRouter)
router.use('/hotel-type',HotelTypeRouter)
router.use('/room-type', RoomTypeRouter)
router.use('/room', RoomRouter)


module.exports = router