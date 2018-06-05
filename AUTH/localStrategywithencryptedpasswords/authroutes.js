const mongoose = require("mongoose");
const User = require("./models/user");
const servicepassport = require("./passport");  //this is passport.js present in this folder only, the setup file
const local = require("passport-local");
const passport = require("passport");

const requiresignin = passport.authenticate("local", { session: false });

// WITH jwt


// const requireAuth = passport.authenticate("jwt", { session: false });
// const secret = "k2enfoe4nfewf89ubwkeufkebfebuf";
// const jwt = require("jwt-simple");
// function createtoken(user) {
//   const timestamp = new Date().getTime();
//   return jwt.encode({ sub: user.id, iat: timestamp }, secret);
// }


//JWT ENDS

module.exports = function(app) {


  // JWT

  // app.get("/api/protected", requireAuth, (req, res) => {
  //   res.send("hey ya");
  // });



  // COOKIES - no special setup needed, automatically injects COOKIES

//   MAKE MIDDLEWARE TO PROTECT ROUTES :
//   module.exports = (req, res, next) => {
//   if (!req.user) {
//     return res.status(401).send({error:"You must be logged in to buy credits"});
//   }
//   next();
// };
// just put this middleware to protect routes



//session - access the user as req.user if its null, unauthenticated

// JUST MAKE MIDDLEWARE

// function isloggedin(req,res,next){
//     if(req.isAuthenticated()){
//         return next();
//     }
//
//
//     res.redirect('/campgrounds');
// }


  app.post("/api/signup", (req, res) => {
    if (!req.body.email || !req.body.password) {
      res.status(400).send({ error: "Please provide email and password" });
    }

    User.create(req.body, (err, user) => {
      if (err) {
        res.status(400).send({ error: "Please provide email and password" });
      }
      // res.send({ token: createtoken(user) });    JWT MPA
      // res.render('authenticated.ejs', {token : createtoken(req.user)})      JWT SPA ,MORE SETUP REQUIRED
      // res.redirect('/somewhere')   SPA session and cookie
    });
  });

  app.post("/api/signin", requiresignin, (req, res) => {
    // res.send({ token: createtoken(req.user) });  JWT MPA
    // res.render('authenticated.ejs', {token : createtoken(req.user)})      JWT SPA , MORE SETUP REQ
    // res.redirect('/somewhere')   SPA session and cookie
  });
};
