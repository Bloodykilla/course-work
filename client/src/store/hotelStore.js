import {makeAutoObservable} from 'mobx';

export default class hotelStore {
    constructor() {
       this._hotels = [

       ]
       makeAutoObservable(this)
    }
    setSelectedHotels(hotel) {
        this._selectedHotels = hotel
    }

    setHotels(hotels) {
        this._hotels = hotels
    }
    
    get selectedHotels() {
        return this._selectedHotels
    }


    get hotels() {
        return this._hotels
    }
}