const express = require("express");
const router = express.Router();
const database = require("../database/index.js");

const routes = (req, res) => {
  database.findById
    .then(reviews => {
      console.log("we have reviews!");
      res.status(200).json(reviews);
    })
    .catch(err => {
      console.log(err);
      res.end();
    });
};

// *** GET all reviews *** //
router.get("/products/:id/reviews", routes);

(module.exports = router), routes;
