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
  console.log("here is the id", id);
  database.findById(id, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      console.log("we have reviews!", data);
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
app.get("/products/:id/reviews", routes);

// *** POST reviews *** //
app.post("/products/reviews", save);

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
