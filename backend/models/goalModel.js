const mongoose = require("mongoose");

//define the data format through schema
const goalSchema = mongoose.Schema(
  {
    //this comes from the userModel
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    text: {
      type: String,
      required: [true, "Please add a text value"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Goal", goalSchema);
