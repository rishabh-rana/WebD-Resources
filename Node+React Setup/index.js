const express = require('express');
const mongoose = require('mongoose');
const app = express();
const keys = require('./config/keys');


mongoose.connect(keys.mongoURI);




// SPECIAL
if (process.env.NODE_ENV==='production') {
  app.use(express.static("client/build"));

  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
// SPECIAL



// IMP
// ADD A SCRIPT OF: "concurrently \" nodemon index.js \" \"npm start --prefix client \" "



// NO SPECIAL INPUT IN REACT SIDE JUST KEEP PORT DIFFERENT



require('./routes/auth.js')(app);



app.listen(process.env.PORT || 5000, process.env.IP);
