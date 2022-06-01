// user, post, body, replies

const { Schema, model } = require("mongoose");
const User = require("./User");
const Post = require("./Post");

const commentSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: User,
      required: true,
    },

    post: {
      type: Schema.Types.ObjectId,
      ref: Post,
      required: true,
    },
    body: {
      type: String,
      required: true,
      maxlength: 300,
      trim: true,
    },
    replies: [
      {
        body: {
          type: String,
          required: true,
        },
        user: {
          type: Schema.Types.ObjectId,
          ref: User,
          required: true,
        },
        createAt: {
          type: Date,
          default: new Date(),
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Comment = model("Comment", commentSchema);

module.exports = Comment;
