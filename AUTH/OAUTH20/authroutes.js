const passport = require("passport");
const mongoose = require("mongoose");
const User = require("./models/user");
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


module.exports = app => {

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


  app.get(
    "/auth/google",
    passport.authenticate("google", {   //put session : false if not using session
      scope: ["profile", "email"]
    })
  );
  app.get("/auth/google/callback", passport.authenticate("google"), (req,res) => {  //put "google", {session:false} if not using session
    // res.send({ token: createtoken(user) });    JWT MPA
    // res.render('authenticated.ejs', {token : createtoken(req.user)})      JWT SPA, more setup req given in this folder
    // res.redirect('/somewhere')   SPA session and cookie

  });
  app.get("/auth/logout", (req, res) => {
    req.logout();
    res.redirect('/');
  });




};
