import Card from "../models/Card.js";
import Module from "../models/Module.js";

const createCard = async (req, res) => {
  const { id } = req.params;
  const { cards } = req.body;
  try {
    const module = await Module.findById(id).exec();

    if (!module) {
      return res.status(404).json({ error: "Module not found" });
    }
    const newCards = cards.map((card) => ({
      ...card,
      module: [module._id],
    }));

    const savedCards = await Card.insertMany(newCards);

    module.cards.push(...savedCards.map((card) => card._id));
    await module.save();

    res.status(201).json(savedCards);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

const getCardsByModule = async (req, res) => {
  try {
    const { moduleId } = req.params;

    const cards = await Card.find({ module: moduleId });

    res.status(200).json({ cards });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateCard = async (req, res) => {
  try {
    const { id } = req.params;
    const { front, back } = req.body;

    const card = await Card.findByIdAndUpdate(
      id,
      { front, back },
      { new: true }
    );

    res.status(200).json({ card });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteCard = async (req, res) => {
  try {
    const { id } = req.params;

    await Card.findByIdAndDelete(id);

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export default {
  deleteCard,
  updateCard,
  getCardsByModule,
  createCard,
};
