import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { formatDate } from './formatDate.js';
import { fetchTideData } from './actions.js';

export const TideTimesTable = () => {
    const dispatch = useDispatch();
    const { tideData, loading, error } = useSelector(state => ({
        tideData: state.tideData,
        loading: state.loading,
        error: state.error
    }));

    useEffect(() => {
        dispatch(fetchTideData());
    }, [dispatch]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!tideData || tideData.length === 0) return <div>No tide data available</div>;

    let lastDisplayedDate = "";

    return (
        <div>
            <h1>Tide Times</h1>
            <table border="1">
                <thead>
                    <tr>
                        <th>Time</th>
                        <th>Height m</th>
                        <th>Type</th>
                    </tr>
                </thead>
                <tbody>
                    {tideData.map((entry, index) => {
                        const { formattedDate, isToday } = formatDate(entry.time);
                        const entryDate = new Date(entry.time);
                        const formattedDateString = `${String(entryDate.getDate()).padStart(2, '0')}/${String(entryDate.getMonth() + 1).padStart(2, '0')}/${entryDate.getFullYear()}`;
                        
                        const dateRow = formattedDateString !== lastDisplayedDate ? (
                            <tr key={`date-${index}`}>
                                <td colSpan="3" className="date-header">
                                    {formattedDate} {isToday ? "(Today)" : ""}
                                </td>
                            </tr>
                        ) : null;
                        
                        lastDisplayedDate = formattedDateString;

                        return (
                            <React.Fragment key={index}>
                                {dateRow}
                                <tr>
                                    <td>{new Date(entry.time).toLocaleTimeString()}</td>
                                    <td>{entry.height}</td>
                                    <td>{entry.type}</td>
                                </tr>
                            </React.Fragment>
                        );
                    })}
                </tbody>
            </table>
            <button onClick={() => dispatch(fetchTideData())}>
                Refresh Tide Times
            </button>
        </div>
    );
};
