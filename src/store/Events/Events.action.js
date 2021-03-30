import axios from "../../utils/axios";
import * as actionTypes from "../ActionTypes";
import { success, error } from "../../utils/toast";

const fetchingDataDispatcher = (loading) => ({
  type: actionTypes.FETCHING_DATA,
  payload: {
    loading,
  },
});

const setErrorDispatcher = (error) => ({
  type: actionTypes.SET_EVENT_ERROR,
  payload: {
    error,
  },
});

const setSuccessDispatcher = (success) => ({
  type: actionTypes.SET_SUCCESS,
  payload: {
    success,
  },
});

const resetSuccess = () => (dispatch) => {
  setTimeout(() => {
    dispatch(setSuccessDispatcher(null));
  }, 5000);
};

const resetError = () => (dispatch) => {
  setTimeout(() => {
    dispatch(setErrorDispatcher(""));
  }, 5000);
};

export const createEvent = (data, closeModal) => async (dispatch) => {
  dispatch(fetchingDataDispatcher(true));
  try {
    const response = await axios.post("events/create", data);
    closeModal();
    success(response.data.message);
    dispatch(setSuccessDispatcher(response.data.message));
    dispatch(resetSuccess());
    dispatch(getAllEvents());
  } catch (e) {
    error(e.message);
    dispatch(setErrorDispatcher(e.message));
    dispatch(resetError());
  }
};

const getAllEventsDispatcher = (allEvents) => ({
  type: actionTypes.FETCH_ALL_EVENTS,
  payload: {
    allEvents,
  },
});

export const getAllEvents = () => async (dispatch) => {
  dispatch(fetchingDataDispatcher(true));
  try {
    const response = await axios.get("events/");
    dispatch(getAllEventsDispatcher(response.data.data));
  } catch (e) {
    dispatch(setErrorDispatcher(e.message));
    dispatch(resetError());
  }
};
