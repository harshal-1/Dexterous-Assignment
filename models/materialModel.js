import mongoose from 'mongoose';

const materialSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    technology: { type: String, required: true },
    colors: { type: Array, required: true },
    pricePerGram: { type: Number, required: true },
    applicationTypes: { type: Array, required: true },
    imageUrl: { type: String, required: true },    
  },
  { timestamps: true }
);

const Material = mongoose.model('Material', materialSchema)
export default Material;