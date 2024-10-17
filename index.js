const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.json({ message: "Hello Crud Node Express" });
});

app.listen(process.env.PORT, () => {
  console.log("Server is listening on port 3000");
});
