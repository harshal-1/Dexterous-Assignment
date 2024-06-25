import express from 'express';
const router = express.Router();

//controllers
import {
  getMaterials,
  postMaterial,
  getMaterialById,
  updateMaterial,
  deleteMaterial
} from '../controllers/materialController.js';

router
  .route('/')
  .get(getMaterials)
  .post(postMaterial);


router
  .route('/:id')
  .get(getMaterialById)
  .put(updateMaterial)
  .delete(deleteMaterial);


export default router;
