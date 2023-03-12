const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const dotenv = require("dotenv")

const AuthRoute = require("./routes/auth");

dotenv.config({path: './config/config.env'})

mongoose.connect(
  "mongodb+srv://node_crud:nderitucharles2002@cluster0.ah3dbr5.mongodb.net/api-node"
);
const db = mongoose.connection;

db.on("error", (err) => {
  console.log(err);
});

db.once("open", () => {
  console.log("Database Connection Established");
});

const app = express();

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use("/api", AuthRoute);
