import {makeAutoObservable} from 'mobx';

export default class tourStore {
    constructor() {
       this._tours = [

       ]
       makeAutoObservable(this)
    }

    setTours(tours) {
        this._tours = tours
    }



    get tours() {
        return this._tours
    }
}