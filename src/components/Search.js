import React, { useState, useContext } from 'react'
import CoronaContext from '../context/coronaContext'

const Search = () => {
    const { findByCountry } = useContext(CoronaContext)

    const [searchText, setSearchText] = useState('')

    const handleChange = e => {
        setSearchText(e.target.value)
        findByCountry(searchText)
    }

    return (
        <form className="container" onSubmit={e => e.preventDefault()}>
            <input type="text"
                onChange={handleChange}
                value={ searchText }
                placeholder="Enter A Country Name"
                />
        </form>
    )
}

export default Search
