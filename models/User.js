const { Schema, model } = require("mongoose");
const Profile = require("./Profile");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 30,
      trim: true,
    },

    email: {
      type: String,
      trim: true,
      required: true,
    },

    password: {
      type: String,
      required: true,
    },

    profile: {
      type: Schema.type.objectId,
      ref: Profile,
    },
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
