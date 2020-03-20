import { GET_CORONA_UPDATE, FIND_BY_COUNTRY, SET_TOTAL } from './types'

export default (state, action) => {
    switch(action.type) {
        case GET_CORONA_UPDATE:
            return {
                ...state,
                locations: action.payload
            }
        case SET_TOTAL:
            return {
                ...state,
                total: {
                    confirmed: action.payload.confirmed,
                    deaths: action.payload.deaths,
                    recovered: action.payload.recovered
                }
            }
        case FIND_BY_COUNTRY:
            return {
                ...state,
                searchedCountry: action.payload
            }
                
        default:
            return state
    }
}