const express = require("express");
const axios = require("axios");
const moment = require("moment"); // For handling dates and times

const app = express();
const port = 3000;

// Replace 'YOUR_TOKEN_HERE' & 'YOUR_AREA_ID_HERE'  with your actual token and area ID
const token = "YOUR_TOKEN_HERE";
const id = "YOUR_AREA_ID_HERE";

app.get("/load-shedding", async (req, res) => {
  try {
    const response = await axios.get(
      `https://developer.sepush.co.za/business/2.0/area?id=${id}`,
      {
        headers: {
          Token: `${token}`,
        },
      }
    );

    const today = moment().format("YYYY-MM-DD");
    const todaysEvents = response.data.events.filter((event) => {
      const startDate = moment(event.start).format("YYYY-MM-DD");
      return startDate === today;
    });

    if (todaysEvents.length > 0) {
      // Process all events for today
      let message = "Load Shedding will be at the following times today:";
      todaysEvents.forEach((event, index) => {
        const startTime = moment(event.start).format("HH:mm");
        const endTime = moment(event.end).format("HH:mm");
        message += ` ${index + 1}) from ${startTime} to ${endTime}`;
        if (index < todaysEvents.length - 1) {
          message += ";";
        } else {
          message += ".";
        }
      });
      res.send(message);
    } else {
      res.send("No load shedding events for today.");
    }
  } catch (error) {
    console.error("Error fetching load shedding data:", error);
    res.status(500).send("Failed to fetch load shedding data.");
  }
});

app.listen(port, () => {
  console.log(`Load shedding app listening at http://localhost:${port}`);
});
