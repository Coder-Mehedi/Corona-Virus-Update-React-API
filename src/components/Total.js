import React, { useContext } from 'react'
import CoronaContext from '../context/coronaContext'

const Total = () => {
    const { total } = useContext(CoronaContext)
    return (
        <div className="row">
            <div className="col s12 m4">
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                    <span className="card-title">Confirmed Cases</span>
                    <p>{total.confirmed}</p>
                    </div>
                </div>
            </div>

            <div className="col s12 m4">
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                    <span className="card-title">Deaths</span>
                    <p>{total.deaths}</p>
                    </div>
                </div>
            </div>

            <div className="col s12 m4">
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                    <span className="card-title">Recovered</span>
                    <p>{total.recovered}</p>
                    </div>
                </div>
            </div>
      </div>
    )
}

export default Total
