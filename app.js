const express = require("express");
const app = express();
const router = require("./routes");

app.use(router);
app.use((req, res, next) => {
  res.status(404);
  res.send(`<h1>Halaman ${req.originalUrl} tidak ada</h1>`);
});

app.listen(3000, () => {
  console.log("Server running at http://127.0.0.1:3000");
});

module.exports = app;