const cookies = require("cookie-session");
const passport = require("passport");

app.use(
  cookies({
    maxAge: 30 * 24 * 3600 * 1000,
    keys: [keys.cookieKey]   //random
  })
);
app.use(passport.initialize());
app.use(passport.session());


//jwt
app.use(passport.initialize());


//session

app.use(require('express-session')({
    secret: 'ewkj ewkjc',
    resave : false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

//below only for ejs
app.use(function(req,res,next){
    res.locals.currentUser = req.user;    //access the user as currentUser in ejs files
    next();
});
