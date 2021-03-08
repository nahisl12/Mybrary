if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
  // require("dotenv").parse();
}

const express = require("express"); // import express to be used
const app = express(); // set up/initialise an instance of the imported express
const expressLayouts = require("express-ejs-layouts");
const ejs = require("ejs");

const indexRouter = require("./routes/index"); // Separate route import. this is the '/' default landing

app.set("view engine", "ejs"); // sets are required to make use of previously imported extra modules
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");
app.use(expressLayouts);
app.use(express.static("public"));

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

app.listen(process.env.PORT || 3000); // use the initialised app to listen to a port. 3000 by default.
