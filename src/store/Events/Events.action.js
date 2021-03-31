import axios from "../../utils/axios";
import * as actionTypes from "../ActionTypes";
import { success, error } from "../../utils/toast";

import { bufferToImage } from "../../utils/helpers";

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

export const createEvent = (data, closeModal, edit) => async (dispatch) => {
  dispatch(fetchingDataDispatcher(true));
  try {
    let response;
    if (edit) {
      response = await axios.put("events/update", data);
    } else {
      response = await axios.post("events/create", data);
    }
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
    let events = [];
    response.data.data.forEach((event) => {
      if (event.eventImage) {
        events.push({
          ...event,
          eventImage: `data:image/png;base64,${bufferToImage(
            event.eventImage.data
          )}`,
        });
      } else {
        events.push({
          ...event,
        });
      }
    });
    dispatch(getAllEventsDispatcher(events));
  } catch (e) {
    dispatch(setErrorDispatcher(e.message));
    dispatch(resetError());
  }
};
export const setSelectedEvent = (selectedEvent) => ({
  type: actionTypes.SET_SELECTED_EVENT,
  payload: {
    selectedEvent,
  },
});

export const deleteEvent = (id) => async (dispatch) => {
  dispatch(fetchingDataDispatcher(true));
  try {
    let response = await axios.delete(`events/${id}`);
    success(response.data.message);
    dispatch(getAllEvents());
    dispatch(setSuccessDispatcher(response.data.message));
    dispatch(resetSuccess());
  } catch (e) {
    error(e.message);
    dispatch(setErrorDispatcher(e.message));
    dispatch(resetError());
  }
};

export const searchEvents = (data) => async (dispatch) => {
  dispatch(fetchingDataDispatcher(true));
  try {
    const response = await axios.post("events/search", data);
    let events = [];
    response.data.data.forEach((event) => {
      if (event.eventImage) {
        events.push({
          ...event,
          eventImage: `data:image/png;base64,${bufferToImage(
            event.eventImage.data
          )}`,
        });
      } else {
        events.push({
          ...event,
        });
      }
    });
    dispatch(getAllEventsDispatcher(events));
  } catch (e) {
    dispatch(setErrorDispatcher(e.message));
    dispatch(resetError());
  }
};
