// SETUP, INCLUDE THIS AS require('path_to_here');


const passport = require("passport");
const strategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys.js");
const mongoose = require("mongoose");
const User = mongoose.model("User");



passport.use(
  new strategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googlesecret,
      callbackURL: "/auth/google/callback"
    },
    async (accessToken, refreshtoken, profile, done) => {
      const founduser = await User.findOne({ googleid: profile.id });
      if (founduser) {
        done(null, founduser);
      } else {
        const user = await new User({ googleid: profile.id }).save();
        done(null, user);
      }
    }
  )
);





//session

passport.use(new local(user.authenticate()));
passport.serializeUser(user.serializeUser());
passport.deserializeUser(user.deserializeUser());


//jwt

const jwtstrat = require("passport-jwt").Strategy;
const extractjwt = require("passport-jwt").ExtractJwt;
const secret = "k2enfoe4nfewf89ubwkeufkebfebuf";

const jwtoptions = {
  jwtFromRequest: extractjwt.fromHeader("authorization"),
  secretOrKey: keys.jwtsecret
};

const jwtLogin = new jwtstrat(jwtoptions, function(payload, done) {
  User.findById(payload.sub, (err, user) => {
    if (err) {
      console.log(1);
      return done(err, false);
    }

    if (user) {
      console.log(2);

      return done(null, user);
    }
    console.log(3);

    return done(null, false);
  });
});

passport.use(jwtLogin);


//COOKIES


const mongoose = require("mongoose");
const User = mongoose.model("User");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => done(null, user));
});
