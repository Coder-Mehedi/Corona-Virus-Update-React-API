import React, { useState, useContext, useEffect } from 'react'
import CoronaContext from '../context/coronaContext'
const CoronaVirus = () => {
    const { getCoronaUpdate } = useContext(CoronaContext)

    const [locations, setLocations] = useState([])

    const hitApi = async () => {
        const data = await getCoronaUpdate()
        setLocations(Object.values(data.locations))
    }
    useEffect(() => {
        hitApi()
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
                <tr>
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
