const config = require("../knexfile.js");
const environment = "development";
const knex = require("knex")(config[environment]);

const findById = knex("reviews")
  .where({ product_id: 987264 })
  .catch(err => console.log(err));

const saveReview = (id, cb) => {
  knex("reviews")
    .insert({
      review_id: 10000019,
      product_id: 987264,
      date: "2019-02-02T03:06:44.523Z",
      rating: 4,
      review: "Here's a test review."
    })
    .then(data => cb(null, data))
    .catch(err => {
      cb(err);
      console.log(err);
    });
};

module.exports = { findById, saveReview };

// const mongoose = require("mongoose");
// mongoose.connect(
//   "mongodb+srv://tdsmith27:homerepot@cluster0-cawa1.mongodb.net/reviews?retryWrites=true",
//   { useNewUrlParser: true }
// );

// const reviewSchema = mongoose.Schema({
//   review_id: "number",
//   product_id: "number",
//   product_name: "string",
//   author: "string",
//   date: "string",
//   rating: "number",
//   review: "string"
// });

// const Review = mongoose.model("Review", reviewSchema);

// const save = (doc, cb) => {
//   let review = new Review(doc);

//   review
//     .save()
//     .then(data => cb(null, data))
//     .catch(err => cb(err));
// };

// const findById = (id, cb) => {
//   const query = Review.find({ product_id: id });
//   query
//     .exec()
//     .then(response => cb(null, response))
//     .catch(err => cb(err));
// };

// module.exports.save = save;
// module.exports.Review = Review;
// module.exports.findById = findById;
