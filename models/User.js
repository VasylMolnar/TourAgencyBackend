import mongoose from 'mongoose';
const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    country: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    city: {
      type: String,
      required: false,
    },
    phone: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    hotelName: {
      type: String,
      required: false,
      unique: true,
    },
    hotelId: {
      type: String,
      required: false,
      unique: true,
    },
    roomNumber: {
      type: String,
      required: false,
      unique: true,
    },
    endDate: {
      type: String,
      required: false,
      unique: true,
    },
    startDate: {
      type: String,
      required: false,
      unique: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model('User', UserSchema);
