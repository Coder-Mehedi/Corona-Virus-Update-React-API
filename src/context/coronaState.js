import React, { useReducer } from 'react'
import axios from 'axios'
import CoronaContext from './coronaContext'
import coronaReducer from './coronaReducer'

import { GET_CORONA_UPDATE } from './types'

const CoronaContextProvider = props => {
    const initialState = {
        locations: [],
    }

    const [state, dispatch] = useReducer(coronaReducer, initialState)

    const getCoronaUpdate = async () => {
        const res = await axios.get('https://coronavirus-tracker-api.herokuapp.com/v2/locations')
        dispatch({ type: GET_CORONA_UPDATE, payload: Object.values(res.data.locations) })
    }

    return(
        <CoronaContext.Provider value={{ locations: state.locations, getCoronaUpdate }}>
            { props.children }
        </CoronaContext.Provider>
    )
}

export default CoronaContextProvider