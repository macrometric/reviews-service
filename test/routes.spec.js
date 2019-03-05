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

const save = (req, res) => {
  // console.log("req.body on post ->", req.body);
  database.saveReview(req.body, (err, data) => {
    if (err) console.log("error in db.save", err);
    else {
      console.log("hell yes");
      res.sendStatus(201);
    }
  });
};

// *** GET all reviews *** //
router.get("/products/:id/reviews", routes);

// *** POST reviews *** //
router.post("/products/reviews", save);

(module.exports = router), routes, save;
