import mongoose from 'mongoose';
const RoomSchema = new mongoose.Schema(
  {
    hotelId: {
      type: [],
      required: true,
    },
    hotelName: {
      type: String,
      required: true,
    },
    hotelRoomNumber: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    maxPeople: {
      type: Number,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    roomNumbers: [{ number: Number, unavailableDates: { type: [Date] } }],
  },
  { timestamps: true }
);

export default mongoose.model('Room', RoomSchema);
