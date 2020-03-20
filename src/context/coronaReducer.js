import { GET_CORONA_UPDATE } from './types'

export default (state, action) => {
    switch(action.type) {
        case GET_CORONA_UPDATE:
            return {
                ...state,
                locations: action.payload
            }
                
        default:
            return state
    }
}