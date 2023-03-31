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
});

const User = mongoose.model("User", userSchema);

export default User;
