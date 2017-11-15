import * as types from '../actions/actionTypes';

export default function eventReducer(state = [], action) {
    switch(action.type) {
        case types.CREATE_EVENT:
            return [...state, Object.assign({}, action.event)];
        case types.LOAD_EVENTS_SUCCESS:
            return action.events;
        default:
            return state;
    }
}