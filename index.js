const express = require('express');


const app = express();

const port = 3070;

app.get('/', (req, res) => {
  res.send("Davide Pirolo - 655387"); // e.g. Mario Rossi - 123456
});


app.listen(port, (err) => {
  console.log(`running server on from port:::::::${port}`);
});