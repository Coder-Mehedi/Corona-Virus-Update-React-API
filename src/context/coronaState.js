import React, { useReducer } from 'react'
import axios from 'axios'
import CoronaContext from './coronaContext'
import coronaReducer from './coronaReducer'

// import {  } from '../types'

const CoronaContextProvider = props => {
    const initialState = {
        categories: [],
        current: null
    }

    const [state, dispatch] = useReducer(coronaReducer, initialState)

    const getCoronaUpdate = async () => {
        const res = await axios.get('https://coronavirus-tracker-api.herokuapp.com/v2/locations')
        return res.data
    }

    return(
        <CoronaContext.Provider value={{ state, getCoronaUpdate }}>
            { props.children }
        </CoronaContext.Provider>
    )
}

export default CoronaContextProvider