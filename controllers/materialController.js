import asyncHandler from '../middlewares/asyncHandler.js';
import Material from '../models/materialModel.js';

const postMaterial = asyncHandler(async (req, res) => {
  try {
    console.log(req);
    
    const material = new Material({ ...req.body });
    await material.save();
    res.json(material);
  } catch (error) {
    console.log(error);
    res.status(400).json(error.message);
  }
});

const getMaterials = asyncHandler(async (req, res) => {
  try {
    const materials = await Material.find({}, '-imageUrl');
    res.json(materials);
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
});

const getMaterialById = asyncHandler(async (req, res) => {
  try {
    const material = await Material.findById(req.params.id);
    if (material) {
      res.json(material);
    } else {
      res.status(404);
      throw new Error('material not found');
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
});

const updateMaterial = asyncHandler(async (req, res) => {
  try {
    const material = await Material.findByIdAndUpdate(
      req.params.id,
      { ...req.body },
      { new: true }
    );
    await material.save();
    res.json(material);
  } catch (error) {
    console.log(error);
    res.status(400).json(error.message);
  }
});

const deleteMaterial = asyncHandler(async (req, res) => {
  try {
    const removed = await Material.findByIdAndDelete(req.params.id);
    res.json(removed);
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
});


export {
  getMaterials,
  postMaterial,
  getMaterialById,
  updateMaterial,
  deleteMaterial
};
