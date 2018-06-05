const mongoose = require("mongoose");
const bcrypt = require("bcrypt-nodejs");

const { Schema } = mongoose;

const Userschema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String
});

// UNIQUE = TRUE ALLOWS ONLY UNIQUE EMAILS TO SIGNUP

// PRE_HOOK DOES THIS FUNCTION BFORE "SAVING"
Userschema.pre("save", function(next) {
  const user = this;
  bcrypt.genSalt(10, function(err, salt) {   //create salt
    if (err) {
      return next(err);
    }

    bcrypt.hash(user.password, salt, null, function(err, hash) {  //hash password with salt
      if (err) {
        return next(err);
      }

      user.password = hash;
      next();
    });
  });
});

Userschema.methods.comparePassword =function(candidate, callback) {   //dehash password 
  bcrypt.compare(candidate, this.password, (err, isMatch)=> {
    if(err){ console.log(isMatch)
      return callback(err);}

    callback(null,isMatch);
  })
}

module.exports = mongoose.model("User", Userschema);
