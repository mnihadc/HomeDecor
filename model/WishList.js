const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const wishListSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  productId: {
    type: Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  createdTime: {
    type: Date,
    default: Date.now,
  },
});

const wishList = mongoose.model("WishList", wishListSchema);

module.exports = wishList;
