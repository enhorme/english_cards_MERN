import Module from "../models/Module.js";

const getModules = async (req, res, next) => {
  try {
    const modules = await Module.find();
    res.status(200).json(modules);
  } catch (error) {
    next(error);
  }
};

const createModule = async (req, res, next) => {
  const { name, description, cards } = req.body;

  try {
    const module = new Module({
      name,
      description,
      cards,
      user: req.user.id, // assuming the user ID is stored in the request object
    });

    await module.save();

    res.status(201).json(module);
  } catch (error) {
    next(error);
  }
};

const getModuleById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const module = await Module.findById(id);

    if (!module) {
      return res.status(404).json({ message: "Module not found" });
    }

    res.status(200).json(module);
  } catch (error) {
    next(error);
  }
};

const updateModule = async (req, res, next) => {
  const { moduleId } = req.params;
  const { cards } = req.body;

  try {
    const module = await Module.findByIdAndUpdate(
      moduleId,
      { cards },
      { new: true }
    );

    if (!module) {
      return res.status(404).json({ message: "Module not found" });
    }

    res.status(200).json(module);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

const deleteModule = async (req, res, next) => {
  const { id } = req.params;

  try {
    const module = await Module.findByIdAndDelete(id);

    if (!module) {
      return res.status(404).json({ message: "Module not found" });
    }

    res.status(204).json();
  } catch (error) {
    next(error);
  }
};

export const moduleController = {
  getModules,
  createModule,
  getModuleById,
  updateModule,
  deleteModule,
};
