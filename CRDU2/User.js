import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  id:   { type: Number, unique: true, required: true },
  name: { type: String, required: true },
  email:{ type: String, required: true }
});
userSchema.index({ id: 1 }, { unique: true });

export default mongoose.model('User', userSchema);
