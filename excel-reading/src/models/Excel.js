import mongoose from 'mongoose';

const excelSchema = new mongoose.Schema(
  {
    data: { type: Array, required: true },
    originalFileName: { type: String },
    uploadedAt: { type: Date, default: Date.now }
  },
  { timestamps: true }
);

export default mongoose.model('Excel', excelSchema);
