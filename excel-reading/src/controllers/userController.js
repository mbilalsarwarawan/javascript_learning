import User from '../models/User.js';
import asyncHandler from 'express-async-handler';
export const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
});

export const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.status(200).json(user);
});

export const createUser = asyncHandler(async (req, res) => {
  const user = await User.create(req.body);
  res.status(201).json(user);
});

export const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.status(200).json(user);
});

export const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.status(200).json({ message: 'User deleted successfully' });
});