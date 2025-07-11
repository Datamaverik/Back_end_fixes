const express = require("express");
const bcrypt = require("bcrypt");
const _ = require("lodash");
const router = express.Router();
const { User, validateUser } = require("../models/user");

//  register a new user
router.post("/", async (req, res) => {
  const { error } = validateUser(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send("User already registered");

  try {
    user = new User(_.pick(req.body, ["name", "email", "password"]));
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();

    const token = user.generateAuthToken();
    res
      .header("x-auth-token", token)
      .send(_.pick(user, ["name", "email", "_id"]));
  } catch (ex) {
    console.error(ex.message);
    return res.status(400).send(ex.message);
  }
});

module.exports = router;
