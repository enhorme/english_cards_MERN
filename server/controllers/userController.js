import User from "../models/User.js";

const createOrGetUser = async (req, res) => {
  try {
    let user = await User.findOne({
      firebaseUserId: req.body.id || req.query.id,
    }).populate('modules').exec();
    if (!user) {
      user = new User({
        firebaseUserId: req.body.id || req.query.id,
        name: req.body.name,
        email: req.body.email,
        photoUrl: req.body.photoUrl,
      });
      await user.save();
    }

    res.json({ user });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

const getUsersWithModuleCount = async (req, res) => {
  try {
    const currentUserId = req.query._id || ''

    const users = await User.find().where('_id').ne(currentUserId).populate("modules", "_id");

    const usersWithModuleCount = users.map((user) => {
      return {
        _id: user._id,
        name: user.name,
        email: user.email,
        moduleCount: user.modules.length,
        photoUrl:user.photoUrl,
      };
    });

    return res.json(usersWithModuleCount);
    return res.json([])
  } catch (error) {
    console.error("Error while getting users with module count:", error);
    throw error;
  }
};

export default {
  createOrGetUser,
  getUsersWithModuleCount,
};
