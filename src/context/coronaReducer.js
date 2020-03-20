import { GET_CORONA_UPDATE, FIND_BY_COUNTRY } from './types'

export default (state, action) => {
    switch(action.type) {
        case GET_CORONA_UPDATE:
            return {
                ...state,
                locations: action.payload
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