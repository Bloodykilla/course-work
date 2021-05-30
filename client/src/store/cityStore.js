import {makeAutoObservable} from 'mobx';

export default class cityStore {
    constructor() {
       this._cities = []
    

       this._selectedCities = {}
       makeAutoObservable(this)
    }

    setSelectedCities(city) {
        this._selectedCities = city
    }

    setCities(cities) {
        this._cities = cities
    }

    get cities() {
        return this._cities
    }

    get selectedCities() {
        return this._selectedCities
    }
}