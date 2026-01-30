import express from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../models/User.js';
import { Profile } from '../models/Profile.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

const signToken = (userId) =>
  jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '7d' });

// POST /auth/register
router.post('/register', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }
    if (password.length < 6) {
      return res.status(400).json({ error: 'Password must be at least 6 characters' });
    }

    const existing = await User.findOne({ email: email.trim().toLowerCase() });
    if (existing) {
      return res.status(400).json({ error: 'User already registered with this email' });
    }

    const user = await User.create({
      email: email.trim().toLowerCase(),
      password,
    });

    await Profile.create({ user_id: user._id });

    const token = signToken(user._id);
    const userObj = user.toObject();
    delete userObj.password;

    res.status(201).json({
      user: { id: user._id.toString(), email: user.email },
      token,
    });
  } catch (err) {
    res.status(500).json({ error: err.message || 'Registration failed' });
  }
});

// POST /auth/login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    const user = await User.findOne({ email: email.trim().toLowerCase() }).select('+password');
    if (!user) {
      return res.status(401).json({ error: 'Invalid login credentials' });
    }

    const match = await user.comparePassword(password);
    if (!match) {
      return res.status(401).json({ error: 'Invalid login credentials' });
    }

    const token = signToken(user._id);
    res.json({
      user: { id: user._id.toString(), email: user.email },
      token,
    });
  } catch (err) {
    res.status(500).json({ error: err.message || 'Login failed' });
  }
});

// GET /auth/me — current session (validate token, return user)
router.get('/me', protect, (req, res) => {
  const user = req.user;
  res.json({
    user: { id: user._id.toString(), email: user.email },
  });
});

export default router;
