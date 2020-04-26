import React, { useReducer } from "react";
import axios from "axios";
import CoronaContext from "./coronaContext";
import coronaReducer from "./coronaReducer";

import { GET_CORONA_UPDATE, FIND_BY_COUNTRY, SET_TOTAL } from "./types";

const CoronaContextProvider = (props) => {
	const initialState = {
		locations: [],
		total: {
			confirmed: 0,
			deaths: 0,
			recovered: 0,
			updated: 0,
		},
		searchedCountry: null,
	};

	const [state, dispatch] = useReducer(coronaReducer, initialState);

	const getCoronaUpdate = async () => {
		const res = await axios.get("https://corona.lmao.ninja/v2/countries");
		dispatch({ type: GET_CORONA_UPDATE, payload: res.data });
	};
	const getTotal = async () => {
		const res = await axios.get("https://corona.lmao.ninja/v2/all");
		dispatch({ type: SET_TOTAL, payload: res.data });
	};

	const findByCountry = (searchText) => {
		const country = state.locations.filter((location) =>
			location.country.toLowerCase().includes(searchText)
		);
		dispatch({ type: FIND_BY_COUNTRY, payload: country });
	};

	return (
		<CoronaContext.Provider
			value={{
				locations: state.locations,
				total: state.total,
				searchedCountry: state.searchedCountry,
				getCoronaUpdate,
				getTotal,
				findByCountry,
			}}
		>
			{props.children}
		</CoronaContext.Provider>
	);
};

export default CoronaContextProvider;
