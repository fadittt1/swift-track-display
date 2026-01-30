import express from 'express';
import { Profile } from '../models/Profile.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

router.use(protect);

// GET /profiles/me
router.get('/me', async (req, res) => {
  try {
    let profile = await Profile.findOne({ user_id: req.user._id });
    if (!profile) {
      profile = await Profile.create({ user_id: req.user._id });
    }
    const doc = profile.toObject();
    res.json({
      id: doc._id.toString(),
      user_id: doc.user_id.toString(),
      company_name: doc.company_name ?? null,
      contact_name: doc.contact_name ?? null,
      phone: doc.phone ?? null,
      address: doc.address ?? null,
      vehicle_count: doc.vehicle_count ?? 0,
      created_at: doc.createdAt,
      updated_at: doc.updatedAt,
    });
  } catch (err) {
    res.status(500).json({ error: err.message || 'Failed to fetch profile' });
  }
});

// PATCH /profiles/me
router.patch('/me', async (req, res) => {
  try {
    const { company_name, contact_name, phone, address, vehicle_count } = req.body;
    const updates = {};
    if (company_name !== undefined) updates.company_name = company_name;
    if (contact_name !== undefined) updates.contact_name = contact_name;
    if (phone !== undefined) updates.phone = phone;
    if (address !== undefined) updates.address = address;
    if (vehicle_count !== undefined) updates.vehicle_count = Number(vehicle_count) || 0;

    let profile = await Profile.findOne({ user_id: req.user._id });
    if (!profile) {
      profile = await Profile.create({ user_id: req.user._id });
    }
    Object.assign(profile, updates);
    await profile.save();

    const doc = profile.toObject();
    res.json({
      id: doc._id.toString(),
      user_id: doc.user_id.toString(),
      company_name: doc.company_name ?? null,
      contact_name: doc.contact_name ?? null,
      phone: doc.phone ?? null,
      address: doc.address ?? null,
      vehicle_count: doc.vehicle_count ?? 0,
      created_at: doc.createdAt,
      updated_at: doc.updatedAt,
    });
  } catch (err) {
    res.status(500).json({ error: err.message || 'Failed to update profile' });
  }
});

export default router;
