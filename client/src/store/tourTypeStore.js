import {makeAutoObservable} from 'mobx';

export default class tourTypeStore {
    constructor() {
       this._tourTypes = []
    

       this._selectedType = {}
       makeAutoObservable(this)
    }

    setSelectedType(type) {
        this._selectedType = type
    }

    setTourTypes(tourTypes) {
        this._tourTypes = tourTypes
    }

    get tourTypes() {
        return this._tourTypes
    }

    get selectedType() {
        return this._selectedType
    }
}