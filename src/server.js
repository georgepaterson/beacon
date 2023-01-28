const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({
  extended: false
})
);
app.use(bodyParser.text());

app.post("/api/beacon", (req, res) => {
  console.log(req.body);
  return res.status(204);
});

app.use(express.static(path.resolve(__dirname, "../public")));

const PORT = 9000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});

module.exports = app;