const express = require("express");
const router = express.Router();

const User = require("../models/User");

router.get("/", (req, res) => {
  User.find((err, users) => res.status(200).send(users));
});

router.post("/add", (req, res) => {
  const newUser = new User({
    username: req.body.username,
    password: req.body.password
  });
  newUser
    .save()
    .then(() => console.log(`Added user ${req.body.username}`))
    .catch(err => console.log(err))
    .then(() => res.status(200).send({ msg: "OK" }));
});

module.exports = router;
