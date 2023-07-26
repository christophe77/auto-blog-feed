require("dotenv").config();
const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const articleRouter = require("./routes/articleRouter");
const intervalQuestions = require("./libs/openAi/intervalQuestions");

const { SERVER_PORT, LANGUAGE, THEME_IN_ENGLISH, MONGO_DB_CONNECTION_STRING } = process.env;

const app = express();
const allowedOrigins = ['http://localhost:3000', '*'];

const options = {
  origin: allowedOrigins
};
app.use(cors(options));
app.use(express.json());
app.use("/article", articleRouter);


app.get("/", (req, res) => {
  res.send("Auto Blog Feed API");
});



mongoose
  .connect(MONGO_DB_CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Database Connected'))
  .catch(err => console.log(err));


app.listen(SERVER_PORT, () => {
  console.log(`server started on port ${SERVER_PORT}`);
});


intervalQuestions(LANGUAGE, THEME_IN_ENGLISH);

setInterval(() => {
  intervalQuestions(LANGUAGE, THEME_IN_ENGLISH);
}, 1000 * 60 * 30);
