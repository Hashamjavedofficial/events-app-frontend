import * as actionTypes from "../ActionTypes";
const initialState = {
  events: [],
  loading: false,
  selectedEvent: {},
  error: "",
};

const eventsReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};
export default eventsReducers;
