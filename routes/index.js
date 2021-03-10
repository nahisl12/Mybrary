const express = require("express");
const router = express.Router(); // To create a route on the server its needed to import the express.Router function
const Book = require("../models/book");

router.get("/", async (req, res) => {
  let books = [];
  try {
    books = await Book.find().sort({ createdAt: "desc" }).limit(10).exec();
  } catch {
    books = [];
  }

  res.render("index", { books: books });
});

module.exports = router; // EXport the created route so that it can be used in the main server file.
