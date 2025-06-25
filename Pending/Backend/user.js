import mongoose from 'mongoose';

const pendingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  date: { type: Date, required: true },
  pdf: { 
      fileUrl: { type: String, required: true },  
      uploadDate : {type: Date, default: Date.now}
  },
  select: { type: String, required: true }
});

const PendingModel = mongoose.model("Pendingusers", pendingSchema);

export default PendingModel;
