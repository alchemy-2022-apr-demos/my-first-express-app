const express = require("express");

const app = express();

// app.use("/benny", (req, res) => {
//   res.json({ name: "Benny", age: 7 });
// });
app.use("/dogs", require("./lib/controllers/dogs.js"));

app.use("/", (req, res) => {
  res.send("hello world! you look great today by the way!");
});

app.listen(7890, () => {
  console.log(`🚀  Server started on Port 7890`);
});
