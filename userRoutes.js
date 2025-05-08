import express from 'express';
import User from '../models/User.js';
const router = express.Router();

// Create
router.post('/', async (req, res) => {
  try {
    const last   = await User.findOne().sort({ id: -1 }).lean();
    const nextId = last ? last.id + 1 : 1;
    const user   = await User.create({ id: nextId, ...req.body });
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Read all
router.get('/', async (req, res) => {
  const users = await User.find().sort({ id: 1 });
  res.json(users);
});

// Read one
router.get('/:id', async (req, res) => {
  const user = await User.findOne({ id: +req.params.id });
  if (!user) return res.status(404).json({ error: 'Not found' });
  res.json(user);
});

// Update
router.put('/:id', async (req, res) => {
  const user = await User.findOneAndUpdate(
    { id: +req.params.id },
    req.body,
    { new: true }
  );
  if (!user) return res.status(404).json({ error: 'Not found' });
  res.json(user);
});

// Delete
router.delete('/:id', async (req, res) => {
  const deleted = await User.findOneAndDelete({ id: +req.params.id });
  if (!deleted) return res.status(404).json({ error: 'Not found' });
  res.json({ message: 'Deleted' });
});

export default router;
