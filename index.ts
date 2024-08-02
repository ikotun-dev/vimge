import express from "express";
import morgan from "morgan";
import path from "path";
const app = express();
//
// app.use(express.static(path.join(__dirname, "../client/build")));
//
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../client/build", "index.html"));
// });
//
app.use(morgan("dev"));

app.get("/", (req, res) => {
  // res.send("Hello World");
  res.render("index");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
