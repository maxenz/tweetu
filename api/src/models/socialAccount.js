const mongoose = require("mongoose");

const socialAccountSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  account_id: {
    type: Number,
    required: true,
    unique: true,
  },
  description: {
    type: String,
  },
  followers: {
    type: Number,
    required: true,
    validate(value) {
      if (value < 0) {
        throw new Error("Followers must be a number > 0");
      }
    },
  },
  followed_by: {
    type: Number,
    required: true,
    validate(value) {
      if (value < 0) {
        throw new Error("Followed by must be a number > 0");
      }
    },
  },
});

const SocialAccount = mongoose.model("SocialAccount", socialAccountSchema);

module.exports = SocialAccount;
