import React, { useContext, useEffect } from 'react'
import CoronaContext from '../context/coronaContext'
const CoronaVirus = () => {
    const { getCoronaUpdate, locations } = useContext(CoronaContext)

    useEffect(() => {
        getCoronaUpdate()
    }, [])

    return (
        <div>
            <h1>Corona Virus Update</h1>
            <table className="striped responsive-table centered container">
            <thead>
                <tr>
                    <th>Country</th>
                    <th>Confirm Cases</th>
                    <th>Deaths</th>
                    <th>Recovered</th>
                </tr>
            </thead>

            <tbody>
            {locations.map(location => (
                <tr key={location.id}>
                    <td>{location.country}</td>
                    <td>{location.latest.confirmed}</td>
                    <td>{location.latest.deaths}</td>
                    <td>{location.latest.recovered}</td>
                </tr>
                ))}
                
            </tbody>
            </table>
            
        </div>
    )
}

export default CoronaVirus
