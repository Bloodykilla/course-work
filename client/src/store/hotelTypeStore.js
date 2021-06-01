import {makeAutoObservable} from 'mobx';

export default class hotelTypeStore {
    constructor() {
       this._hotelTypes = []
    

       this._selectedHotelType = {}
       makeAutoObservable(this)
    }

    setSelectedHotelType(hotelType) {
        this._selectedHotelType = hotelType
    }

    setHotelTypes(hotelTypes) {
        this._hotelTypes = hotelTypes
    }

    get hotelTypes() {
        return this._hotelTypes
    }

    get selectedHotelType() {
        return this._selectedHotelType
    }
}