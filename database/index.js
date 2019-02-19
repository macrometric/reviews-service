const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://tdsmith27:homerepot@cluster0-cawa1.mongodb.net/reviews?retryWrites=true"
);

const reviewSchema = mongoose.Schema({
  review_id: "number",
  product_id: "number",
  author: "string",
  date: "string",
  rating: "number",
  review: "string"
});

const Review = mongoose.model("Review", reviewSchema);

const save = (doc, cb) => {
  let review = new Review(doc);

  review
    .save()
    .then(data => cb(null, data))
    .catch(err => cb(err));
};

const findById = (id, cb) => {
  const query = Review.find({ product_id: id });
  query
    .exec()
    .then(response => cb(null, response))
    .catch(err => cb(err));
};

module.exports.save = save;
module.exports.Review = Review;
module.exports.findById = findById;
