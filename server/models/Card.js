import mongoose from "mongoose";

const cardSchema = new mongoose.Schema({
  front: {
    type: String,
    required: true,
  },
  back: {
    type: String,
    required: true,
  },
  lastStudied: {
    type: Date,
    default: () => Date.now(),
  },
  numCorrect: {
    type: Number,
    default: 0,
  },
  numIncorrect: {
    type: Number,
    default: 0,
  },
  module: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Module",
      required: true,
    },
  ],
});

export default mongoose.model("Card", cardSchema);
