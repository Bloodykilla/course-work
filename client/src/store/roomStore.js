import {makeAutoObservable} from 'mobx';

export default class roomStore {
    constructor() {
       this._rooms = [

       ]
       makeAutoObservable(this)
    }

    setRooms(rooms) {
        this._tours = rooms
    }



    get rooms() {
        return this._rooms
    }
}