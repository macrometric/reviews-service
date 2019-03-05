process.env.NODE_ENV = "development";

const chai = require("chai");
const assert = require("assert");
const should = chai.should();
const chaiHttp = require("chai-http");

chai.use(chaiHttp);

// The "test" test
describe("Array", function() {
  describe("#indexOf()", function() {
    it("should return -1 when the value is not present", function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

// Start real tests
describe("GET /api/v1/products/:id/reviews", function() {
  it("should return all reviews", function(done) {
    chai
      .request("http://localhost:3030")
      .get("/api/v1/products/:id/reviews")
      .end(function(err, res) {
        should.not.exist(err);
        should.exist(res);
        res.should.have.status(200);
        res.body.should.be.a("array");
        done();
      });
  });
});

describe("POST /api/v1/products/reviews", function() {
  it("should return all reviews", function(done) {
    chai
      .request("http://localhost:3030")
      .post("/api/v1/products/reviews")
      .end(function(err, res) {
        should.not.exist(err);
        should.exist(res);
        res.should.have.status(201);
        done();
      });
  });
});
