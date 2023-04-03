import Module from "../models/Module.js";

const getAllModules = async (req, res) => {
  try {
    const modules = await Module.find().populate("createdBy", "name email");
    res.status(200).json(modules);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

const getModulesByUserId = async (req, res) => {
  const { userId } = req.params;
  try {
    const modules = await Module.find({ createdBy: userId })
      .populate("createdBy")
      .populate("cards")
      .exec();
    res.status(200).json(modules);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

const getModuleById = async (req, res) => {
  const { id } = req.params;
  console.log(id);

  try {
    const module = await Module.findById(id).populate("cards").exec();
    if (!module) {
      return res.status(404).json({ error: "Module not found" });
    }
    res.status(200).json(module);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

const createModule = async (req, res) => {
  const { title, description, userId } = req.body;
  try {
    const module = new Module({
      title,
      description,
      createdBy: userId,
    });
    await module.save();
    res.status(201).json(module);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

const updateModule = async (req, res) => {
  const { id, title, description } = req.body;
  try {
    const module = await Module.findById(id).exec();
    if (!module) {
      return res.status(404).json({ error: "Module not found" });
    }
    if (module.createdBy.toString() !== req.user.id) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    module.title = title || module.title;
    module.description = description || module.description;
    await module.save();
    res.status(200).json(module);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

const deleteModule = async (req, res) => {
  const { id } = req.body;
  try {
    const module = await Module.findById(id);
    if (!module) {
      return res.status(404).json({ error: "Module not found" });
    }
    if (module.createdBy.toString() !== req.user.id) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    await module.remove();
    res.status(200).json({ message: "Module deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

export default {
  getAllModules,
  getModuleById,
  createModule,
  updateModule,
  deleteModule,
  getModulesByUserId,
};
