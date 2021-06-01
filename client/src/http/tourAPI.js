import {$host} from './index'

//tour-type fetch
export const createTourType = async(type) => {
    const {data} = await $host.post('api/tour-type', type)
    return data
}

export const fetchTourType = async() => {
    const {data} = await $host.get('api/tour-type')
    return data
}

//country fetch
export const createCountry = async(country) => {
    const {data} = await $host.post('api/country', country)
    return data
}

export const fetchCountry = async() => {
    const {data} = await $host.get('api/country')
    return data
}

//fetch city
export const createCity = async(city) => {
    const {data} = await $host.post('api/city', city)
    return data
}
export const fetchCity = async() => {
    const {data} = await $host.get('api/city')
    return data
}


//tour fetch
export const createTour = async(tour) => {
    const {data} = await $host.post('api/tour', tour)
    return data
}

export const fetchTour = async(country_id,price,hrang,tour_type_id, limit = 5) => {
    const {data} = await $host.get('api/tour', {params: {
        country_id,price,hrang,tour_type_id, limit
    }})
    return data
}
export const fetchOneTour = async(id) => {
    const {data} = await $host.get('api/tour/' + id)
    return data
}

//hotel fetch
export const createHotel = async(hotel) => {
    const {data} = await $host.post('api/hotel', hotel)
    return data
}
export const fetchHotel = async() => {
    const {data} = await $host.get('api/hotel')
    return data
}

// hotle type fetch
export const createHotelType = async(hotelType) => {
    const {data} = await $host.post('api/hotel-type', hotelType)
    return data
}
export const fetchHotelType = async() => {
    const {data} = await $host.get('api/hotel-type')
    return data
}


// room type fetch
export const createRoomType = async(roomType) => {
    const {data} = await $host.post('api/room-type', roomType)
    return data
}
export const fetchRoomType = async() => {
    const {data} = await $host.get('api/room-type')
    return data
}

// room fetch
export const createRoom = async(room) => {
    const {data} = await $host.post('api/room', room)
    return data
}
export const fetchRoom = async() => {
    const {data} = await $host.get('api/room')
    return data
}
