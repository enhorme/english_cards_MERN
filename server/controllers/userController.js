import User from "../models/User.js";
import Module from "../models/Module.js";

const createOrGetUser = async (req, res) => {
  try {
    let user = await User.findOne({
      firebaseUserId: req.body.id || req.query.id,
    });
    if (!user) {
      user = new User({
        firebaseUserId: req.body.id,
        name: req.body.name,
        email: req.body.email,
        photoUrl: req.body.photoUrl,
      });
      await user.save();
    }

    const modules = await Module.find({ createdBy: user._id })
      .populate("cards")
      .exec();

    res.json({ user, modules });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

export default {
  createOrGetUser,
};
