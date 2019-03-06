const express = require("express");
const router = express.Router();
const database = require("../database/index.js");
const parser = require("body-parser");

router.use(parser.urlencoded({ extended: false }));

const routes = (req, res) => {
  let id = req.params.id;
  database.findById(id, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      console.log("we have reviews!");
      res.status(200).json(data);
    }
  });
};

const save = (req, res) => {
  console.log("req.body on post ->", req.body);
  database.saveReview(req.body, (err, data) => {
    if (err) {
      console.log("error in db.save", err);
      res.end();
    } else {
      // console.log("hell yes", data);
      res.status(201).json(data);
    }
  });
};

// *** GET all reviews *** //
router.get("/products/:id/reviews", routes);

// *** POST reviews *** //
router.post("/products/reviews", save);

(module.exports = router), routes, save;
