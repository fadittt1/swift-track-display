import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      unique: true,
    },
    company_name: { type: String, default: null },
    contact_name: { type: String, default: null },
    phone: { type: String, default: null },
    address: { type: String, default: null },
    vehicle_count: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export const Profile = mongoose.model('Profile', profileSchema);
