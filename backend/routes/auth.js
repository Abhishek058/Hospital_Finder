const express = require("express");
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const router = express.Router();

//create a user using post "api/auth"
router.post(
  "/createuser",
  [
    body("name").isLength({ min: 5 }),
    body("email").isEmail(),
    body("password").isLength({ min: 6 }),
  ],
  async (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try{
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({ error: "Sorry user already exist" });
    }
    user = await User.create({
      name: req.body.name,
      password: req.body.password,
      email: req.body.email,
    });
    // .then((user) => res.json(user))
    // .catch((err) => {
    //   console.log(err);
    //   res.json({ error: "please enter unique values" });
    // });
    res.json(user);}
    catch(error){
      console.error(error.message);
      res.status(500).send("Some Error Occured")
    }
  }
);

module.exports = router;
