# Load Shedding API Query App

This Node.js Express application queries a specified load shedding API to retrieve events for the current day and formats the output to show the start and end times of these events.
This app uses the EskomSePush API for it's query.
This can then be used to envoke shortcuts such as asking Siri for the Load Shedding Schedule for the day.

You can get your API Key Here: https://eskomsepush.gumroad.com/l/api

## Features

- Queries load shedding data from a specified area.
- Filters events to find those occurring today.
- Supports up to 4 load shedding events per day.
- Formats the response to display the start and end times of today's events.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them:

- Node.js
- npm (Node.js package manager)
- Area ID
  - You can use the following to get your area:
  ```bash
      curl --location 'https://developer.sepush.co.za/business/2.0/areas_search?text=`YOUR_SEARCH_HERE`' \
      --header 'Token: YOUR_TOKEN_HERE'
  ```

### Installing

A step by step series of examples that tell you how to get a development env running:

1. Clone the repository to your local machine:

```bash
git clone https://github.com/summa-ingenio/load-shedding
```

2. Navigate to the project directory:

Copy code

```bash
cd load-shedding
```

3. Install the required dependencies:

```bash
npm install
```

4. Add in your Token and Area ID

Note: Replace your_api_token_here with your actual API token.

5. Start the application:

```bash
npm start
```

The application should now be running on http://localhost:3000. You can access the load shedding endpoint at /load-shedding.

### Usage

To use the application, make a GET request to the /load-shedding endpoint. The application will return today's load shedding events, if any, formatted as follows:

```bash
Load Shedding will be at the following times today: 1) from 20:00 to 22:00; 2) from 00:00 to 02:00.
```

### Built With

Express - The web framework used
Axios - Promise based HTTP client for the browser and node.js
Moment.js - Parse, validate, manipulate, and display dates and times in JavaScript.

### Acknowledgments

Thanks to the EskomSePush team for providing the API.
