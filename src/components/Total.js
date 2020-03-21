import React, { useContext } from 'react'
import CoronaContext from '../context/coronaContext'
import moment from 'moment'

const Total = () => {
    const { total } = useContext(CoronaContext)
    return (
        <div className="row">
            <div><h6 className="blue-text">Updated: { moment(total.updated).fromNow() }</h6></div>
            <div className="col s12 m4">
                <div className="card blue-grey darken-4">
                    <div className="card-content white-text">
                    <span className="card-title">Confirmed Cases</span>
                    <p className="yellow-text bold">{total.confirmed}</p>
                    </div>
                </div>
            </div>

            <div className="col s12 m4">
                <div className="card blue-grey darken-4">
                    <div className="card-content white-text">
                    <span className="card-title">Deaths</span>
                    <p className="red-text bold">{total.deaths}</p>
                    </div>
                </div>
            </div>

            <div className="col s12 m4">
                <div className="card blue-grey darken-4">
                    <div className="card-content white-text">
                    <span className="card-title">Recovered</span>
                    <p className="green-text bold">{total.recovered}</p>
                    </div>
                </div>
            </div>
      </div>
    )
}

export default Total
