import User from "../models/User.js";

const createOrGetUser = async (req, res) => {
  try {
    let user = await User.findOne({ id: req.body.id });
    if (!user) {
      user = new User({
        firebaseUserId: req.body.id,
        name: req.body.name,
        email: req.body.email,
        photoUrl: req.body.photoUrl,
      });
      await user.save();
    }

    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

export default {
  createOrGetUser,
};
