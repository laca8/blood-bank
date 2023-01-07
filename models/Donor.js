const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const donorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name required"],
    },
    disease: {
      type: String,
    },
    age: {
      type: String,
    },
    blood: {
      type: String,
      required: [true, "blood required"],
    },
    city: {
      type: String,
    },
    phone: {
      type: String,
    },
    time: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("donor", donorSchema);
