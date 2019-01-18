const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

const PORT = process.env.PORT || 8080;
const db = require("./config/keys").mongoURI;

mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("Mongoose connected"))
  .catch(err => console.log(err));

// MIDDLEWARES

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// ROUTES

const users = require('./api/users');
app.use('/api/users', users);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
