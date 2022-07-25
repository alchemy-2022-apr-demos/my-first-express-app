const express = require("express");

const app = express();

app.use("/benny", (req, res) => {
  res.send("benny is cute!");
});

app.use("/", (req, res) => {
  res.send("hello world!");
});

app.listen(7890, () => {
  console.log(`🚀  Server started on Port 7890`);
});
