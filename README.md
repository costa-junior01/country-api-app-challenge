# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Project: Country Explorer

## Overview

This project is a React application built with Vite that leverages the [Countries API](https://restcountries.com/) to provide information about different countries. Users can view a list of all countries, filter them by region, search for a specific country by name, and view detailed information about a selected country.

## Features

1. **List All Countries:**
   - Display a list of all countries retrieved from the [Countries API](https://restcountries.com/#get-all).

2. **Filter by Region:**
   - Allow users to filter countries by region (e.g., Africa, Americas, Asia, Europe, Oceania).

3. **Search by Name:**
   - Provide a search functionality for users to find a specific country by entering its name, utilizing the [API endpoint](https://restcountries.com/#endpoints-name).

4. **View Country Details:**
   - Allow users to click on a country to view detailed information, including population, area, capital, and more.

## Technologies Used

- React
- Vite (with [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react))

## Getting Started

### Prerequisites

- Node.js installed on your machine
- npm or yarn package manager

### Installation

1. Clone the repository:

   ```bash
   https://github.com/costa-junior01/country-api-app-challenge.git
   ```

2. Navigate to the project directory:

   ```bash
   cd country-api-app-challenge
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

### Running the Application

1. Start the development server:

   ```bash
   npm run dev
   ```

   or

   ```bash
   yarn dev
   ```

2. Open your browser and visit [http://localhost:5173/](http://localhost:5173/) to view the application.

## Usage

- Explore the list of all countries.
- Filter countries by region using the provided dropdown.
- Search for a specific country by entering its name in the search bar (utilizing the [API endpoint](https://restcountries.com/#endpoints-name)).
- Click on a country to view detailed information.

## Project Structure

- `/src`: Contains the main source code of the React application.
- `/src/components`: Includes React components used in the application.
- `/src/screens`: Contains React components representing different pages/routes.
- `/src/ApiUrl`: Includes utility functions or services, such as API requests.

## License
This project is licensed under the [MIT License](LICENSE). Feel free to modify and use it for your own purposes.

## Acknowledgments

- [Countries API](https://restcountries.com/) for providing country data.

---
