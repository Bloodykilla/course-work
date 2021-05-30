import {makeAutoObservable} from 'mobx';

export default class hotelTypeStore {
    constructor() {
       this._hotelTypes = []
    

       this._selectedType = {}
       makeAutoObservable(this)
    }

    setSelectedHotelType(hotelTypes) {
        this._selectedType = hotelTypes
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