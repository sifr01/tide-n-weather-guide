// client.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store.js';
import { displayTideTimesTable } from './displayTideTimesTable.js';
import { displayWeatherAndSolar } from './displayWeatherAndSolar.js';
import { displayErrorMessage } from './displayErrorMessages.js';
import { switchTab } from './switchTab.js';
import { showTable } from './showTable.js';

console.log("client.js is running");

// Define variables that reference elements on the page
const tideTimesButton = document.querySelector('#tide-times-button');
const weatherDataButton = document.querySelector('#weather-data-button');

const tideTimesTable = document.getElementById("tide-times-table");
const weatherSolarOutput = document.getElementById("weather-solar-output");

// REFRESH FUNCTIONALITY REFRESH FUNCTIONALITY REFRESH FUNCTIONALITY
const tideTimesDBquery = document.querySelector('#tide-times-DB-query');
const weatherDBquery = document.querySelector('#weather-DB-query');

const tideTimesTab = document.getElementById('tide-times-DB-query');
const weatherTab = document.getElementById('weather-DB-query');

// Initialize React components
const tideTimesRoot = createRoot(document.getElementById('tide-times-data'));
const weatherRoot = createRoot(document.getElementById('weather-solar-data'));

// Event listener for tide times tab
tideTimesDBquery.addEventListener('click', event => {
    console.log("tideTimesDBquery button clicked");
    switchTab(tideTimesTab);
    showTable(tideTimesTable);
    tideTimesRoot.render(
        <Provider store={store}>
            <TideTimesTable />
        </Provider>
    );
});

// Event listener for weather data tab
weatherDBquery.addEventListener('click', event => {
    console.log("weather-data-DB-query button clicked");
    switchTab(weatherTab);

    fetch("/weatherAndSolarDBquery")
        .then(response => {
            console.log("Response received:", response);
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log("Weather data received:", data);
            displayWeatherAndSolar(data, 'weather-data'); // Display weather data
            showTable(weatherSolarOutput); // Ensure the weather data output is shown
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});

// REFRESH FUNCTIONALITY REFRESH FUNCTIONALITY REFRESH FUNCTIONALITY

// Event listener for tideTimesButton
tideTimesButton.addEventListener('click', event => {
    console.log("tideTimesButton API button clicked");
    showTable(tideTimesTable); // Show tide times table
    fetch("/fetchTideTimes", {})
        .then(response => {
            if (response.status === 429) {
                return response.json().then(data => {
                    displayErrorMessage(data.message);
                });
            }
            return response.json();
        })
        .then(data => {
            if (data) {
                console.log("The fetchTideTimes endpoint response message is: ", data);
                // Handle the tide times data here if needed
            }
        })
        .catch(error => {
            console.error("Error fetching tide times:", error);
            displayErrorMessage("An error occurred while fetching tide times.");
        });
});

// Event listener for weatherDataButton
weatherDataButton.addEventListener('click', event => {
    console.log("weatherDataButton API button clicked");
    showTable(weatherSolarOutput); // Show weather data output
    fetch("/fetchWeatherAndSolarData", {})
        .then(response => {
            if (response.status === 429) {
                return response.json().then(data => {
                    displayErrorMessage(data.message);
                });
            }
            return response.json();
        })
        .then(data => {
            if (data) {
                console.log("The fetchWeatherAndSolarData endpoint response message is: ", data);
                // Handle the weather data here if needed
            }
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
            displayErrorMessage("An error occurred while fetching weather data.");
        });
});

// Simulate a click on the tideTimesDBquery button when the page loads
document.addEventListener('DOMContentLoaded', () => {
    tideTimesDBquery.click();
});