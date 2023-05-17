const express = require("express");
const cors = require("cors");

const app = express();

var corOptions = {
  origin: "https://localhost:8081",
};

//middleware

app.use(cors(corOptions));

app.use(express.json());

app.use(express.urlEncoded({ extended: true }));

//testing api

app.get("/", (req, res) => {
  res.json({ message: "hello from api" });
});
