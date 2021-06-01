import {makeAutoObservable} from 'mobx';

export default class roomStore {
    constructor() {
       this._rooms = [ ]

       this._selectedRoom = {}
       makeAutoObservable(this)
    }

    setSelectedRoom(rooms) {
        this._selectedRoom = rooms
    }

    setRooms(rooms) {
        this._rooms = rooms
    }



    get rooms() {
        return this._rooms
    }

    get selectedRoom() {
        return this._selectedRoom
    }
}