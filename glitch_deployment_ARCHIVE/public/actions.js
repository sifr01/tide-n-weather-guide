// Redux actions
export const fetchTideData = () => async (dispatch) => {
    dispatch({ type: 'FETCH_TIDE_REQUEST' });
    try {
        const response = await fetch("/tideTimesDBquery");
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        dispatch({ type: 'FETCH_TIDE_SUCCESS', payload: data.data });
    } catch (error) {
        dispatch({ type: 'FETCH_TIDE_ERROR', error: error.message });
        console.error('There was a problem with the fetch operation:', error);
    }
};

export const fetchWeatherData = () => async (dispatch) => {
    dispatch({ type: 'FETCH_WEATHER_REQUEST' });
    try {
        const response = await fetch("/weatherDBquery");
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        dispatch({ type: 'FETCH_WEATHER_SUCCESS', payload: data.data });
    } catch (error) {
        dispatch({ type: 'FETCH_WEATHER_ERROR', error: error.message });
        console.error('There was a problem with the fetch operation:', error);
    }
};
