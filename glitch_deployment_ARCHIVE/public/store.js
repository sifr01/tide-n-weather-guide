import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Initial state
const initialState = {
    tideData: [],
    weatherData: null,
    loading: false,
    error: null
};

// Reducer
function reducer(state = initialState, action) {
    switch (action.type) {
        case 'FETCH_TIDE_REQUEST':
            return { ...state, loading: true };
        case 'FETCH_TIDE_SUCCESS':
            return { ...state, loading: false, tideData: action.payload };
        case 'FETCH_TIDE_ERROR':
            return { ...state, loading: false, error: action.error };
        case 'FETCH_WEATHER_REQUEST':
            return { ...state, loading: true };
        case 'FETCH_WEATHER_SUCCESS':
            return { ...state, loading: false, weatherData: action.payload };
        case 'FETCH_WEATHER_ERROR':
            return { ...state, loading: false, error: action.error };
        default:
            return state;
    }
}

// Create store
const store = createStore(reducer, applyMiddleware(thunk));

export default store;
