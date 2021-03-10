// when not a production environment use .env variables
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
  // require("dotenv").parse();
}

// Basic imports to start
const express = require("express"); // import express to be used
const app = express(); // set up/initialise an instance of the imported express
const expressLayouts = require("express-ejs-layouts");
const ejs = require("ejs");
const bodyParser = require("body-parser");

const indexRouter = require("./routes/index"); // Separate route import. this is the '/' default landing
const authorRouter = require("./routes/author");
const bookRouter = require("./routes/books");

app.set("view engine", "ejs"); // sets are required to make use of previously imported extra modules
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");
app.use(expressLayouts);
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: false }));

// Connect to mongodb
const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Mongoose"));

// routes
app.use("/", indexRouter); // required to use the route that was imported
app.use("/authors", authorRouter);
app.use("/books", bookRouter);

app.listen(process.env.PORT || 3000); // use the initialised app to listen to a port. 3000 by default.
