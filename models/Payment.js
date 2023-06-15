import mongoose from "mongoose";

const schema = mongoose.Schema({
  razorpay_order_id: {
    type: String,
    reqiured: true,
  },
  razorpay_payment_id: {
    type: String,
    reqiured: true,
  },
  razorpay_signature: {
    type: String,
    reqiured: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Payment = mongoose.model("Payment", schema);
