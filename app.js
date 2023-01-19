const express = require("express");
const addDays = require("date-fns/addDays");
const app = express();

app.get("/", (request, response) => {
  let date = new Date();
  let new_date = addDays(date, 100);
  response.send(
    `${new_date.getDate()}/${new_date.getMonth() + 1}/${new_date.getFullYear()}`
  );
});
module.exports = app;
