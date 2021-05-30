import {makeAutoObservable} from 'mobx';

export default class countryStore {
    constructor() {
       this._countries = []

       this._selectedCountry = {}
       makeAutoObservable(this)
    }

    setSelectedCountry(countries) {
        this._selectedCountry = countries
    }

    setCountries(countries) {
        this._countries = countries
    }



    get countries() {
        return this._countries
    }

    get selectedCountry() {
        return this._selectedCountry
    }
}