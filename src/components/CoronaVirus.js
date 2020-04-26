import React, { useContext, useEffect } from "react";
import CoronaContext from "../context/coronaContext";

const CoronaVirus = () => {
	const {
		getCoronaUpdate,
		getBangladeshInfo,
		getTotal,
		locations,
		searchedCountry,
		bangladesh,
	} = useContext(CoronaContext);

	console.log(bangladesh);

	useEffect(() => {
		getCoronaUpdate();
		getTotal();
		getBangladeshInfo();
		// eslint-disable-next-line
	}, []);

	return (
		<div>
			<table className="striped responsive-table centered container">
				<thead>
					<tr>
						<th>Flag</th>
						<th>Country</th>
						<th>Cases</th>
						<th>Today's Cases</th>
						<th>Deaths</th>
						<th>Today's Deaths</th>
						<th>Recovered</th>
						<th>Active</th>
						<th>Critical</th>
						<th>Cases Per One Million</th>
					</tr>
				</thead>

				<tbody>
					{searchedCountry === null
						? locations.map((location) => (
								<tr key={location.country}>
									<td>
										<img
											src={location.countryInfo.flag}
											alt="Country Flag"
											className="flag"
										/>
									</td>
									<td>{location.country}</td>
									<td>{location.cases}</td>
									<td>{location.todayCases}</td>
									<td>{location.deaths}</td>
									<td>{location.todayDeaths}</td>
									<td>{location.recovered}</td>
									<td>{location.active}</td>
									<td>{location.critical}</td>
									<td>{location.casesPerOneMillion}</td>
								</tr>
						  ))
						: searchedCountry.map((location) => (
								<tr key={location.country}>
									<td>
										<img
											src={location.countryInfo.flag}
											alt="Country Flag"
											style={{ height: "17px" }}
										/>
									</td>
									<td>{location.country}</td>
									<td>{location.cases}</td>
									<td>{location.todayCases}</td>
									<td>{location.deaths}</td>
									<td>{location.todayDeaths}</td>
									<td>{location.recovered}</td>
									<td>{location.active}</td>
									<td>{location.critical}</td>
									<td>{location.casesPerOneMillion}</td>
								</tr>
						  ))}
				</tbody>
			</table>
		</div>
	);
};

export default CoronaVirus;
