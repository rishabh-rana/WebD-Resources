const express = require('express');
const mongoose = require('mongoose');
const app = express();
const passport = require('passport');

// mongoose.connect();


if (process.env.NODE_ENV==='production') {
  app.use(express.static("client/build"));

  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

require('./routes/auth')(app);



app.listen(process.env.PORT || 5000, process.env.IP);
