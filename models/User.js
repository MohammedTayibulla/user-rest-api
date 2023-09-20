const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: { type: String },
    age: { type: Number },
    address: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = new mongoose.model("User", UserSchema);
