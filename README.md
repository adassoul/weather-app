# Weather App

This Weather App is a simple web application built using React.js for the frontend and Node.js for the backend. It displays the current weather information for a given set of coordinates, fetched from the OpenWeatherMap API.

## Features

- Display current weather description
- Display current temperature in Celsius
- Show additional weather details such as "Feels Like", "Humidity", and "Wind Speed"

## Prerequisites

- [Node.js](https://nodejs.org/en/) (version 12 or higher)
- [npm](https://www.npmjs.com/) (version 6 or higher)

## Installation

1. Clone the repository:

git clone https://github.com/yourusername/weather-app.git
cd weather-app

2. Install dependencies for the server and client:

cd server
npm install
cd ../client
npm install

3. Obtain an API key from the [OpenWeatherMap website](https://openweathermap.org/api) by signing up for a free account.

4. Create a `.env` file in the `server` directory and add your API key:

cd server
touch .env

Inside the `.env` file, add the following line:

OPENWEATHERMAP_API_KEY=your_api_key_here

Replace `your_api_key_here` with your actual OpenWeatherMap API key.

## Running the Application

1. Start the server:

cd server
npm start

The server will be running on `http://localhost:5000`.

2. In a separate terminal, start the client:

cd client
npm start

The client will be running on `http://localhost:3000`.

3. Open your web browser and visit `http://localhost:3000` to use the Weather App.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update the tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
//
to start the app, you need to :
- install node and npm
- run "npm i && npm run start"
the react app will open in the url localhost:3000 and the server on localhost:5000
- open the navigator, and click on the "get weather" button