import React, { useContext, useEffect } from "react";
import CoronaContext from "../context/coronaContext";

const Bangladesh = () => {
	const { bangladesh, getBangladeshInfo } = useContext(CoronaContext);

	useEffect(() => {
		getBangladeshInfo();
		// eslint-disable-next-line
	}, []);

	return (
		<div className="row">
			<div className="col s12 m2">
				<div className="card blue-grey darken-4">
					<div className="card-content white-text">
						<span className="card-title">Total Cases</span>
						<p className="yellow-text bold">{bangladesh.cases}</p>
					</div>
				</div>
			</div>

			<div className="col s12 m2">
				<div className="card blue-grey darken-4">
					<div className="card-content white-text">
						<span className="card-title">Deaths</span>
						<p className="red-text bold">{bangladesh.deaths}</p>
					</div>
				</div>
			</div>

			<div className="col s12 m2">
				<div className="card blue-grey darken-4">
					<div className="card-content white-text">
						<span className="card-title">Recovered</span>
						<p className="green-text bold">{bangladesh.recovered}</p>
					</div>
				</div>
			</div>

			<div className="col s12 m2">
				<div className="card blue-grey darken-4">
					<div className="card-content white-text">
						<span className="card-title">Tests</span>
						<p className="yellow-text bold">{bangladesh.tests}</p>
					</div>
				</div>
			</div>

			<div className="col s12 m2">
				<div className="card blue-grey darken-4">
					<div className="card-content white-text">
						<span className="card-title">Today Cases</span>
						<p className="yellow-text bold">{bangladesh.todayCases}</p>
					</div>
				</div>
			</div>

			<div className="col s12 m2">
				<div className="card blue-grey darken-4">
					<div className="card-content white-text">
						<span className="card-title" style={{ fontSize: "22px" }}>
							Today Deaths
						</span>
						<p className="red-text bold">{bangladesh.todayDeaths}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Bangladesh;
