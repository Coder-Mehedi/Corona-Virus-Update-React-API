import React, { useState, useContext } from 'react'
import CoronaContext from '../context/coronaContext'

const Search = () => {
    const { findByCountry } = useContext(CoronaContext)

    const [searchText, setSearchText] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        findByCountry(searchText)
    }

    return (
        <form className="container" onSubmit={ handleSubmit }>
            <input type="text"
                onChange={e => setSearchText(e.target.value)}
                value={ searchText }
                placeholder="Enter A Country Name"
                />
        </form>
    )
}

export default Search
