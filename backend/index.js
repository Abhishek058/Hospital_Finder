const connectToMongo = require("./db");
const express = require("express");
connectToMongo();

const app = express();
const port = 5000;

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.get("/api/v1/login", (req, res) => {
//   res.send("Hello Login!");
// });

app.use(express.json());

app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.listen(port, () => {
  console.log(`site hosting at http://localhost:${port}`);
});
