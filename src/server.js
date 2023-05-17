const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const cors = require("cors");

app.use(bodyParser.text({ type: '*/*' }));
app.use(cors());
app.options('*', cors());

app.post('/api/beacon', (req, res) => {
  const data = req.body;
  // Work with analytics data as a JavaScript object
  console.log(data);
  console.log(`ip: ${req.ip} url: ${req.hostname +''+ req.url} received: ${new Date().toISOString()}`);
  res.status(200).send(true);
});

app.use(express.static(path.resolve(__dirname, "../public")));

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});

module.exports = app;