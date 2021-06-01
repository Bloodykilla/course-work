import {makeAutoObservable} from 'mobx';

export default class hotelStore {
    constructor() {
       this._hotels = []


       this._selectedHotel = {}
       makeAutoObservable(this)
    }
    setSelectedHotel(hotel) {
        this._selectedHotel = hotel
    }

    setHotels(hotels) {
        this._hotels = hotels
    }
    
    get selectedHotel() {
        return this._selectedHotel
    }


    get hotels() {
        return this._hotels
    }
}