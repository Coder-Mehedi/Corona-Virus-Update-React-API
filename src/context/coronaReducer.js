import {
	GET_CORONA_UPDATE,
	FIND_BY_COUNTRY,
	SET_TOTAL,
	CLEAR_SEARCH,
} from "./types";

export default (state, action) => {
	switch (action.type) {
		case GET_CORONA_UPDATE:
			return {
				...state,
				locations: action.payload,
			};
		case SET_TOTAL:
			return {
				...state,
				total: {
					confirmed: action.payload.cases,
					deaths: action.payload.deaths,
					recovered: action.payload.recovered,
					updated: action.payload.updated,
				},
			};
		case FIND_BY_COUNTRY:
			return {
				...state,
				searchedCountry: action.payload,
			};
		case CLEAR_SEARCH:
			return {
				...state,
				searchedCountry: null,
			};

		default:
			return state;
	}
};
