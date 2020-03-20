import React, { useReducer } from 'react'
import axios from 'axios'
import CoronaContext from './coronaContext'
import coronaReducer from './coronaReducer'

import { GET_CORONA_UPDATE, FIND_BY_COUNTRY } from './types'

const CoronaContextProvider = props => {
    const initialState = {
        locations: [],
        searchedCountry: null
    }

    const [state, dispatch] = useReducer(coronaReducer, initialState)

    const getCoronaUpdate = async () => {
        const res = await axios.get('https://coronavirus-tracker-api.herokuapp.com/v2/locations')
        dispatch({ type: GET_CORONA_UPDATE, payload: Object.values(res.data.locations) })
    }

    const findByCountry = searchText => {
        const country = state.locations.filter(location => location.country.toLowerCase().includes(searchText))
        console.log(country)
        dispatch({ type: FIND_BY_COUNTRY, payload: country })
    }

    return(
        <CoronaContext.Provider value={{
                locations: state.locations,
                searchedCountry: state.searchedCountry,
                getCoronaUpdate,
                findByCountry
            }}>
            { props.children }
        </CoronaContext.Provider>
    )
}

export default CoronaContextProvider