// api.js

// const url = "https://jsonplaceholder.typicode.com/todos/1";
const url = "https://randomuser.me/api/";

// Function to make an API call
async function apiCall() {
  try {
      const response = await fetch(url);
      if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
  } catch (error) {
      console.error("Error fetching data:", error);
      throw error; // Rethrow the error for further handling if needed
  }
}


// Function to insert API data into sqlite database
async function insertAPIdata(APIdata) {
  try {
      const response = await fetch('/addAPIdata', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ APIdata }),
      });

      if (!response.ok) {
          throw new Error(`Error inserting user data: ${response.status}`);
      }

      // const result = await response.json();
      console.log(result);
      console.log("User inserted:", APIdata);
  } catch (error) {
      console.error("Error inserting user data:", error);
  }
}


// Function to handle the API button click
export async function handleApiButtonClick(apiOutput) {
  console.log("API button clicked");
  try {
      const data = await apiCall();
      const username = data.results[0].login.username; // Get the username
      apiOutput.innerHTML = username; // Update the DOM with the username

      // Insert the username into the SQLite database
      await insertAPIdata(username);
  } catch (error) {
      console.error("Error in API call:", error);
  }
}

