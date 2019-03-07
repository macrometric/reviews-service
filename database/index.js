// POSTGRES DATABASE QUERIES

const config = require("../knexfile.js");
const environment = "development";
const knex = require("knex")(config[environment]);

const findById = (id, cb) => {
  knex("reviews")
    .join("users", "reviews.review_id", "=", "users.review_id")
    .join("products", "reviews.product_id", "=", "products.product_id")
    .where({ "reviews.product_id": id })
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

const updateReview = (id, info, cb) => {
  knex("reviews")
    .where("review_id", "=", id)
    .update({
      date: info.date,
      rating: info.rating,
      review: info.review
    })
    .then(data => {
      // console.log("data in updateReview cb", data);
      cb(null, data);
    })
    .catch(err => {
      console.log("err in updateReview cb", err);
      cb(err);
    });
};

const deleteReview = (id, cb) => {
  knex("reviews")
    .where("review_id", "=", id)
    .del()
    .then(data => cb(null, data))
    .catch(err => {
      cb(err);
      console.log("error in findById", err);
    });
};

module.exports = { findById, saveReview, updateReview, deleteReview };

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
