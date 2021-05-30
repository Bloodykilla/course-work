import {makeAutoObservable} from 'mobx';

export default class roomTypeStore {
    constructor() {
       this._roomTypes = []
    

       this._selectedRoomType = {}
       makeAutoObservable(this)
    }

    setSelectedRoomType(roomType) {
        this._selectedRoomType = roomType
    }

    setRoomTypes(roomTypes) {
        this._roomTypes = roomTypes
    }

    get roomTypes() {
        return this._roomTypes
    }

    get selectedRoomType() {
        return this._selectedRoomType
    }
}