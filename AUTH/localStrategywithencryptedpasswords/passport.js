// SETUP, INCLUDE THIS AS require('path_to_here');


const passport = require("passport");
const User = require("./models/user");
const local = require("passport-local");



const locallogin = new local({usernameField : 'email'}, (email,password,done)=> {
  User.findOne({email:email}, (err,user)=> {
    if(err){return done(err,false)}

    if(!user){return done(null,false)}

    user.comparePassword(password,(err, isMatch)=> {
      if(err){ console.log("error here");
        return done(err);}
      if(!isMatch){return done(null,false);}

      return done(null,user);
    })

  })
})

passport.use(locallogin);



// JWT


// const jwtstrat = require("passport-jwt").Strategy;
// const extractjwt = require("passport-jwt").ExtractJwt;
// const secret = "k2enfoe4nfewf89ubwkeufkebfebuf";


// const jwtoptions = {
//   jwtFromRequest: extractjwt.fromHeader("authorization"),
//   secretOrKey: secret
// };
//
// const jwtLogin = new jwtstrat(jwtoptions, function(payload, done) {
//   User.findById(payload.sub, (err, user) => {
//     if (err) {
//       return done(err, false);
//     }
//
//     if (user) {
//       return done(null, user);
//     }
//
//     return done(null, false);
//   });
// });
//
// passport.use(jwtLogin);



// COOKIES

// const mongoose = require("mongoose");
// const User = mongoose.model("User");
//
// passport.serializeUser((user, done) => {
//   done(null, user.id);
// });
//
// passport.deserializeUser((id, done) => {
//   User.findById(id).then(user => done(null, user));
// });


//session

// passport.use(new local(user.authenticate()));
// passport.serializeUser(user.serializeUser());
// passport.deserializeUser(user.deserializeUser());
