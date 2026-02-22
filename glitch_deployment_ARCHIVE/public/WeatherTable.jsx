import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { formatDate } from './formatDate.js';
import { fetchWeatherData } from './actions.js';

export const WeatherTable = () => {
    const dispatch = useDispatch();
    const { weatherData, loading, error } = useSelector(state => ({
        weatherData: state.weatherData,
        loading: state.loading,
        error: state.error
    }));

    useEffect(() => {
        dispatch(fetchWeatherData());
    }, [dispatch]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!weatherData || !weatherData.hours) return <div>No weather data available</div>;

    let lastDisplayedDate = "";

    return (
        <div>
            <h1>Marine Weather & Solar Data</h1>
            <table border="1">
                <thead>
                    <tr>
                        <th>Time</th>
                        <th>Wind Speed m/s</th>
                        <th>Gust m/s</th>
                        <th>Pressure hPa</th>
                        <th>Water Temp ℃</th>
                        <th>Wave Height m</th>
                        <th>UV Index W/m²</th>
                    </tr>
                </thead>
                <tbody>
                    {weatherData.hours.map((hour, index) => {
                        const { formattedDate, isToday } = formatDate(hour.time);
                        const entryDate = new Date(hour.time);
                        const formattedDateString = `${String(entryDate.getDate()).padStart(2, '0')}/${String(entryDate.getMonth() + 1).padStart(2, '0')}/${entryDate.getFullYear()}`;
                        
                        const dateRow = formattedDateString !== lastDisplayedDate ? (
                            <tr key={`date-${index}`}>
                                <td colSpan="7" className="date-header">
                                    {formattedDate} {isToday ? "(Today)" : ""}
                                </td>
                            </tr>
                        ) : null;
                        
                        lastDisplayedDate = formattedDateString;

                        return (
                            <React.Fragment key={index}>
                                {dateRow}
                                <tr>
                                    <td>{new Date(hour.time).toLocaleTimeString()}</td>
                                    <td>{hour.windSpeed}</td>
                                    <td>{hour.gust}</td>
                                    <td>{hour.pressure}</td>
                                    <td>{hour.waterTemp}</td>
                                    <td>{hour.waveHeight}</td>
                                    <td>{hour.uvIndex}</td>
                                </tr>
                            </React.Fragment>
                        );
                    })}
                </tbody>
            </table>
            <button onClick={() => dispatch(fetchWeatherData())}>
                Refresh Weather Data
            </button>
        </div>
    );
};
