const express = require("express");
const parser = require("body-parser");
const { join } = require("path");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3030;

// Postgres Database -- Sarah
const database = require("../database/index.js");

// Mongo Database -- Trevor
// const db = require(join(__dirname, "../database/index.js"));

// For mocha testing
// const routes = require("../test/routes.spec.js");
// app.use("/api/v1", routes);

app.use(express.static(join(__dirname, "../public")));
app.use(parser.json());
app.use(cors());

const routes = (req, res) => {
  let id = req.params.id;
  // console.log("here is the id", id);
  database.findById(id, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      // console.log("we have reviews!", data);
      res.status(200).json(data);
    }
  });
};

const save = (req, res) => {
  // console.log("req.body on post ->", req.body);
  let item = req.body;
  database.saveReview(item, (err, data) => {
    if (err) {
      console.log("error in db.save", err);
      res.end();
    } else {
      // console.log("hell yes", data);
      res.status(201).json(data);
    }
  });
};

const update = (req, res) => {
  let id = req.params.id;
  let item = req.body;
  database.updateReview(id, item, (err, data) => {
    // console.log("req.body", req.body);
    if (err) {
      console.log("error in db.update", err);
      res.end();
    } else {
      // console.log("awww yeah", data);
      res.status(201).json(data);
    }
  });
};

const delReview = (req, res) => {
  let id = req.params.id;
  database.deleteReview(id, (err, data) => {
    if (err) {
      console.log("errre in db.delReview", err);
      res.end();
    } else {
      // console.log("deleted that shizzz", data);
      res.status(201).json(data);
    }
  });
};

// *** GET all reviews *** //
app.get("/products/:id/reviews", routes);

// *** POST new reviews *** //
app.post("/products/reviews", save);

// *** POST update reviews *** //
app.put("/products/:id/reviews", update);

// *** DELETE a review *** //
app.delete("/products/:id/reviews", delReview);

// app.get("/products/:id/reviews", (req, res) => {
//   let id = req.params.id;

//   db.findById(id, (err, reviews) => {
//     if (err) {
//       console.log("error finding reviews by product_id");
//       res.sendStatus(400);
//     } else {
//       res.json(reviews);
//     }
//   });
// });

// app.post("/products/reviews", (req, res) => {
//   console.log("req.body on post ->", req.body);
//   db.save(req.body, (err, data) => {
//     if (err) console.log("we got an error", err);
//     else {
//       console.log("yo this may have done just worked");
//       res.sendStatus(201);
//     }
//   });
// });

app.listen(port, () => console.log(`listening on port ${port}`));
