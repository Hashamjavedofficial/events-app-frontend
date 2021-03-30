import axios from "../../utils/axios";
import * as actionTypes from "../ActionTypes";

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

const createEventDispatcher = (payload) => ({
  type: actionTypes.CREATE_EVENT,
  payload,
});

const setSuccessDispatcher = (success) => ({
  type: actionTypes.SET_SUCCESS,
  codecPayloadType: {
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
    dispatch(setSuccessDispatcher(response.data.message));
    dispatch(resetSuccess());
  } catch (e) {
    dispatch(setErrorDispatcher(e.message));
    dispatch(resetError());
  }
};
