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
    default: Date.now,
  },
  numCorrect: {
    type: Number,
    default: 0,
  },
  numIncorrect: {
    type: Number,
    default: 0,
  },
});

const moduleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  cards: {
    type: [cardSchema],
    required: true,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

export default mongoose.model("Module", moduleSchema);
