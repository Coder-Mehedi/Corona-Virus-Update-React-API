import React, { useReducer } from 'react'
import axios from 'axios'
import CoronaContext from './coronaContext'
import coronaReducer from './coronaReducer'

import { GET_CORONA_UPDATE, FIND_BY_COUNTRY, SET_TOTAL} from './types'

const CoronaContextProvider = props => {
    const initialState = {
        locations: [],
        total: {
            confirmed: 0,
            deaths: 0,
            recovered: 0
        },
        searchedCountry: null
    }

    const [state, dispatch] = useReducer(coronaReducer, initialState)

    const getCoronaUpdate = async () => {
        const res = await axios.get('https://coronavirus-tracker-api.herokuapp.com/v2/locations')
        dispatch({ type: GET_CORONA_UPDATE, payload: Object.values(res.data.locations) })

        let confirmed = 0
        let deaths = 0
        let recovered = 0

        state.locations.map(country => {
            confirmed += country.latest.confirmed
            deaths += country.latest.deaths
            recovered += country.latest.recovered
        })

        dispatch({ type: SET_TOTAL, payload: { confirmed, deaths, recovered }})
    }

    const findByCountry = searchText => {
        const country = state.locations.filter(location => location.country.toLowerCase().includes(searchText))
        dispatch({ type: FIND_BY_COUNTRY, payload: country })
    }

    return(
        <CoronaContext.Provider value={{
                locations: state.locations,
                total: state.total,
                searchedCountry: state.searchedCountry,
                getCoronaUpdate,
                findByCountry
            }}>
            { props.children }
        </CoronaContext.Provider>
    )
}

export default CoronaContextProvider