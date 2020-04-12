const express = require("express");
const Twitter = require("twitter-lite");
const auth = require("../middleware/auth");
const router = new express.Router();

const {
  TWITTER_CONSUMER_KEY,
  TWITTER_CONSUMER_SECRET,
  TWITTER_ACCESS_TOKEN_KEY,
  TWITTER_ACCESS_TOKEN_SECRET,
} = process.env;

const client = new Twitter({
  subdomain: "api",
  version: "1.1",
  consumer_key: TWITTER_CONSUMER_KEY,
  consumer_secret: TWITTER_CONSUMER_SECRET,
  access_token_key: TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: TWITTER_ACCESS_TOKEN_SECRET,
});

router.get("/api/twitter/userSearch", auth, async (req, res) => {
  const { q } = req.query;
  try {
    const results = await client.get("users/search", { q });
    return res.send(results);
  } catch (e) {
    res.status(500).send(e);
  }
});



module.exports = router;
