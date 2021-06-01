import {makeAutoObservable} from 'mobx';

export default class tourStore {
    constructor() {
       this._tours = []
       this._page = 1
       this._totalCount = 0
       this._limit = 4

       this.selecterTour = {}
       makeAutoObservable(this)
    }

    setSelectedTour(tour) {
        this._selectedTour = tour
    }

    setPage(page) {
        this._page = page
    }

    setTotalCount(count) {
        this._totalCount = count
    }

    setTours(tours) {
        this._tours = tours
    }

    get selectedTour() {
        return this._selectedTour
    }

    
    get page() {
        return this._page
    }

    
    get totalCount() {
        return this._totalCount
    }

    
    get limit() {
        return this._limit
    }


    get tours() {
        return this._tours
    }
}