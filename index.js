import express from "express";
import "dotenv/config";

const app = express();
const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/login", (req, res) => {
  res.send("<h1>This is my first request<h1>");
});

app.listen(port, () => {
  console.log(`Port is listen at ${port}`);
});
