// POSTGRES DATABASE QUERIES

const config = require("../knexfile.js");
const environment = "development";
const knex = require("knex")(config[environment]);

const findById = (id, cb) => {
  knex("reviews")
    .where({ product_id: id })
    .then(data => cb(null, data))
    .catch(err => {
      cb(err);
      console.log("error in findById", err);
    });
};

const saveReview = (info, cb) => {
  knex("reviews")
    .insert({
      product_id: info.product_id,
      date: info.date,
      rating: info.rating,
      review: info.review
    })
    .then(data => cb(null, data))
    .catch(err => {
      cb(err);
      console.log("error in saveReview", err);
    });
};

module.exports = { findById, saveReview };

// ORIGINAL CODE FOR MONGO DATABASE

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
