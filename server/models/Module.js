import mongoose from "mongoose";

const moduleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  cards: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Card",
    },
  ],
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

// moduleSchema.pre("remove", async function (next) {
//   await Card.deleteMany({ _id: { $in: this.cards } });
//   next();
// });

const Module = mongoose.model("Module", moduleSchema);
export default Module;
