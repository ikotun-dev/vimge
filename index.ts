import express from "express";
import morgan from "morgan";

const app = express();

app.set("view engine", "ejs");
app.use(morgan("dev"));

app.get("/", (req, res) => {
  // res.send("Hello World");
  res.render("index");
});

app.listen(3000, () => {
  console.log("Serveris running on port 3000");
});
