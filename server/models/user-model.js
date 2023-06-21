const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  isAtivated: { type: Boolean, default: false },
  activationLink: { type: String, required: true },
});

module.exports = model("User", UserSchema);
