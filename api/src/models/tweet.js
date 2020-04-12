const mongoose = require("mongoose");

const tweetSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "SocialAccount",
  },
  tweetTimestamp: {
    type: mongoose.Schema.Types.Date,
    required: true,
  },
});

const Tweet = mongoose.model("Tweet", tweetSchema);

module.exports = Tweet;
