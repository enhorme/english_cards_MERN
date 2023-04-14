import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firebaseUserId: {
    type: String,
    required: true,
    unique: true,
  },
  name: String,
  email: String,
  photoUrl: String,
  modules: {
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Module",
      },
    ],
    default: [],
  },
  modulesCount: Number,
});

const User = mongoose.model("User", userSchema);

export default User;
