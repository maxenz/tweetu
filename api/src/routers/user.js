const express = require("express");
const router = new express.Router();
const auth = require("../middleware/auth");
const User = require("../models/user");
const SocialAccount = require("../models/socialAccount");

router.post("/api/users", async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    const token = await user.generateAuthToken();
    res.status(201).send({ user, token });
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
});

router.post("/api/users/login", async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    const token = await user.generateAuthToken();
    res.send({ user, token });
  } catch (e) {
    console.log(e);
    res.sendStatus(400);
  }
});

router.post("/api/users/logout", auth, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter(
      (token) => token.token !== req.token
    );
    await req.user.save();
    res.send();
  } catch (e) {
    res.sendStatus(500);
  }
});

router.patch("/api/users/favourite", auth, async (req, res) => {
  try {
    let socialAccount = await SocialAccount.findOne({ name: req.body.name });

    if (!socialAccount) {
      socialAccount = new SocialAccount(req.body);
      await socialAccount.save();
    }

    const followedAccounts = req.user.followedAccounts.map((acc) =>
      acc.toString()
    );
    const account = socialAccount._id.toString();

    if (followedAccounts.includes(account)) {
      req.user.followedAccounts = req.user.followedAccounts.filter(
        (account) => account.toString() !== socialAccount._id.toString()
      );
    } else {
      req.user.followedAccounts = [
        ...req.user.followedAccounts,
        socialAccount._id,
      ];
    }

    await req.user.save();
    await req.user
      .populate({
        path: "followedAccounts",
      })
      .execPopulate();
    res.send({ user: req.user });
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/api/users/checkToken", auth, async (req, res) => {
  try {
    await req.user.populate({ path: "followedAccounts" }).execPopulate();
    res.status(200).send({ user: req.user });
  } catch (e) {
    res.sendStatus(500);
  }
});

module.exports = router;
