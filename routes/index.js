const express = require("express");
const router = express.Router(); // To create a route on the server its needed to import the express.Router function

router.get("/", (req, res) => {
  // Get request to the '/' directory/link.
  // res.send("hello world");
  res.render("index");
});

module.exports = router; // EXport the created route so that it can be used in the main server file.
