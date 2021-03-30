import * as actionTypes from "../ActionTypes";
const initialState = {
  allEvents: [],
  loading: false,
  selectedEvent: {},
  error: "",
  success: null,
};

const eventsReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.FETCHING_DATA:
      return { ...state, loading: payload.loading };
    case actionTypes.SET_EVENT_ERROR:
      return { ...state, loading: false, error: payload.error };
    case actionTypes.SET_SUCCESS:
      return { ...state, success: payload.success, loading: false };
    case actionTypes.FETCH_ALL_EVENTS:
      return { ...state, allEvents: payload.allEvents, loading: false };
    default:
      return state;
  }
};
export default eventsReducers;
