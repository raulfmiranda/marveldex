import * as types from './actionTypes';
import eventApi from '../api/eventApi';

export function createEvent(event) {
    return { type: types.CREATE_EVENT, event };
}

export function loadEvents() {
  return function (dispatch) {
    return eventApi.getAllEvents().then(events => {
      dispatch(loadEventsSuccess(events.data.data.results));
    }).catch(error => {
      throw(error);
    });
  };
}
  
export function loadEventsSuccess(events) {
  return { type: types.LOAD_EVENTS_SUCCESS, events };
}